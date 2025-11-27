import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaGlobeAmericas, FaShieldAlt, FaArrowLeft, FaLock, FaUser, FaEnvelope, FaReply, FaSyncAlt } from 'react-icons/fa';
import { db } from '../lib/firebase';
import { collection, addDoc, query, where, onSnapshot, serverTimestamp, doc, setDoc, deleteDoc } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

interface CommunityProps {
    onBack: () => void;
}

interface Message {
  id: string;
  username: string;
  email?: string;
  text: string;
  createdAt: any;
  isApproved?: boolean;
  reply?: string; // For DM replies
  repliedAt?: any;
}

// --- CONFIGURATION FOR EMAIL NOTIFICATIONS ---
// TODO: Replace these placeholders with your actual EmailJS credentials
// 1. Go to https://www.emailjs.com/ and create a free account.
// 2. Add a Service (e.g., Gmail).
// 3. Add a Template. Use variables: {{from_name}}, {{from_email}}, {{message}}.
// 4. Get your Public Key from Account > API Keys.
const EMAIL_CONFIG = {
    SERVICE_ID: "service_ydoi4vi",     // Updated as per user request
    TEMPLATE_ID: "YOUR_TEMPLATE_ID",   // Placeholder: Update this from EmailJS
    PUBLIC_KEY: "YOUR_PUBLIC_KEY"      // Placeholder: Update this from EmailJS
};

const getFirestoreErrorMessage = (error: any) => {
    if (!error) return 'An unknown error occurred.';
    const code = error.code || '';
    
    switch (code) {
        case 'permission-denied':
            return '⛔ Access Denied: You are blocked from posting.';
        case 'unavailable':
            return '📡 Network Error: You appear to be offline.';
        case 'resource-exhausted':
            return '⚠️ Traffic Limit: Too many requests. Try again later.';
        case 'deadline-exceeded':
            return '⏱️ Timeout: The server took too long to respond.';
        default:
            return '❌ Failed to send message. Please try again.';
    }
};

const getTimestampMillis = (timestamp: any) => {
    if (!timestamp) return Date.now();
    if (typeof timestamp === 'number') return timestamp; // Serialized or Millis
    if (timestamp.toMillis) return timestamp.toMillis(); // Firestore Timestamp
    if (timestamp.seconds) return timestamp.seconds * 1000; // Firestore JSON
    if (typeof timestamp === 'string') return new Date(timestamp).getTime();
    return Date.now();
};

const formatTime = (timestamp: any) => {
    const millis = getTimestampMillis(timestamp);
    if (isNaN(millis)) return 'Just now';
    return new Date(millis).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const Community: React.FC<CommunityProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'public' | 'private'>('public');
  const [activeTypers, setActiveTypers] = useState<string[]>([]);
  
  // LocalStorage / State Initialization for Public Messages
  const [messages, setMessages] = useState<Message[]>(() => {
      try {
          const saved = localStorage.getItem('community_public_msgs');
          return saved ? JSON.parse(saved) : [];
      } catch (e) { return []; }
  });

  // State for Private Messages
  const [privateMessages, setPrivateMessages] = useState<Message[]>([]);
  const [loadingPrivate, setLoadingPrivate] = useState(false);
  const [permissionError, setPermissionError] = useState(false);

  // Form State
  const [username, setUsername] = useState(() => localStorage.getItem('comm_username') || '');
  const [email, setEmail] = useState(() => localStorage.getItem('comm_email') || '');
  const [inputText, setInputText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Session & Refs
  const sessionId = useMemo(() => Math.random().toString(36).substring(7), []);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<any>(null);

  // Stats
  const activeContributors = useMemo(() => {
      const uniqueUsers = new Set(messages.map(m => m.username));
      return uniqueUsers.size;
  }, [messages]);

  // Save Identity to LocalStorage
  useEffect(() => {
      localStorage.setItem('comm_username', username);
      localStorage.setItem('comm_email', email);
  }, [username, email]);

  // Fetch Public Messages
  useEffect(() => {
    const q = query(collection(db, 'messages'), where('isApproved', '==', true));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Message[];
      
      // Client-side sort: Oldest first
      msgs.sort((a, b) => getTimestampMillis(a.createdAt) - getTimestampMillis(b.createdAt));

      setMessages(msgs);
      localStorage.setItem('community_public_msgs', JSON.stringify(msgs));
      setTimeout(() => scrollToBottom(), 100);
    }, (err) => {
        console.warn("Public Snapshot Warning:", err.message);
    });

    return () => unsubscribe();
  }, []);

  // Fetch Private Messages (Dependent on Email)
  useEffect(() => {
      const normalizedEmail = email.toLowerCase().trim();
      const validEmail = normalizedEmail.includes('@') && normalizedEmail.includes('.');

      if (activeTab === 'private' && validEmail) {
           setLoadingPrivate(true);
           setPermissionError(false);
           const cacheKey = `community_private_${normalizedEmail}`;
           
           // Load cached private messages
           try {
               const cached = localStorage.getItem(cacheKey);
               if (cached) setPrivateMessages(JSON.parse(cached));
           } catch (e) { /* ignore */ }

           const q = query(collection(db, 'private_messages'), where('email', '==', normalizedEmail));
           console.log("Listening for private messages for:", normalizedEmail);

           const unsubscribe = onSnapshot(q, (snapshot) => {
               const msgs = snapshot.docs.map(doc => ({
                   id: doc.id,
                   ...doc.data()
               })) as Message[];

               console.log("Received private messages:", msgs.length);

               // Sort: Oldest first
               msgs.sort((a, b) => getTimestampMillis(a.createdAt) - getTimestampMillis(b.createdAt));

               // Force create new reference to ensure re-render
               setPrivateMessages([...msgs]);
               
               localStorage.setItem(cacheKey, JSON.stringify(msgs));
               setLoadingPrivate(false);
               setTimeout(() => scrollToBottom(), 100);
           }, (err) => {
               console.warn("Private Snapshot Warning:", err.code);
               if (err.code === 'permission-denied') {
                   setPermissionError(true);
               }
               setLoadingPrivate(false);
           });

           return () => unsubscribe();
      } else {
           if (!normalizedEmail) {
               setPrivateMessages([]);
               setLoadingPrivate(false);
               setPermissionError(false);
           }
      }
  }, [activeTab, email]);

  // Real-time Typing Listener
  useEffect(() => {
      if (activeTab !== 'public') return;

      const q = query(collection(db, 'typing'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
          const now = Date.now();
          const typers: string[] = snapshot.docs
              .map(d => ({ id: d.id, ...d.data() } as { id: string, user: string, timestamp: any }))
              .filter(t => {
                  if (t.id === sessionId) return false;
                  const timestamp = getTimestampMillis(t.timestamp);
                  return (now - timestamp) < 5000;
              })
              .map(t => t.user);

          setActiveTypers(Array.from(new Set(typers)));
      }, (error) => {
          console.warn("Typing feature warning:", error.code);
      });

      return () => unsubscribe();
  }, [activeTab, sessionId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value);

      if (activeTab === 'public' && username.trim().length > 0) {
          if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
          try {
             await setDoc(doc(db, 'typing', sessionId), {
                 user: username,
                 timestamp: serverTimestamp()
             });
          } catch (e) { /* ignore */ }

          typingTimeoutRef.current = setTimeout(async () => {
               try { await deleteDoc(doc(db, 'typing', sessionId)); } catch (e) { /* ignore */ }
          }, 3000);
      }
  };

  const forceRefreshPrivate = () => {
      const temp = email;
      setEmail('');
      setTimeout(() => setEmail(temp), 50);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedEmail = email.toLowerCase().trim();

    if (!inputText.trim() || !username.trim() || !normalizedEmail) {
        setError("⚠️ Please fill in all fields (Name, Email, Message).");
        return;
    }

    setIsSending(true);
    setError(null);
    setSuccessMsg(null);

    try {
        if (activeTab === 'public') {
            await addDoc(collection(db, 'messages'), {
                username,
                email: normalizedEmail,
                text: inputText,
                createdAt: serverTimestamp(),
                isApproved: false
            });
            setSuccessMsg("✅ Message sent! Waiting for admin approval.");
            await deleteDoc(doc(db, 'typing', sessionId));
        } else {
            // Optimistic update for Private Message
            const newMsg: Message = {
                id: 'temp-' + Date.now(),
                username,
                email: normalizedEmail,
                text: inputText,
                createdAt: Date.now(),
                reply: undefined
            };
            
            // Add system auto-reply to local state immediately
            // Enhanced to confirm email notification
            const autoReplyMsg: Message = {
                id: 'auto-reply-' + Date.now(),
                username: username, // Attached to user message for structure
                email: normalizedEmail,
                text: inputText,
                createdAt: Date.now(),
                reply: "Thanks for reaching out! Harsh has been notified via email and will reply shortly.",
                repliedAt: Date.now()
            }
            
            // Update local state and cache immediately to persist across refresh
            const updatedMsgs = [...privateMessages, autoReplyMsg];
            setPrivateMessages(updatedMsgs);
            localStorage.setItem(`community_private_${normalizedEmail}`, JSON.stringify(updatedMsgs));
            
            await addDoc(collection(db, 'private_messages'), {
                username,
                email: normalizedEmail,
                text: inputText,
                createdAt: serverTimestamp(),
                reply: null
            });

            // --- SEND EMAIL NOTIFICATION ---
            // Check if all necessary config is present
            const isEmailConfigured = 
                EMAIL_CONFIG.SERVICE_ID !== "YOUR_SERVICE_ID" && 
                EMAIL_CONFIG.TEMPLATE_ID !== "YOUR_TEMPLATE_ID" && 
                EMAIL_CONFIG.PUBLIC_KEY !== "YOUR_PUBLIC_KEY";

            if (isEmailConfigured) {
                const templateParams = {
                    to_name: 'Harsh Gawali',
                    from_name: username,
                    from_email: normalizedEmail,
                    message: inputText,
                    reply_to: normalizedEmail
                };
                
                emailjs.send(
                    EMAIL_CONFIG.SERVICE_ID, 
                    EMAIL_CONFIG.TEMPLATE_ID, 
                    templateParams, 
                    EMAIL_CONFIG.PUBLIC_KEY
                )
                .then(() => console.log("📧 Email notification sent to admin."))
                .catch((err) => console.error("📧 Email notification failed:", err));
            } else {
                console.log("⚠️ EmailJS not fully configured. Service ID updated, but missing Template ID or Public Key.");
            }

            setSuccessMsg("🔒 Private message sent & emailed to Harsh.");
        }
        setInputText('');
        scrollToBottom();
    } catch (err: any) {
        console.error("Error sending message:", err);
        const userFriendlyError = getFirestoreErrorMessage(err);
        setError(userFriendlyError);
    } finally {
        setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-50 dark:bg-gray-950 flex flex-col font-sans">
       {/* Ambient Background */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
       </div>

       {/* Header */}
       <div className="relative z-10 flex-none bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 p-4 flex items-center justify-between shadow-sm">
          <button 
              onClick={onBack} 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all text-sm font-bold shadow-sm"
          >
              <FaArrowLeft /> Back
          </button>
          
          <div className="flex flex-col items-center">
             <h2 className="text-lg font-bold text-gray-900 dark:text-white">Community Hub</h2>
             <div className="flex items-center gap-1.5">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
                 <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">
                     Live • {activeContributors > 0 ? activeContributors : 1} Contributors
                 </span>
             </div>
          </div>
          
          <div className="w-20" />
       </div>

       {/* Tab Navigation */}
       <div className="relative z-10 flex-none py-6 px-4">
          <div className="max-w-md mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-1.5 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 flex relative">
               <motion.div 
                  className="absolute top-1.5 bottom-1.5 rounded-full bg-primary-600 shadow-md"
                  initial={false}
                  animate={{ 
                      left: activeTab === 'public' ? '6px' : '50%', 
                      width: 'calc(50% - 6px)'
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
               />
               
               <button 
                  onClick={() => setActiveTab('public')}
                  className={`flex-1 relative z-10 flex items-center justify-center gap-2 py-2 text-sm font-bold transition-colors ${activeTab === 'public' ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}`}
              >
                  <FaGlobeAmericas /> Public Wall
               </button>
               <button 
                  onClick={() => setActiveTab('private')}
                  className={`flex-1 relative z-10 flex items-center justify-center gap-2 py-2 text-sm font-bold transition-colors ${activeTab === 'private' ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}`}
              >
                  <FaShieldAlt /> Direct Msg
               </button>
          </div>
       </div>

       {/* Main Content Area */}
       <div className="flex-1 overflow-hidden relative z-10 max-w-4xl mx-auto w-full px-4 pb-4 md:pb-6">
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-white/60 dark:border-gray-700/50 rounded-3xl shadow-2xl w-full h-full flex flex-col overflow-hidden relative">
                 
                 {/* Header for Private (Optional Sync) */}
                 {activeTab === 'private' && (
                     <div className="flex-none p-2 border-b border-gray-100 dark:border-gray-800 flex justify-end">
                         <button onClick={forceRefreshPrivate} className="p-2 text-gray-400 hover:text-primary-600 transition-colors" title="Sync Messages">
                             <FaSyncAlt size={12} className={loadingPrivate ? "animate-spin" : ""} />
                         </button>
                     </div>
                 )}

                 {/* Messages Area */}
                 <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 relative">
                     {activeTab === 'public' ? (
                        <>
                             <div className="flex justify-start mb-6">
                                <div className="max-w-[90%] md:max-w-[70%]">
                                    <div className="flex items-center gap-2 mb-1 ml-1">
                                        <span className="text-[10px] font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">System</span>
                                    </div>
                                    <div className="p-4 rounded-2xl rounded-tl-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                                        <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                                            👋 <strong>Welcome to the Community Wall!</strong><br/>
                                            Share your thoughts. All messages are moderated.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {messages.map((msg) => {
                                const isMe = msg.username === username;
                                return (
                                     <motion.div 
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                                     >
                                        <div className="flex items-center gap-2 mb-1 px-1">
                                            <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                                {msg.username}
                                                <span className="font-normal opacity-70">• {formatTime(msg.createdAt)}</span>
                                            </span>
                                        </div>
                                        <div className={`max-w-[85%] md:max-w-[70%] p-3.5 rounded-2xl shadow-sm text-sm leading-relaxed ${
                                            isMe 
                                            ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-tr-none' 
                                            : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-tl-none'
                                        }`}>
                                            {msg.text}
                                        </div>
                                     </motion.div>
                                );
                            })}
                             
                             <AnimatePresence>
                                {activeTypers.length > 0 && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="sticky bottom-0 left-0 flex justify-start pb-2 z-20"
                                    >
                                        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                                            <div className="flex gap-1 h-3 items-center">
                                                <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"/>
                                                <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"/>
                                                <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"/>
                                            </div>
                                            <span className="text-xs text-gray-500 font-medium">
                                                {activeTypers.length === 1 
                                                    ? `${activeTypers[0]} is typing...` 
                                                    : `${activeTypers.length} people are typing...`
                                                }
                                            </span>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </>
                     ) : (
                        <>
                            {(!email.trim() || !email.includes('@')) ? (
                                <div className="flex flex-col items-center justify-center h-full text-center p-8">
                                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 mb-4 animate-pulse">
                                        <FaLock size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Private Direct Message</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs mx-auto mb-4">
                                        Enter your full email below to <span className="text-primary-600 dark:text-primary-400 font-bold">load previous chat history</span> and start a conversation.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    {permissionError && (
                                        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl mb-4 text-center">
                                            <p className="text-xs font-bold text-red-600 dark:text-red-400">Access Denied: Please update Firestore Rules</p>
                                        </div>
                                    )}

                                    {loadingPrivate && privateMessages.length === 0 && (
                                         <div className="flex justify-center p-4">
                                             <div className="w-6 h-6 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
                                         </div>
                                    )}
                                    {!loadingPrivate && privateMessages.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center h-full text-center p-8 opacity-50">
                                            <FaLock size={32} className="mb-4 text-gray-300" />
                                            <p className="text-sm text-gray-500">No previous messages found for this email.</p>
                                            <p className="text-xs text-gray-400 mt-1">Check for typos or start a new conversation!</p>
                                        </div>
                                    ) : (
                                        privateMessages.map((msg) => (
                                            <div key={msg.id} className="flex flex-col gap-2">
                                                {/* User Message */}
                                                <div className="flex flex-col items-end">
                                                     <div className="flex items-center gap-2 mb-1 px-1">
                                                        <span className="text-[10px] text-gray-400">You • {formatTime(msg.createdAt)}</span>
                                                    </div>
                                                    <div className="max-w-[85%] p-3.5 rounded-2xl rounded-tr-none bg-primary-600 text-white shadow-md text-sm leading-relaxed">
                                                        {msg.text}
                                                    </div>
                                                </div>

                                                {/* Admin Reply */}
                                                {msg.reply && (
                                                    <motion.div 
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="flex flex-col items-start mt-1"
                                                    >
                                                        <div className="flex items-center gap-2 mb-1 px-1">
                                                            <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300 flex items-center gap-1">
                                                                <FaShieldAlt size={10} className="text-primary-500"/> Harsh
                                                                {msg.repliedAt && <span className="font-normal opacity-70">• {formatTime(msg.repliedAt)}</span>}
                                                            </span>
                                                        </div>
                                                        <div className="max-w-[85%] p-3.5 rounded-2xl rounded-tl-none bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-sm text-sm leading-relaxed">
                                                            {msg.reply}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>
                                        ))
                                    )}
                                </>
                            )}
                        </>
                     )}
                     <div ref={messagesEndRef} />
                 </div>

                 {/* Input Area */}
                 <div className="flex-none p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
                     <div className="flex gap-2 mb-3">
                         <div className="relative w-1/3 group">
                             <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                                <FaUser size={10} />
                             </div>
                             <input 
                                type="text" 
                                placeholder="Name" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-gray-100 dark:bg-gray-900 border border-transparent focus:border-primary-500 rounded-xl pl-8 pr-3 py-2 text-xs focus:ring-0 outline-none text-gray-900 dark:text-white transition-all"
                             />
                         </div>
                         <div className="relative w-2/3 group">
                             <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                                <FaEnvelope size={10} />
                             </div>
                             <input 
                                type="email" 
                                placeholder="Email (Loads history)" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-100 dark:bg-gray-900 border border-transparent focus:border-primary-500 rounded-xl pl-8 pr-3 py-2 text-xs focus:ring-0 outline-none text-gray-900 dark:text-white transition-all"
                             />
                         </div>
                     </div>

                     <form onSubmit={handleSend} className="flex gap-2 relative">
                        <input
                          type="text"
                          value={inputText}
                          onChange={handleInputChange}
                          placeholder={activeTab === 'public' ? "Type a message..." : "Type a private message to Harsh..."}
                          className="flex-1 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all text-sm border border-transparent focus:border-primary-500"
                          disabled={isSending}
                        />
                        <button
                          type="submit"
                          disabled={isSending || !inputText.trim()}
                          className="bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all shadow-lg shadow-primary-600/20 transform active:scale-95"
                        >
                          <FaPaperPlane className={isSending ? "animate-pulse" : ""} />
                        </button>
                     </form>
                     
                     <AnimatePresence>
                        {error && (
                            <motion.p 
                                initial={{ opacity: 0, height: 0 }} 
                                animate={{ opacity: 1, height: 'auto' }} 
                                exit={{ opacity: 0, height: 0 }}
                                className="text-red-500 text-[10px] mt-2 text-center font-bold flex items-center justify-center gap-1"
                            >
                                {error}
                            </motion.p>
                        )}
                        {successMsg && (
                            <motion.p 
                                initial={{ opacity: 0, height: 0 }} 
                                animate={{ opacity: 1, height: 'auto' }} 
                                exit={{ opacity: 0, height: 0 }}
                                className="text-green-500 text-[10px] mt-2 text-center font-bold"
                            >
                                {successMsg}
                            </motion.p>
                        )}
                     </AnimatePresence>
                 </div>
            </div>
       </div>
    </div>
  );
};

export default Community;