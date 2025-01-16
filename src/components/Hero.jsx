import React from 'react';
import { Download, Linkedin, Github } from 'lucide-react';
import profileImage from '../assets/harshgawali.jpeg';

const Hero = () => {
  const socialLinks = [
    { 
      icon: <Linkedin size={24} />, 
      href: "https://www.linkedin.com/in/harsh-gawali-51572a294",
      label: "LinkedIn"
    },
    { 
      icon: <Github size={24} />, 
      href: "https://github.com/Harsh8911",
      label: "GitHub"
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      ),
      href: "https://leetcode.com/u/HarshGawali/",
      label: "LeetCode"
    }
  ];

  return (
    <section className="min-h-screen pt-20 flex flex-col items-center justify-center text-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-200">
      {/* Profile Image */}
      <div className="w-48 h-48 rounded-full border-4 border-blue-500 dark:border-blue-400 overflow-hidden mb-8 hover:border-blue-600 dark:hover:border-blue-300 transition-all duration-300">
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-2xl mb-2 text-blue-600 dark:text-blue-400">Hello I'm</h2>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
        Harsh Gawali,
      </h1>
      <p className="text-xl mb-6 text-blue-600 dark:text-blue-400 font-semibold">
        A Software Engineer
      </p>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">Converting conceptual ideas to Real Software...</p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-8">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <a 
        href="https://drive.google.com/file/d/1qd5i3VriDz3HyW8UpmGr6fKqAVD0PNTj/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex items-center gap-2 bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 text-white px-6 py-3 rounded transition-all transform hover:scale-105">
          <Download size={20} />
          Download Resume
        </button>
      </a>

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.1)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
};

export default Hero;