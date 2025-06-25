import React, { useState } from 'react';
import { Eye, EyeOff, Code, Palette, Zap, GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import profileImage from '../../assets/harshgawali.jpg';

const AboutSection = () => {
  const [showFull, setShowFull] = useState(true);

  const fullText = (
    <>
      <strong className="text-blue-600 dark:text-blue-400">Hello, I'm Harsh Gawali</strong>
      , a passionate software engineer from Pimpalner, Dhule. I have completed{' '}
      <strong className="text-blue-600 dark:text-blue-400">my 10th Standard with 91.40%</strong>
      {' '}and further completed{' '}
      <strong className="text-blue-600 dark:text-blue-400">
        Diploma in Computer Engineering with first class Distinction (83.94%)
      </strong>
      . Currently, I am pursuing my Engineering from{' '}
      <strong className="text-blue-600 dark:text-blue-400">SPPU</strong> with a CGPA of 8.68.
      I am passionate about creating innovative solutions and converting conceptual ideas into real software applications.
    </>
  );

  const condensedText = (
    <>
      <strong className="text-blue-600 dark:text-blue-400">Hello, I'm Harsh Gawali</strong>
      <span className="line-through text-gray-400">
        , a passionate software engineer from Pimpalner, Dhule. I have completed{' '}
      </span>
      <strong className="text-blue-600 dark:text-blue-400">my 10th Standard with 91.40%</strong>
      <span className="line-through text-gray-400"> and further completed </span>
      <strong className="text-blue-600 dark:text-blue-400">
        Diploma in Computer Engineering with first class Distinction
      </strong>
      <span className="line-through text-gray-400">
        . Currently, I am pursuing my Engineering from{' '}
      </span>
      <strong className="text-blue-600 dark:text-blue-400">SPPU.</strong>
    </>
  );

  const education = [
    {
      degree: 'Bachelor of Engineering - Computer Engineering',
      institution: 'Sandip Institute of Engineering & Management, Nashik',
      duration: 'Sep 2023 - Jul 2026',
      grade: 'CGPA: 8.68',
      status: 'current',
      icon: <GraduationCap className="w-4 h-4" />,
      description: 'Currently pursuing B.E. in Computer Engineering with focus on software development and emerging technologies.'
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Shikshan Maharshi Dadasaheb Rawal Government Polytechnic, Dhule',
      duration: 'Jan 2021 - Jul 2023',
      grade: 'Percentage: 83.94%',
      status: 'completed',
      icon: <Award className="w-4 h-4" />,
      description: 'Completed diploma with first class distinction, gaining strong foundation in programming and computer systems.'
    },
    {
      degree: 'SSC (10th Standard)',
      institution: 'Kai. N.S.P Patil Vidhyalay Pimpalner Dhule',
      duration: '2020',
      grade: 'Percentage: 91.40%',
      status: 'completed',
      icon: <Award className="w-4 h-4" />,
      description: 'Completed secondary education with excellent academic performance and strong foundation in mathematics and science.'
    },
  ];

  return (
    <div className="min-h-full p-3 lg:p-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-5 lg:mb-7">
          <div className="flex items-center gap-2 mb-3">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white font-playfair">
              About Me
            </h1>
            <button
              onClick={() => setShowFull(!showFull)}
              className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-600 dark:text-gray-300 hover:scale-110"
            >
              {showFull ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
          <div className="w-14 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Left Column - Image and Text */}
          <div className="space-y-5 lg:space-y-6">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-full max-w-sm mx-auto h-56 sm:h-72 lg:h-80 rounded-2xl shadow-2xl object-cover transition-transform group-hover:scale-105 duration-500 border-4 border-white dark:border-gray-800"
              />
            </div>

            {/* About Text */}
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-3 lg:p-5 border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                {showFull ? fullText : condensedText}
              </div>
            </div>
          </div>

          {/* Right Column - Education Timeline */}
          <div className="space-y-5 lg:space-y-6">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white font-playfair">Education Timeline</h3>
            
            {/* Vertical Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="space-y-5 lg:space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-3 lg:p-5 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-102 ml-10"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -left-12 top-5 w-3 h-3 rounded-full border-3 ${
                      edu.status === 'current' 
                        ? 'bg-green-500 border-green-200 animate-pulse' 
                        : 'bg-blue-500 border-blue-200'
                    }`}></div>
                    
                    {/* Status indicator */}
                    {edu.status === 'current' && (
                      <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                        Current
                      </div>
                    )}
                    
                    <div className="flex items-start gap-2 lg:gap-3">
                      <div className={`p-1.5 lg:p-2 rounded-xl ${
                        edu.status === 'current' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      }`}>
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white mb-1 font-playfair">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1 text-xs lg:text-sm">
                          {edu.institution}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          {edu.description}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            {edu.duration}
                          </div>
                          <div className="font-semibold text-green-600 dark:text-green-400">
                            {edu.grade}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;