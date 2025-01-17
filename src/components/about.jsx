import React, { useState } from 'react';
import { Eye, EyeOff, Code, Palette, Zap } from 'lucide-react';
import profileImage from '../assets/harshgawali.jpeg';

const About = () => {
  const [showFull, setShowFull] = useState(true);

  const fullText = (
    <>
      <strong className="text-blue-600 dark:text-blue-400">Hello,<br></br>I'm Harsh Gawali</strong>
      , and I'm from Pimpalner, Dhule where I have completed{' '}
      <strong className="text-blue-600 dark:text-blue-400">my 10th Standard with 91.40% </strong>
        and further I have completed{' '}
      <strong className="text-blue-600 dark:text-blue-400">
        Diploma in Computer Engineering in first class Distinction
      </strong>
      , and now I am currently pursuing my Engineering from{' '}
      <strong className="text-blue-600 dark:text-blue-400">SPPU.</strong>
    </>
  );

  const condensedText = (
    <>
      <strong className="text-blue-600 dark:text-blue-400">Hello,<br></br> I'm Harsh Gawali</strong>
      <span className="line-through text-gray-400">
        , and I'm from Pimpalner, Dhule where I have completed{' '}
      </span>
      <strong className="text-blue-600 dark:text-blue-400">my 10th Standard with 91.40% </strong>
      <span className="line-through text-gray-400"> and further I have completed </span>
      <strong className="text-blue-600 dark:text-blue-400">
        Diploma in Computer Engineering in first class Distinction
      </strong>
      <span className="line-through text-gray-400">
        , and now I am currently pursuing my Engineering from{' '}
      </span>
      <strong className="text-blue-600 dark:text-blue-400">SPPU.</strong>
    </>
  );

  const features = [
    {
      icon: <Code className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      icon: <Palette className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
      title: 'Modern Design',
      description: 'Creating beautiful user interfaces',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
      title: 'Performance',
      description: 'Optimizing for the best user experience',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-lg shadow-lg p-8 sm:p-12 border border-gray-200 dark:border-gray-700">
          {/* About Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            <button
              onClick={() => setShowFull(!showFull)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-600 dark:text-gray-300"
            >
              {showFull ? <Eye size={28} /> : <EyeOff size={28} />}
            </button>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Image Section */}
            <div className="relative group w-full md:w-96 flex-shrink-0">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-96 rounded-lg shadow-lg object-cover transition-transform group-hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            </div>

            {/* Text and Features Section */}
            <div className="flex flex-col gap-6 w-full">
              {/* Text Content */}
              <div className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                {showFull ? fullText : condensedText}
              </div>

              {/* Features Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`${feature.bgColor} p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all flex items-center gap-4`}
                  >
                    <div className="rounded-lg p-2 inline-block">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;