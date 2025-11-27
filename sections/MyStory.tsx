import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool, FaMapMarkerAlt, FaCode, FaLaptopCode } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  institution: string;
  description: string;
  grade: string;
  icon: React.ElementType;
  tags: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2023 - Present',
    title: 'Bachelor of Engineering',
    institution: 'Sandip Institute (SIEM), Nashik',
    description: 'Specializing in Computer Engineering. Leading technical teams and building scalable full-stack applications.',
    grade: 'CGPA: 9.29',
    icon: FaUniversity,
    tags: ['Computer Engg', 'Full Stack', 'Leadership']
  },
  {
    id: 2,
    year: '2021 - 2023',
    title: 'Diploma in Computer Engg.',
    institution: 'Govt. Polytechnic, Dhule',
    description: 'Built a strong foundation in systems programming, algorithms, and hardware architecture. Graduated with distinction.',
    grade: '83.94%',
    icon: FaLaptopCode,
    tags: ['Algorithms', 'Systems', 'Java']
  },
  {
    id: 3,
    year: '2020',
    title: 'Secondary School (SSC)',
    institution: 'K.N.S.P Patil Vidhyalay',
    description: 'Early academic excellence with a focus on Mathematics and Science, setting the stage for engineering.',
    grade: '91.40%',
    icon: FaSchool,
    tags: ['Mathematics', 'Science']
  },
];

const StatCard = ({ icon: Icon, label, value, delay }: { icon: any, label: string, value: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/40 backdrop-blur-md border border-gray-200 dark:border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
      <Icon size={24} />
    </div>
    <div>
      <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">{label}</p>
      <p className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{value}</p>
    </div>
  </motion.div>
);

const MyStory: React.FC = () => {
  return (
    <SectionWrapper id="about" className="relative overflow-visible">
      {/* Dynamic Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
         <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-[80px]" />
         <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-purple-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Header Section */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">About</h2>
        <p className="text-gray-600 dark:text-gray-400 text-base">My educational journey and professional background.</p>
      </div>

      {/* Futuristic Timeline */}
      <div className="relative max-w-5xl mx-auto px-2 md:px-4">
        {/* The Data Stream Line */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-purple-500 to-transparent opacity-30 rounded-full" />
        
        <div className="space-y-12 md:space-y-20">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* The Connector Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                   <motion.div 
                     whileHover={{ scale: 1.2, rotate: 180 }}
                     transition={{ duration: 0.5 }}
                     className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white dark:bg-gray-900 border-4 border-primary-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                   />
                </div>

                {/* The Date Label (Desktop) */}
                <div className={`hidden md:block w-1/2 text-center ${isEven ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                   <span className="font-mono text-primary-600 dark:text-primary-400 font-bold text-lg tracking-wider opacity-80">{item.year}</span>
                </div>

                {/* The Holographic Card */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)" }}
                    className="group relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 p-6 md:p-8 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                  >
                    {/* Glowing Corner Accent */}
                    <div className={`absolute top-0 w-24 h-24 bg-gradient-to-br from-primary-500/20 to-transparent blur-2xl -z-10 ${isEven ? 'left-0' : 'right-0'}`} />
                    
                    <div className="flex flex-col gap-4">
                        {/* Mobile Date Label */}
                        <div className="md:hidden flex items-center gap-2 mb-1">
                            <span className="px-2 py-1 rounded bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-mono font-bold">
                                {item.year}
                            </span>
                        </div>

                        {/* Header */}
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium text-sm md:text-base">
                                    <FaGraduationCap className="text-primary-500" />
                                    {item.institution}
                                </div>
                            </div>
                            <div className="hidden sm:flex w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 items-center justify-center text-gray-500 dark:text-gray-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                <item.icon size={18} />
                            </div>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 my-1" />

                        {/* Description */}
                        <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                            {item.description}
                        </p>

                        {/* Footer: Grade & Tags */}
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-bold border border-green-100 dark:border-green-800">
                                {item.grade}
                            </span>
                            {item.tags.map(tag => (
                                <span key={tag} className="text-xs font-mono text-gray-500 dark:text-gray-500">#{tag}</span>
                            ))}
                        </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* End of Line Indicator */}
        <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 bottom-0 w-3 h-3 bg-primary-500 rounded-full animate-ping" />
      </div>
    </SectionWrapper>
  );
};

export default MyStory;