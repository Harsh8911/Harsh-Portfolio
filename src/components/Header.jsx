import React, { useState } from 'react';
import { Download, Menu, Facebook, Instagram, ExternalLink, Linkedin, Youtube } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const socialLinks = [
    { icon: <Facebook size={24} />, href: "https://www.facebook.com/harsh.gawali.104", name: "facebook" },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://x.com/Harsh_899",
      name: "x"
    },
    { icon: <Instagram size={24} />, href: "https://www.instagram.com/harsh_._gawali/", name: "instagram" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/harsh-gawali-51572a294", name: "linkedin" },
    { icon: <Youtube size={24} />, href: "https://www.youtube.com/@harshgawali", name: "youtube" },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      ),
      href: "https://leetcode.com/u/HarshGawali/",
      name: "leetcode"
    }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Left side - Social Icons */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <Menu size={24} />
            )}
          </button>

          {/* Center - Name */}
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 absolute left-1/2 -translate-x-1/2 hidden md:block hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-playfair">
            Harsh Gawali
          </h1>

          {/* Mobile name */}
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100 md:hidden font-playfair">
            Harsh Gawali
          </h1>

          {/* Right side - Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a>
            <a href="https://drive.google.com/file/d/1qd5i3VriDz3HyW8UpmGr6fKqAVD0PNTj/view" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all">
                <Download size={16} />
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900 transition-colors duration-200 border-b border-gray-200 dark:border-gray-800`}>
        <div className="px-4 py-4 space-y-3">
          {/* Social icons in mobile menu */}
          <div className="flex flex-wrap justify-center gap-6 py-3 border-b border-gray-200 dark:border-gray-800">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all p-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Navigation links in mobile menu */}
          <a href="#about" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#skills" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Skills</a>
          <a href="#contact" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a>
          <a href="https://drive.google.com/file/d/1qd5i3VriDz3HyW8UpmGr6fKqAVD0PNTj/view" target="_blank" rel="noopener noreferrer">
            <button className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all mt-2">
              <Download size={16} />
              Resume
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;