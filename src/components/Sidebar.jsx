import React from 'react';
import {
  Home,
  User,
  Code,
  FolderOpen,
  Mail,
  Award,
  GraduationCap,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Users,
} from 'lucide-react';
import profileImage from '../assets/harshgawali.jpg';

const Sidebar = ({ activeSection, setActiveSection, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'achievements', label: 'Achievements', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={18} />,
      href: 'https://www.linkedin.com/in/harsh-gawali-51572a294',
      name: 'LinkedIn',
      color: 'hover:bg-blue-600 hover:text-white',
    },
    {
      icon: <Github size={18} />,
      href: 'https://github.com/Harsh8911',
      name: 'GitHub',
      color: 'hover:bg-gray-800 hover:text-white',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: 'https://x.com/Harsh_899',
      name: 'Twitter',
      color: 'hover:bg-black hover:text-white',
    },
    {
      icon: <Instagram size={18} />,
      href: 'https://www.instagram.com/harsh_._gawali/',
      name: 'Instagram',
      color:
        'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white',
    },
    {
      icon: <Youtube size={18} />,
      href: 'https://www.youtube.com/@harshgawali',
      name: 'YouTube',
      color: 'hover:bg-red-600 hover:text-white',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
      href: 'https://leetcode.com/u/HarshGawali/',
      name: 'LeetCode',
      color: 'hover:bg-orange-500 hover:text-white',
    },
  ];

  return (
    <>
      {/* Mobile Menu Button with Hamburger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-2 left-2 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all"
      >
        <div className="w-4 h-4 flex flex-col justify-center items-center">
          <span
            className={`bg-gray-600 dark:bg-gray-300 block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm ${
              isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`bg-gray-600 dark:bg-gray-300 block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm my-0.5 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`bg-gray-600 dark:bg-gray-300 block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm ${
              isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}
          ></span>
        </div>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:relative z-40 h-full w-52 lg:w-60 glass-3d border-r border-gray-200/50 dark:border-gray-700/50 
        transform transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        shadow-2xl lg:shadow-none
      `}
      >
        <div className="flex flex-col h-full p-3">
          {/* Profile Section - Horizontal Layout */}
          <div className="mb-4 pt-3 lg:pt-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-0.5 animate-pulse">
                  <img
                    src={profileImage}
                    alt="Harsh Gawali"
                    className="w-full h-full rounded-full object-cover border-2 border-white dark:border-gray-800"
                  />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-bounce"></div>
              </div>
              <div className="flex-1">
                <h2 className="text-sm lg:text-base font-bold text-gray-800 dark:text-white font-playfair">
                  Harsh Gawali
                </h2>
                <p className="text-xs lg:text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Software Engineer
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Menu - Increased Spacing */}
          <nav className="flex-1 space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-300 group text-sm
                    ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg transform scale-105'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-102'
                    }
                  `}
                >
                  <Icon
                    size={16}
                    className={`transition-all duration-300 ${
                      isActive ? 'animate-pulse' : 'group-hover:scale-110'
                    }`}
                  />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
              CONNECT
            </p>
            <div className="grid grid-cols-3 gap-1.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all duration-300 hover:scale-110 flex items-center justify-center ${social.color}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Status Indicator */}
          <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-green-700 dark:text-green-400">
                Available for opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;