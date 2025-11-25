import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the layout change after scrolling down 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Slower, smoother spring physics for layout transitions
  const layoutTransition = {
    type: "spring" as const,
    stiffness: 50, // Reduced stiffness for slower movement
    damping: 20,   // Increased damping for less bounce
    mass: 1
  };

  // Variants for the typing animation
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1, // Slower typing for realism
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const textPart1 = "Hi, I'm ";
  const textPart2 = "Harsh Gawali";

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/20 dark:bg-primary-500/10 blur-[100px] rounded-full -z-10" />

      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...layoutTransition, duration: 0.8 }}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex w-full transition-all duration-500 ${
          isScrolled 
            ? 'flex-col items-center text-center gap-6 pt-20' 
            : 'flex-col items-center text-center md:flex-row md:justify-center md:gap-8 pt-0'
        }`}
      >
        {/* Image Section */}
        <motion.div
          layout
          transition={layoutTransition}
          className="relative z-10 shrink-0"
        >
          {/* Floating Animation Wrapper */}
          <motion.div
             animate={{ y: [-10, 10, -10] }}
             transition={{
               repeat: Infinity,
               duration: 6, // Slow float animation
               ease: "easeInOut"
             }}
          >
            <motion.div
              layout
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ ...layoutTransition, duration: 0.5 }}
              className={`rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl mx-auto ${
                 isScrolled 
                 ? 'w-24 h-24 md:w-32 md:h-32' 
                 : 'w-36 h-36 md:w-56 md:h-56'
              }`}
            >
              <img 
                src="./profile.png" 
                alt="Harsh Gawali" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          layout
          transition={layoutTransition}
          className={`flex flex-col z-10 items-center ${
            isScrolled 
              ? 'max-w-3xl' 
              : 'md:max-w-xl lg:max-w-2xl'
          }`}
        >
          <motion.div
            layout
            initial="hidden"
            animate="visible"
            variants={sentenceVariants}
            className="w-full"
          >
            {/* Typing Animation Heading in Cursive */}
            <motion.h2 
              layout 
              className="text-4xl md:text-6xl font-bold font-cursive mb-4 leading-tight flex flex-wrap justify-center"
            >
              {textPart1.split("").map((char, index) => (
                <motion.span
                  key={`t1-${index}`}
                  variants={letterVariants}
                  className="text-gray-900 dark:text-white"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              {textPart2.split("").map((char, index) => (
                <motion.span
                  key={`t2-${index}`}
                  variants={letterVariants}
                  className="text-primary-600 dark:text-primary-500"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-1 md:w-1.5 h-[0.8em] bg-primary-600 dark:bg-primary-500 ml-1 self-center"
              />
            </motion.h2>
            
            <motion.p 
              layout 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center"
            >
              Turning ideas into fast, user-friendly software
            </motion.p>
          </motion.div>

          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="/resume.pdf"
              className="px-6 py-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all shadow-sm hover:shadow-md whitespace-nowrap"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
            >
              See Projects
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;