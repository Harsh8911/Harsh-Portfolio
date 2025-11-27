import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaCalendarAlt, FaCheckCircle, FaChevronDown, FaCodeBranch, FaLaptopCode } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import { ExperienceItem } from '../types';

// Extended interface for local usage
interface ExtendedExperienceItem extends ExperienceItem {
    companyOverview: string;
    technologies: string[];
}

const experiences: ExtendedExperienceItem[] = [
  {
    id: 1,
    role: 'SDE Intern',
    company: 'Central Railway, Mumbai',
    period: 'Dec 2024 — Feb 2025',
    description: 'Contributed to core development tasks within the SDLC. Optimized legacy systems and implemented Agile methodologies for faster delivery cycles.',
    type: 'work',
    companyOverview: 'Central Railway is one of the 19 zones of Indian Railways, managing a vast rail network in Central India. It plays a critical role in passenger and freight logistics.',
    technologies: ['Java', 'Spring Boot', 'SQL', 'Agile Methodologies']
  },
  {
    id: 2,
    role: 'Industrial Trainee',
    company: 'School at Dhule District',
    period: 'Aug 2022 — Oct 2022',
    description: 'Engineered an automated certification generation system. Reduced administrative workload by 60% through digital transformation of Leaving Certificates.',
    type: 'work',
    companyOverview: 'A prominent regional educational institution focused on modernizing academic administration through digital solutions to improve efficiency.',
    technologies: ['Python', 'Automation', 'Data Processing', 'ReportLab']
  },
];

const ExperienceCard = ({ item, index }: { item: ExtendedExperienceItem; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-stretch md:items-center justify-between w-full mb-16 md:mb-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      
      {/* Desktop Connector Line (Horizontal) */}
      <div className={`hidden md:block absolute top-1/2 w-1/2 h-px bg-gradient-to-r from-primary-500/50 to-transparent ${isEven ? 'left-1/2' : 'right-1/2 transform rotate-180'}`} />
      
      {/* Center Node */}
      <div className="absolute left-0 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
         <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-4 h-4 md:w-6 md:h-6 bg-gray-900 dark:bg-white border-4 border-primary-500 rounded-full"
         />
      </div>

      {/* Spacer for Desktop Alignment */}
      <div className="hidden md:block w-1/2" />

      {/* The Holographic Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}
      >
        <div 
            className={`
                group relative overflow-hidden rounded-none border-l-4 border-gray-200 dark:border-gray-800 
                bg-white/40 dark:bg-gray-900/40 backdrop-blur-md 
                transition-all duration-300 hover:border-primary-500 
                ${isOpen ? 'border-primary-500 bg-white/60 dark:bg-gray-900/60' : ''}
            `}
        >
            {/* Tech Decoration: Top Right */}
            <div className="absolute top-0 right-0 p-2 opacity-20">
                <FaCodeBranch size={16} className="text-gray-500" />
            </div>

            <div className="p-5 md:p-6">
                {/* Status & Date Row */}
                <div className="flex items-center justify-between mb-4">
                     <div className="flex items-center gap-2 text-xs font-mono text-primary-600 dark:text-primary-400">
                        <FaCalendarAlt />
                        <span className="tracking-wider">{item.period}</span>
                     </div>
                     <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-bold uppercase tracking-widest rounded-sm border border-green-500/20">
                        <FaCheckCircle size={8} /> Completed
                     </div>
                </div>

                {/* Experience Name (Role) - Prominent */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1 tracking-tight leading-tight">
                    {item.role}
                </h3>

                {/* Company Name (Clickable) */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-4 group/company focus:outline-none"
                >
                    <FaBuilding />
                    <span className="border-b border-dashed border-gray-400 group-hover/company:border-primary-500">{item.company}</span>
                    <FaChevronDown className={`transform transition-transform duration-300 text-xs ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Expandable Company Details */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-2 pb-4 text-xs text-gray-700 dark:text-gray-300 italic border-t border-gray-200 dark:border-gray-800">
                                "{item.companyOverview}"
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Description */}
                <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed mb-6 font-light">
                    {item.description}
                </p>

                {/* Tech Stack - System Tags */}
                <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                        <span 
                            key={tech} 
                            className="px-2 py-1 text-[10px] font-mono text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-default"
                        >
                            [{tech}]
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <SectionWrapper id="experience" className="relative z-10 py-20 overflow-hidden">
      
      <div className="mb-20 text-center relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-4">
            <FaLaptopCode size={20} />
        </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tighter mb-4">
              Experience
        </h2>
        <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full" />
      </div>

      <div ref={containerRef} className="relative max-w-6xl mx-auto px-4">
         {/* The Main Conduit Line */}
         <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2">
             <motion.div 
                style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                className="w-full bg-gradient-to-b from-primary-500 via-purple-500 to-primary-500"
             />
         </div>

         <div className="flex flex-col relative z-10">
            {experiences.map((item, index) => (
                <ExperienceCard key={item.id} item={item} index={index} />
            ))}
         </div>

         {/* End Terminator */}
         <div className="relative flex justify-center md:justify-center justify-start pl-0 md:pl-0 mt-8">
            <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 -translate-x-[5px] md:translate-x-[-50%] w-2 h-2 bg-gray-300 dark:bg-gray-700 rounded-full" />
         </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;