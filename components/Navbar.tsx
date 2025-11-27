import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { NavItem } from '../types';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Improved Spy scroll logic with offset
      const scrollPosition = window.scrollY + 200; // Offset to trigger earlier

      for (const item of navItems) {
        const section = document.getElementById(item.href.substring(1));
        if (section) {
            const offsetTop = section.offsetTop;
            const offsetHeight = section.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(item.href.substring(1));
            }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    // Normalize id (allow '#about' or 'about')
    const id = href.startsWith('#') ? href.substring(1) : href;
    // Close the mobile menu first so the overlay doesn't block scrolling
    setIsOpen(false);

    // Delay the scroll slightly to allow the overlay to disappear
    setTimeout(() => {
      const element = document.getElementById(id) || document.querySelector(href);
      if (element && element instanceof HTMLElement) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Brief focus to help observers/animations trigger
        try {
          const prevTab = element.getAttribute('tabindex');
          element.setAttribute('tabindex', '-1');
          setTimeout(() => {
            element.focus({ preventScroll: true });
            if (prevTab === null) element.removeAttribute('tabindex');
          }, 350);
        } catch (e) {
          // ignore
        }

        // Retry once after a short delay if the element still isn't in view
        setTimeout(() => {
          const rect = element.getBoundingClientRect();
          if (rect.top < 0 || rect.top > (window.innerHeight || document.documentElement.clientHeight)) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 500);
      }
    }, 120);
  };

  const showBackground = scrolled || isOpen;
  const brandName = "Harsh Gawali";

  return (
    <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
            showBackground 
            ? 'bg-white/70 dark:bg-gray-950/70 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-800/20 shadow-sm py-3' 
            : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center w-full">
          {/* Logo/Brand */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="text-2xl font-bold font-cursive text-primary-600 dark:text-primary-500 cursor-pointer tracking-tight flex truncate flex-shrink min-w-0"
            onClick={() => handleNavClick('#home')}
          >
            {brandName.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center gap-1 bg-white/50 dark:bg-gray-900/50 rounded-full px-2 py-1 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
            
          <div className="hidden lg:flex items-center space-x-3">
             <div className="flex gap-3 text-gray-500 dark:text-gray-400">
                <a href="https://github.com/Harsh8911" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="hover:text-primary-600 transition-colors"><FaGithub size={18} /></a>
                <a href="https://www.linkedin.com/in/harsh-gawali-51572a294?" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="hover:text-primary-600 transition-colors"><FaLinkedin size={18} /></a>
             </div>
             <div className="w-px h-5 bg-gray-300 dark:bg-gray-700 mx-2"></div>
              <button 
                onClick={toggleDarkMode}
                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-yellow-400"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
          </div>

          {/* Mobile Menu Button - Pushed right */}
          <div className="lg:hidden flex items-center gap-3 ml-auto flex-shrink-0 pl-2">
            <button 
              onClick={toggleDarkMode}
              className="p-1.5 text-gray-600 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
               {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors focus:outline-none"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/70 dark:bg-gray-950/70 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 overflow-hidden absolute w-full left-0 z-50"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex justify-center space-x-6 pt-6 mt-4 border-t border-gray-100 dark:border-gray-800">
                <a href="https://github.com/Harsh8911" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="text-gray-500 hover:text-primary-600 transition-colors"><FaGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/harsh-gawali-51572a294?" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="text-gray-500 hover:text-primary-600 transition-colors"><FaLinkedin size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;