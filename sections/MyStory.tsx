import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool, FaCalendarAlt, FaStar } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  institution: string;
  description: string;
  grade: string;
  icon: React.ElementType;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: 'Sep 2023 - Jul 2026',
    title: 'Bachelor of Engineering - Computer Engineering',
    institution: 'Sandip Institute of Engineering & Management, Nashik',
    description: 'Currently pursuing B.E. in Computer Engineering with focus on software development and emerging technologies.',
    grade: 'CGPA: 9.29',
    icon: FaUniversity,
  },
  {
    id: 2,
    year: 'Jan 2021 - Jul 2023',
    title: 'Diploma in Computer Engineering',
    institution: 'Shikshan Maharshi Dadasaheb Rawal Government Polytechnic, Dhule',
    description: 'Completed diploma with first class distinction, gaining strong foundation in programming and computer systems.',
    grade: 'Percentage: 83.94%',
    icon: FaSchool,
  },
  {
    id: 3,
    year: '2020',
    title: 'SSC (10th Standard)',
    institution: 'Kai. N.S.P Patil Vidhyalay Pimpalner Dhule',
    description: 'Completed secondary education with excellent academic performance and strong foundation in mathematics and science.',
    grade: 'Percentage: 91.40%',
    icon: FaGraduationCap,
  },
];

const MyStory: React.FC = () => {
  return (
    <SectionWrapper id="story" className="relative">
      {/* Ambient Background for Transparency Effect */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-200/30 dark:bg-primary-900/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">My Story</h2>
        <p className="text-gray-600 dark:text-gray-400 text-base">My educational journey and academic milestones.</p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Center Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 via-primary-300/50 to-transparent dark:from-primary-600/50 dark:via-gray-800/50" />
        
        {/* Left Line for Mobile */}
        <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 via-primary-300/50 to-transparent dark:from-primary-600/50 dark:via-gray-800/50" />

        <div className="space-y-10">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Center Icon */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-gray-950 border-4 border-primary-100 dark:border-primary-900 shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
                     <item.icon className="text-primary-600 dark:text-primary-400 text-base md:text-lg" />
                   </div>
                </div>

                {/* Card Content */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="group p-5 md:p-6 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/50 dark:border-gray-700/30 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col relative overflow-hidden text-left h-full"
                  >
                    {/* Card Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Date Badge */}
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-100/50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-[10px] font-semibold tracking-wide w-fit border border-primary-200/20 dark:border-primary-700/20">
                        <FaCalendarAlt size={10} />
                        {item.year}
                      </span>
                    </div>

                    {/* Title & Institution */}
                    <div className="mb-3">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                        {item.title}
                      </h3>
                      
                      {/* Transparent Card for Institution Name */}
                      <div className="inline-block px-3 py-1.5 rounded-lg bg-white/60 dark:bg-gray-800/40 border border-white/60 dark:border-gray-700/50 shadow-sm backdrop-blur-sm">
                        <h4 className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200">
                            {item.institution}
                        </h4>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-4 flex-grow">
                      {item.description}
                    </p>

                    {/* Footer / Grade */}
                    <div className="mt-auto pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
                        <span className="inline-flex items-center gap-1.5 text-gray-900 dark:text-white font-bold text-xs bg-white/50 dark:bg-gray-800/50 px-3 py-1.5 rounded-lg backdrop-blur-sm shadow-sm">
                            <FaStar className="text-yellow-500" size={12} />
                            {item.grade}
                        </span>
                    </div>
                  </motion.div>
                </div>

                {/* Empty Spacer for Desktop Alignment */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MyStory;