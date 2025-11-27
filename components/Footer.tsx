import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaLock, FaCode, FaBolt } from 'react-icons/fa';

// Custom X (Twitter) Icon
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    height="1em" 
    width="1em"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface FooterProps {
  onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  const [time, setTime] = useState<string>("");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Client-side only time to prevent hydration mismatch
    const updateTime = () => {
        const now = new Date();
        setTime(now.toLocaleTimeString('en-US', { 
            hour12: false, 
            hour: "2-digit", 
            minute: "2-digit", 
            second: "2-digit" 
        }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: FaGithub, label: "GitHub", href: "https://github.com/Harsh8911", color: "hover:text-white hover:bg-black" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/harsh-gawali-51572a294?", color: "hover:text-white hover:bg-[#0077b5]" },
    { icon: XIcon, label: "X", href: "https://x.com/Harsh_899", color: "hover:text-white hover:bg-black" },
    { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/harsh_._gawali", color: "hover:text-white hover:bg-pink-600" },
    { icon: FaEnvelope, label: "Email", href: "mailto:harshumeshgawali@gmail.com", color: "hover:text-white hover:bg-green-600" },
  ];

  return (
    <footer className="relative bg-gray-50 dark:bg-black pt-20 pb-10 overflow-hidden border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        {/* Holographic Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        {/* Top Glowing Power Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
                
                {/* Sector 1: Identity & Status */}
                <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <h2 className="text-3xl font-bold font-cursive text-gray-900 dark:text-white mb-2 tracking-tight">Harsh Gawali</h2>
                        <div className="flex items-center gap-2 justify-center md:justify-start text-xs font-mono font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/50 px-3 py-1 rounded-full w-fit mx-auto md:mx-0 border border-gray-200 dark:border-gray-800">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span>SYSTEM ONLINE</span>
                        </div>
                    </motion.div>
                    <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                        Architecting immersive digital experiences with precision, passion, and futuristic elegance.
                    </p>
                </div>

                {/* Sector 2: Navigation Uplinks (Social Dock) */}
                <div className="md:col-span-4 flex flex-col items-center justify-center">
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-3 opacity-70">
                        <span className="w-6 h-px bg-gray-300 dark:bg-gray-700"></span>
                        Connect
                        <span className="w-6 h-px bg-gray-300 dark:bg-gray-700"></span>
                     </span>
                     
                     <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {socialLinks.map((link, idx) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-12 h-12 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 shadow-sm hover:shadow-lg transition-all duration-300 ${link.color} group relative overflow-hidden`}
                                aria-label={link.label}
                            >
                                <link.icon size={20} className="relative z-10 transition-transform duration-300" />
                                {/* Internal Glow */}
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.a>
                        ))}
                     </div>
                </div>

                {/* Sector 3: Telemetry Widget */}
                <div className="md:col-span-3 flex flex-col items-center md:items-end text-center md:text-right">
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="p-5 rounded-2xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-black/50 w-full max-w-[220px] relative overflow-hidden group"
                    >
                        {/* Scanline */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,0,0,0.02)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none" />
                        
                        <div className="flex justify-between items-center mb-2">
                             <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                                <FaBolt className="text-yellow-500" size={10} />
                                Local Time
                             </div>
                             <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                        </div>
                        
                        <div className="text-3xl font-mono font-bold text-gray-900 dark:text-white tracking-widest tabular-nums leading-none mb-3">
                            {time || "00:00:00"}
                        </div>
                        
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-2" />
                        
                        <div className="flex justify-between text-[10px] font-mono text-gray-500 dark:text-gray-400">
                             <span>Location</span>
                             <span className="font-bold text-primary-600 dark:text-primary-400">IN-MH</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer Bottom Strip */}
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-500 font-mono">
                <div className="flex items-center gap-2 hover:text-primary-500 transition-colors">
                    <FaCode size={12} /> 
                    <span>Engineered by Harsh Gawali</span>
                </div>
                
                <div className="flex items-center gap-6">
                    <span>© {currentYear} All Rights Reserved</span>
                    <button 
                        onClick={onAdminClick}
                        className="flex items-center gap-1.5 opacity-40 hover:opacity-100 hover:text-primary-500 transition-all duration-300"
                        aria-label="Admin Access"
                    >
                        <FaLock size={10} /> 
                        <span>v3.0.1</span>
                    </button>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;