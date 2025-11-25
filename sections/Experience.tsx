import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Software Development Engineer Intern',
    company: 'Central Railway, Mumbai',
    period: 'Dec 2024 — Feb 2025',
    description: 'Gained exposure to the Software Development Life Cycle (SDLC) and Agile methodologies while contributing to core development tasks and system optimizations.',
    type: 'work',
  },
  {
    id: 2,
    role: 'Industrial Training',
    company: 'School at Dhule District',
    period: 'Aug 2022 — Oct 2022',
    description: 'Designed and developed software to automate the creation and management of Leaving Certificates, streamlining administrative processes for the school.',
    type: 'work',
  },
];

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" className="relative z-10">
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Where I've Been</h2>
        <p className="text-gray-600 dark:text-gray-400 text-base">Professional roles and impactful milestones.</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 md:ml-6 space-y-10 py-2">
            {experiences.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 md:pl-10"
                >
                    {/* Timeline Dot */}
                    <span className="absolute -left-[9px] top-5 h-4 w-4 rounded-full bg-primary-600 dark:bg-primary-500 ring-4 ring-white dark:ring-gray-950" />
                    
                    {/* Content Card - Plain Solid Background */}
                    <div className="group relative p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                    {item.role}
                                </h3>
                                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium mt-1 text-sm">
                                    <FaBriefcase size={12} />
                                    <span>{item.company}</span>
                                </div>
                            </div>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px] font-bold uppercase tracking-wider border border-gray-200 dark:border-gray-700 whitespace-nowrap w-fit">
                                <FaCalendarAlt size={10} /> {item.period}
                            </span>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;