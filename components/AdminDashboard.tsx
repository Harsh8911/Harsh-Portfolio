import React, { useState, useEffect } from 'react';
import { db, auth } from '../lib/firebase';
import { collection, query, where, onSnapshot, doc, updateDoc, deleteDoc, setDoc, getDocs, writeBatch } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCheck, FaTrash, FaBan, FaReply, FaSignOutAlt, FaShieldAlt, 
  FaClock, FaChevronRight, FaExclamationTriangle, FaSearch, FaUserSlash
} from 'react-icons/fa';

const AdminDashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
    // Initialize State with LocalStorage Caching for instant load
    const [pendingMsgs, setPendingMsgs] = useState<any[]>(() => {
        try {
            const saved = localStorage.getItem('admin_pending_msgs');
            return saved ? JSON.parse(saved) : [];
        } catch (e) { return []; }
    });
    const [privateMsgs, setPrivateMsgs] = useState<any[]>(() => {
        try {
            const saved = localStorage.getItem('admin_private_msgs');
            return saved ? JSON.parse(saved) : [];
        } catch (e) { return []; }
    });

    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [replyText, setReplyText] = useState('');
    const [tab, setTab] = useState<'pending' | 'private'>('pending');
    const [searchTerm, setSearchTerm] = useState('');
    const [permissionError, setPermissionError] = useState(false);

    // Drafts State
    const [drafts, setDrafts] = useState<{ [key: string]: string }>(() => {
        try {
            const saved = localStorage.getItem('adminReplyDrafts');
            return saved ? JSON.parse(saved) : {};
        } catch (e) { return {}; }
    });

    // Clear selection when switching tabs
    useEffect(() => {
        setSelectedId(null);
    }, [tab]);

    useEffect(() => {
        // Fetch Pending Public Messages
        const qPending = query(collection(db, 'messages'), where('isApproved', '==', false));
        const unsubPending = onSnapshot(qPending, snap => {
            const msgs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
            // Sort Descending (Newest first)
            msgs.sort((a: any, b: any) => {
                const tA = a.createdAt?.seconds || 0;
                const tB = b.createdAt?.seconds || 0;
                return tB - tA;
            });
            setPendingMsgs(msgs);
            localStorage.setItem('admin_pending_msgs', JSON.stringify(msgs));
            setPermissionError(false);
        }, (error) => {
            if (error.code === 'permission-denied') setPermissionError(true);
        });

        // Fetch Private Messages
        const qPrivate = query(collection(db, 'private_messages'));
        const unsubPrivate = onSnapshot(qPrivate, snap => {
             const msgs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
             // Sort Descending (Newest first)
             msgs.sort((a: any, b: any) => {
                const tA = a.createdAt?.seconds || 0;
                const tB = b.createdAt?.seconds || 0;
                return tB - tA;
            });
            setPrivateMsgs(msgs);
            localStorage.setItem('admin_private_msgs', JSON.stringify(msgs));
            setPermissionError(false);
        }, (error) => {
             if (error.code === 'permission-denied') setPermissionError(true);
        });

        return () => {
            unsubPending();
            unsubPrivate();
        };
    }, []);

    // Load draft when selecting a message
    useEffect(() => {
        if (selectedId && tab === 'private') {
            setReplyText(drafts[selectedId] || '');
        } else {
            setReplyText('');
        }
    }, [selectedId, tab, drafts]);

    // Save draft when typing
    const handleReplyChange = (text: string) => {
        setReplyText(text);
        if (selectedId) {
            const newDrafts = { ...drafts, [selectedId]: text };
            setDrafts(newDrafts);
            localStorage.setItem('adminReplyDrafts', JSON.stringify(newDrafts));
        }
    };

    const handleActionError = (error: any) => {
        console.error("Action Failed:", error);
        if (error.code === 'permission-denied') {
            alert("⚠️ Permission Denied. Check Firebase Security Rules or Anonymous Auth settings.");
        } else {
            alert("Action failed: " + error.message);
        }
    };

    const approveMessage = async (id: string) => {
        try {
            await updateDoc(doc(db, 'messages', id), { isApproved: true });
            if (selectedId === id) setSelectedId(null);
        } catch (e) { handleActionError(e); }
    };

    const deleteMessage = async (id: string, collectionName: string) => {
        if (!confirm("Delete this message?")) return;
        try {
            await deleteDoc(doc(db, collectionName, id));
            if (drafts[id]) {
                const newDrafts = { ...drafts };
                delete newDrafts[id];
                setDrafts(newDrafts);
                localStorage.setItem('adminReplyDrafts', JSON.stringify(newDrafts));
            }
            if (selectedId === id) setSelectedId(null);
        } catch (e) { handleActionError(e); }
    };

    const blockUser = async (email: string) => {
        if (!confirm(`Are you sure you want to block ${email}? They will not be able to send messages.`)) return;
        try {
            await setDoc(doc(db, 'blocked_users', email), {
                blockedAt: new Date(),
                reason: 'Admin Block'
            });
            alert(`User ${email} blocked successfully.`);
        } catch (e) { handleActionError(e); }
    };

    const deleteUserHistory = async (email: string) => {
        if (!confirm(`⚠️ Delete ALL messages (Public & Private) from ${email}?\n\nThis action cannot be undone.`)) return;
        
        try {
            const batch = writeBatch(db);
            
            // Delete from public messages
            const qPublic = query(collection(db, 'messages'), where('email', '==', email));
            const snapPublic = await getDocs(qPublic);
            snapPublic.forEach(doc => batch.delete(doc.ref));

            // Delete from private messages
            const qPrivate = query(collection(db, 'private_messages'), where('email', '==', email));
            const snapPrivate = await getDocs(qPrivate);
            snapPrivate.forEach(doc => batch.delete(doc.ref));

            await batch.commit();

            // Clear drafts associated with this user
            const newDrafts = { ...drafts };
            snapPrivate.forEach(doc => { delete newDrafts[doc.id] });
            setDrafts(newDrafts);
            localStorage.setItem('adminReplyDrafts', JSON.stringify(newDrafts));

            setSelectedId(null);
            alert(`All data for ${email} has been deleted.`);
        } catch (e) { handleActionError(e); }
    };

    const sendReply = async (id: string) => {
        if (!replyText.trim()) return;
        try {
            await updateDoc(doc(db, 'private_messages', id), {
                reply: replyText,
                repliedAt: new Date()
            });
            
            const newDrafts = { ...drafts };
            delete newDrafts[id];
            setDrafts(newDrafts);
            localStorage.setItem('adminReplyDrafts', JSON.stringify(newDrafts));
            
            setReplyText('');
        } catch (e) { handleActionError(e); }
    };

    const getFilteredMessages = () => {
        const list = tab === 'pending' ? pendingMsgs : privateMsgs;
        if (!searchTerm) return list;
        return list.filter(m => 
            m.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
            m.text.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const filteredList = getFilteredMessages();
    const activeMessage = filteredList.find(m => m.id === selectedId);

    if (permissionError) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4 font-sans">
                <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center border border-red-100 dark:border-red-900/30">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-500 mx-auto mb-4">
                        <FaExclamationTriangle size={32} />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Access Denied</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                        Anonymous Auth must be enabled in Firebase Console.
                    </p>
                    <button onClick={() => { auth.signOut(); onLogout(); }} className="w-full py-3 rounded-xl bg-gray-200 dark:bg-gray-700 font-bold">Back</button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans flex flex-col overflow-hidden relative transition-colors duration-300">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            {/* Header */}
            <header className="flex-none bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 p-4 flex justify-between items-center z-20 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                        <FaShieldAlt size={18} />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">Admin Console</h1>
                        <p className="text-[10px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Moderation Dashboard</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg border border-gray-200 dark:border-gray-700">
                        <button onClick={() => setTab('pending')} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${tab === 'pending' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500'}`}>
                            Pending ({pendingMsgs.length})
                        </button>
                        <button onClick={() => setTab('private')} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${tab === 'private' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500'}`}>
                            Direct Msgs ({privateMsgs.length})
                        </button>
                    </div>
                    <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-2 hidden md:block" />
                    <button onClick={() => { auth.signOut(); onLogout(); }} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 hover:bg-red-50 text-gray-700 dark:text-gray-200 hover:text-red-600 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold transition-all">
                        <FaSignOutAlt /> <span className="hidden sm:inline">Logout</span>
                    </button>
                </div>
            </header>

            {/* Split View Content */}
            <main className="flex-1 flex overflow-hidden relative z-10 max-w-7xl mx-auto w-full md:p-6 gap-6">
                
                {/* Left: Message List */}
                <div className={`flex flex-col w-full md:w-1/3 lg:w-1/4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/60 dark:border-gray-700/50 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${selectedId ? 'hidden md:flex' : 'flex'}`}>
                    {/* List Header & Search */}
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700 space-y-3">
                         <div className="md:hidden flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg w-full">
                            <button onClick={() => setTab('pending')} className={`flex-1 py-1.5 rounded-md text-xs font-bold ${tab === 'pending' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-500'}`}>Pending ({pendingMsgs.length})</button>
                            <button onClick={() => setTab('private')} className={`flex-1 py-1.5 rounded-md text-xs font-bold ${tab === 'private' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-500'}`}>DMs ({privateMsgs.length})</button>
                        </div>
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                            <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-lg pl-8 pr-3 py-2 text-xs focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white" />
                        </div>
                    </div>

                    {/* Scrollable Items */}
                    <div className="flex-1 overflow-y-auto p-2 space-y-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                        {filteredList.length === 0 ? (
                            <div className="text-center py-10 text-gray-400 text-xs">No messages found.</div>
                        ) : (
                            filteredList.map(msg => (
                                <motion.div
                                    key={msg.id}
                                    layoutId={`card-${msg.id}`}
                                    onClick={() => setSelectedId(msg.id)}
                                    className={`p-3 rounded-xl cursor-pointer border transition-all ${selectedId === msg.id ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-700/50 shadow-sm' : 'bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-gray-800/50'}`}
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className={`text-sm font-bold truncate ${selectedId === msg.id ? 'text-primary-700 dark:text-primary-300' : 'text-gray-900 dark:text-white'}`}>{msg.username}</h4>
                                        <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">
                                            {msg.createdAt?.seconds ? new Date(msg.createdAt.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{msg.text}</p>
                                    {tab === 'private' && msg.reply && <div className="flex items-center gap-1 mt-1 text-[10px] text-green-600 font-medium"><FaReply size={8} /> Replied</div>}
                                    {tab === 'private' && !msg.reply && drafts[msg.id] && <div className="flex items-center gap-1 mt-1 text-[10px] text-orange-500 font-medium italic">Draft saved</div>}
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>

                {/* Right: Detail Panel */}
                <div className={`flex-1 flex flex-col bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/60 dark:border-gray-700/50 rounded-2xl shadow-xl overflow-hidden relative ${!selectedId ? 'hidden md:flex' : 'flex'}`}>
                    <AnimatePresence mode="wait">
                        {activeMessage ? (
                            <motion.div 
                                key={activeMessage.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col h-full"
                            >
                                {/* Header */}
                                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-white/50 dark:bg-gray-800/50">
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => setSelectedId(null)} className="md:hidden text-gray-500"><FaChevronRight className="rotate-180" /></button>
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 font-bold text-lg">
                                            {activeMessage.username.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <h2 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                                {activeMessage.username}
                                                <span className="px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-[10px] font-normal text-gray-500 dark:text-gray-400">{activeMessage.email}</span>
                                            </h2>
                                            <p className="text-[10px] text-gray-500 flex items-center gap-1"><FaClock size={8} /> {activeMessage.createdAt?.seconds ? new Date(activeMessage.createdAt.seconds * 1000).toLocaleString() : ''}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => blockUser(activeMessage.email)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Block User"><FaBan size={14} /></button>
                                        <button onClick={() => deleteUserHistory(activeMessage.email)} className="p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors" title="Delete User History"><FaUserSlash size={14} /></button>
                                        <button onClick={() => deleteMessage(activeMessage.id, tab === 'pending' ? 'messages' : 'private_messages')} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Delete Message"><FaTrash size={14} /></button>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50 dark:bg-gray-900/30">
                                    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
                                        {/* User Bubble */}
                                        <div className="flex gap-3">
                                            <div className="flex-none pt-1">
                                                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs text-gray-600 font-bold">{activeMessage.username.charAt(0)}</div>
                                            </div>
                                            <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none border border-gray-200 dark:border-gray-700 shadow-sm text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                                                {activeMessage.text}
                                            </div>
                                        </div>

                                        {/* Admin Reply Bubble */}
                                        {tab === 'private' && activeMessage.reply && (
                                            <div className="flex gap-3 flex-row-reverse">
                                                <div className="flex-none pt-1">
                                                    <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-xs text-white font-bold">A</div>
                                                </div>
                                                <div className="bg-primary-600 text-white p-4 rounded-2xl rounded-tr-none shadow-md text-sm leading-relaxed">
                                                    {activeMessage.reply}
                                                    <div className="text-[10px] text-primary-200 mt-2 text-right opacity-80">Replied just now</div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Pending Actions */}
                                        {tab === 'pending' && (
                                            <div className="flex flex-col items-center justify-center py-8 gap-4 border-t border-gray-200 dark:border-gray-800 mt-4">
                                                <p className="text-sm text-gray-500 font-medium">Review this message</p>
                                                <div className="flex gap-4">
                                                    <button onClick={() => approveMessage(activeMessage.id)} className="flex items-center gap-2 px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold shadow-lg shadow-green-500/30 transition-transform hover:-translate-y-1"><FaCheck /> Approve</button>
                                                    <button onClick={() => deleteMessage(activeMessage.id, 'messages')} className="flex items-center gap-2 px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold shadow-lg shadow-red-500/30 transition-transform hover:-translate-y-1"><FaTrash /> Reject</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Reply Input */}
                                {tab === 'private' && !activeMessage.reply && (
                                    <div className="p-4 bg-white/80 dark:bg-gray-800/80 border-t border-gray-200 dark:border-gray-700 backdrop-blur-md">
                                        <div className="max-w-2xl mx-auto flex gap-2 relative">
                                            <input
                                                type="text"
                                                value={replyText}
                                                onChange={(e) => handleReplyChange(e.target.value)}
                                                placeholder="Type a reply..."
                                                className="flex-1 bg-gray-100 dark:bg-gray-900 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 dark:text-white outline-none"
                                                onKeyDown={(e) => { if (e.key === 'Enter') sendReply(activeMessage.id); }}
                                            />
                                            <button onClick={() => sendReply(activeMessage.id)} disabled={!replyText.trim()} className="bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white p-3 rounded-xl shadow-lg transition-transform active:scale-95">
                                                <FaReply />
                                            </button>
                                        </div>
                                        {drafts[activeMessage.id] && <div className="max-w-2xl mx-auto mt-1 px-1 text-[10px] text-orange-500 italic">Draft saved</div>}
                                    </div>
                                )}
                            </motion.div>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 opacity-60">
                                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-300 dark:text-gray-600 mb-4"><FaShieldAlt size={32} /></div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Select a message</h3>
                                <p className="text-sm text-gray-500">Choose a message from the list to review.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;