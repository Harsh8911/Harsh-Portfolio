import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaLock } from 'react-icons/fa';

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
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12 relative overflow-hidden font-sans transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        {/* Brand & Slogan */}
        <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Harsh Gawali</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                Building Digital Experiences That Matter.
            </p>
        </div>
        
        {/* Social Links */}
        <div className="flex items-center gap-8 mb-10">
          <SocialLink icon={FaGithub} label="GitHub" href="https://github.com/Harsh8911" />
          <SocialLink icon={FaLinkedin} label="LinkedIn" href="https://www.linkedin.com/in/harsh-gawali-51572a294?" />
          <SocialLink icon={XIcon} label="X" href="https://x.com/Harsh_899" />
          <SocialLink icon={FaInstagram} label="Instagram" href="https://www.instagram.com/harsh_._gawali" />
          <SocialLink icon={FaEnvelope} label="Email" href="mailto:harshumeshgawali@gmail.com" />
        </div>

        {/* Bottom Bar: Copyright & Admin */}
        <div className="w-full pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col items-center gap-2 text-xs text-gray-400">
            <p>© {currentYear} Harsh Gawali. All rights reserved.</p>
            
            {onAdminClick && (
                <button 
                    onClick={onAdminClick} 
                    className="flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-500 transition-colors opacity-60 hover:opacity-100"
                >
                    <FaLock size={10} /> Admin
                </button>
            )}
        </div>
      </motion.div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ElementType;
  label: string;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon: Icon, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-125"
    aria-label={label}
  >
    <Icon size={24} />
  </a>
);

export default Footer;