import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaTools, FaLayerGroup } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: FaLaptopCode,
    description: "Building responsive, pixel-perfect user interfaces.",
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'HTML5', 'CSS3'],
    color: 'text-purple-600 dark:text-purple-400',
    gradient: 'from-purple-500/10 to-blue-500/10',
    border: 'hover:border-purple-500/50'
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    icon: FaServer,
    description: "Architecting robust server-side logic and data schemas.",
    skills: ['Node.js', 'Express.js', 'Firebase'],
    color: 'text-emerald-600 dark:text-emerald-400',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    border: 'hover:border-emerald-500/50'
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: FaCode,
    description: "Core languages for logic and algorithmic problem solving.",
    skills: ['JavaScript (ES6+)', 'Python', 'Java', 'C++', 'SQL'],
    color: 'text-blue-600 dark:text-blue-400',
    gradient: 'from-blue-500/10 to-indigo-500/10',
    border: 'hover:border-blue-500/50'
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: FaTools,
    description: "Essential tools for version control, design, and deployment.",
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'Figma', 'Vercel'],
    color: 'text-orange-600 dark:text-orange-400',
    gradient: 'from-orange-500/10 to-red-500/10',
    border: 'hover:border-orange-500/50'
  },
];

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" className="relative py-16 md:py-24">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-500/5 blur-[100px] -z-10 pointer-events-none" />

      <div className="mb-12 text-center max-w-2xl mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-4"
        >
            <FaLayerGroup className="text-primary-600 dark:text-primary-400 text-xs" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300">Expertise</span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Proficiency</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base leading-relaxed">
          A comprehensive overview of the technologies and tools I utilize to build scalable solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group relative p-6 md:p-8 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 ${category.border}`}
          >
            {/* Hover Gradient Background */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

            <div className="flex items-start justify-between mb-6">
                <div className="flex gap-4 items-center">
                    <div className={`w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform duration-300 ${category.color}`}>
                        <category.icon />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg md:text-xl">
                            {category.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 hidden sm:block">
                           {category.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, idx) => (
                    <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300 text-xs md:text-sm font-medium shadow-sm hover:border-primary-500/50 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default select-none"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;