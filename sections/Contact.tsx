import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaComments, 
  FaCopy, 
  FaCheck, 
  FaExternalLinkAlt, 
  FaMapMarkerAlt,
  FaGlobeAmericas
} from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';

interface ContactProps {
  onChatClick?: () => void;
}

const Contact: React.FC<ContactProps> = ({ onChatClick }) => {
  const [copied, setCopied] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactMethods = [
    {
      id: 'email',
      icon: FaEnvelope,
      label: 'Electronic Mail',
      value: 'harshumeshgawali@gmail.com',
      copyValue: 'harshumeshgawali@gmail.com',
      link: 'mailto:harshumeshgawali@gmail.com',
      techLabel: 'SMTP // SECURE',
      status: 'Ready',
      action: () => handleCopy('harshumeshgawali@gmail.com', 'email')
    },
    {
      id: 'phone',
      icon: FaPhoneAlt,
      label: 'Voice Channel',
      value: '+91 9503896398',
      copyValue: '+919503896398',
      link: 'tel:+919503896398',
      techLabel: 'VOIP // ENCRYPTED',
      status: 'Active',
      action: () => handleCopy('+919503896398', 'phone')
    }
  ];

  return (
    <SectionWrapper id="contact" className="relative py-20 overflow-hidden">
       {/* Background Ambience */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 dark:bg-primary-900/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

       {/* Header */}
       <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">in touch</span>
            </h2>
       </div>

       {/* The Holographic Terminal */}
       <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
         className="max-w-5xl mx-auto relative group"
       >
         {/* Decorative Border Gradient */}
         <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-40 transition duration-500 blur" />
         
         <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-700/50 overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[400px]">
            
            {/* Left Panel: Location Visualizer */}
            <div className="w-full md:w-2/5 bg-gray-50 dark:bg-gray-800/50 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700/50 p-8 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,0,0,0.05)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
                
                {/* Location Animation */}
                <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center mb-6">
                    <motion.div 
                        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 border border-dashed border-gray-300 dark:border-gray-600 rounded-full"
                    />
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-4 border border-dotted border-primary-500/30 rounded-full"
                    />
                    <div className="absolute inset-0 rounded-full bg-primary-500/5 blur-xl animate-pulse" />
                    
                    {/* Center Icon */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg border border-gray-100 dark:border-gray-700"
                    >
                         <FaMapMarkerAlt className="text-3xl md:text-4xl text-red-500" />
                    </motion.div>

                    {/* Orbiting Nodes */}
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-2 h-2 bg-primary-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                    </motion.div>
                </div>

                <div className="text-center relative z-10">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
                        Nashik, India
                    </h3>
                    <p className="text-xs font-mono text-gray-600 dark:text-gray-400 mt-2">
                        LAT: 19.9975° N <br/> LON: 73.7898° E
                    </p>
                </div>
            </div>

            {/* Right Panel: Contact Methods */}
            <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
                <div className="space-y-4">
                    {contactMethods.map((method) => (
                        <div key={method.id} className="group relative bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 overflow-hidden">
                             {/* Hover Glow */}
                             <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                             
                             {/* Icon Box */}
                             <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-sm ring-1 ring-gray-100 dark:ring-gray-700 group-hover:scale-110 transition-transform relative z-10">
                                <method.icon />
                             </div>

                             {/* Info */}
                             <div className="flex-1 min-w-0 relative z-10">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <span className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide">{method.label}</span>
                                    <span className="text-[9px] px-1.5 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded border border-green-500/20 font-mono">
                                        {method.status}
                                    </span>
                                </div>
                                <div className="font-mono text-xs md:text-sm text-gray-700 dark:text-gray-300 truncate">
                                    {method.value}
                                </div>
                             </div>

                             {/* Action Keys */}
                             <div className="flex items-center gap-2 w-full sm:w-auto relative z-10 mt-2 sm:mt-0">
                                <button 
                                    onClick={method.action}
                                    className="flex-1 sm:flex-none px-3 py-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600 transition-colors flex items-center justify-center gap-2 text-xs font-bold shadow-sm"
                                    title="Copy to Clipboard"
                                >
                                    {copied === method.id ? <FaCheck className="text-green-500" /> : <FaCopy />}
                                    <span className="sm:hidden">Copy</span>
                                </button>
                                <a 
                                    href={method.link}
                                    className="flex-1 sm:flex-none px-3 py-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600 transition-colors flex items-center justify-center gap-2 text-xs font-bold shadow-sm"
                                    title="Open App"
                                >
                                    <FaExternalLinkAlt />
                                    <span className="sm:hidden">Open</span>
                                </a>
                             </div>
                        </div>
                    ))}

                    {/* Community Key - Highlighted */}
                    <div className="relative mt-2">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onChatClick}
                            className="w-full relative overflow-hidden p-4 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 dark:from-primary-600 dark:to-primary-700 text-white flex items-center justify-between shadow-lg shadow-gray-900/20 dark:shadow-primary-600/20 group"
                        >
                            {/* Animated Background Mesh */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
                            
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
                                    <FaComments />
                                </div>
                                <div className="text-left">
                                    <div className="text-xs font-bold text-gray-300 dark:text-primary-100 uppercase tracking-widest mb-0.5">Global Frequency</div>
                                    <div className="text-sm md:text-base font-bold">Join Community Chat</div>
                                </div>
                            </div>

                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary-600 transition-all relative z-10">
                                <FaGlobeAmericas size={14} className={onChatClick ? "animate-spin-slow" : ""} />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>
         </div>
       </motion.div>
    </SectionWrapper>
  );
};

export default Contact;