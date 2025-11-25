import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaCode, FaLayerGroup, FaTools, FaUsers } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import { SkillCategory } from '../types';

const skillData: SkillCategory[] = [
  {
    title: 'Languages',
    icon: FaCode,
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    title: 'Full-stack',
    icon: FaLayerGroup,
    skills: ['React', 'Node.js', 'Express.js', 'TailwindCSS', 'HTML', 'CSS'],
  },
  {
    title: 'Tools',
    icon: FaTools,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'MySQL Workbench'],
  },
  {
    title: 'Soft Skills',
    icon: FaUsers,
    skills: ['Communication', 'Collaboration', 'Problem Solving', 'Teamwork', 'Agile Methodology'],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" className="relative overflow-visible">
       {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-900/10 blur-[100px] rounded-full -z-10" />

      <div className="mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">What I Have</h2>
        <p className="text-gray-600 dark:text-gray-400 text-base">The stack I use to build and create.</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skillData.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="group relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-white/60 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300"
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

            <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-100/50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                        <category.icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {category.title}
                    </h3>
                </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-500/30 dark:hover:border-primary-500/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;