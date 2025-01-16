import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Download } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/harsh-gawali-51572a294', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/Harsh_899', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/harsh_._gawali/', label: 'Instagram' },
    { icon: <Github size={20} />, href: 'https://github.com/Harsh8911', label: 'GitHub' },
    { 
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      ), 
      href: 'https://leetcode.com/u/HarshGawali/', 
      label: 'LeetCode'
    }
  ];

  return (
    <footer className="w-full bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-lg italic mb-8 text-gray-700 dark:text-gray-300">
            "The important thing is not to stop questioning."
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          {/* Download Button */}
          <a href="https://drive.google.com/file/d/1qd5i3VriDz3HyW8UpmGr6fKqAVD0PNTj/view" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 text-white px-6 py-2 rounded-md transition-colors duration-300 flex items-center gap-2 mx-auto mb-8">
              <Download size={18} />
              <span>Download Resume</span>
            </button>
          </a>
          
          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <span className="text-red-500">❤</span>
            <span>by Harsh Gawali |</span>
            <span>© 2025 All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;