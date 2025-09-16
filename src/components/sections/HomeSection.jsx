import React from 'react';
import {
  Download,
  MapPin,
  Calendar,
  Briefcase,
  Code,
  Computer,
  Smile,
} from 'lucide-react';
import profileImage from '../../assets/harshgawali.jpg';

const HomeSection = () => {
  /*const stats = [
    { label: 'Projects Completed', value: '10+', icon: Briefcase },
    { label: 'Technologies', value: '5+', icon: Briefcase },
  ];*/

  return (
    <div className="min-h-screen flex items-center justify-center p-3">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
            <div className="space-y-2 lg:space-y-3">
              <div className="inline-flex items-center gap-2 px-2 py-1 lg:px-3 lg:py-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-xs font-medium animate-bounce">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                Available for work
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white font-playfair leading-tight">
                Hello, I'm <br></br>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                  Harsh Gawali
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 font-medium">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  Software Engineer
                </span>
              </p>

              <p className="text-xs sm:text-sm lg:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Converting conceptual ideas to Real Software with modern
                technologies and innovative solutions.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-xs lg:text-sm justify-center lg:justify-start">
              <MapPin size={16} className="text-blue-500" />
              <span>Nashik, Maharashtra, India</span>
            </div>

           

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1ESTsu5P-r-5d4_6lF20C_6Z33QhzAuZ5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-xs lg:text-sm">
                  <Download size={16} className="group-hover:animate-bounce" />
                  Download Resume
                </button>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-75 blur-xl"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-pink-400 via-blue-500 to-purple-500 rounded-full animate-spin-reverse opacity-50 blur-lg"></div>

              {/* Profile image */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Harsh Gawali"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Floating elements with tech icons */}
              <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-8 h-8 lg:w-12 lg:h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce shadow-lg">
                <Code size={16} className="lg:w-6 lg:h-6" />
              </div>
              <div className="absolute -bottom-1 -left-1 lg:-bottom-2 lg:-left-2 w-7 h-7 lg:w-10 lg:h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse shadow-lg">
                <Computer size={14} className="lg:w-5 lg:h-5" />
              </div>
              <div className="absolute top-1/2 -left-3 lg:-left-4 w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold animate-ping shadow-lg">
                <Smile size={12} className="lg:w-4 lg:h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
