import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Heroic Vault',
    description: 'Heritage and Culture website showcasing Virtual Museum with immersive 3D experiences and interactive cultural artifacts.',
    tags: ['React', 'Three.js', 'WebGL', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1616499370260-485b3e5ed653?q=80&w=2070&auto=format&fit=crop', 
    githubUrl: 'https://github.com/Harsh8911/heroic-vault',
    liveUrl: 'https://github.com/Harsh8911/heroic-vault',
    featured: true,
  },
  {
    id: 2,
    title: 'Vitalian',
    description: 'Virtual Reality based Health Surgery and Body Information Website for medical education with detailed anatomical models.',
    tags: ['JavaScript', 'Three.js', 'HTML5', 'CSS3'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop', 
    githubUrl: 'https://github.com/Harsh8911/vitalian',
    liveUrl: 'https://github.com/Harsh8911/vitalian',
  },
  {
    id: 3,
    title: 'Stellar',
    description: 'Virtual Reality based constellations viewing and exploring website for astronomy enthusiasts with real-time star tracking.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'WebGL'],
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2042&auto=format&fit=crop', 
    githubUrl: 'https://github.com/Harsh8911/stellar',
    liveUrl: 'https://github.com/Harsh8911/stellar',
  },
];

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" className="relative">
      {/* Background Ambient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 dark:bg-primary-900/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">What I Built</h2>
          <p className="text-gray-600 dark:text-gray-400 text-base">Featured projects and experiments.</p>
        </div>
        <a 
          href="https://github.com/Harsh8911" 
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors shadow-lg hover:shadow-primary-600/30 text-sm"
        >
          <FaGithub /> View GitHub
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group flex flex-col bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/60 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full relative"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
               {/* Featured Badge */}
               {project.featured && (
                   <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-yellow-500/90 backdrop-blur-md text-gray-900 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg z-10 border border-white/20">
                       <FaStar size={8} />
                       Featured
                   </div>
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-5 flex flex-col flex-grow relative">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                {project.description}
              </p>
              
              <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary-100/80 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 border border-primary-200 dark:border-primary-700/50 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                      {project.liveUrl && (
                        <a 
                            href={project.liveUrl} 
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-all shadow-md hover:shadow-lg text-xs"
                        >
                            <FaExternalLinkAlt size={12} /> Demo
                        </a>
                      )}
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold transition-all text-xs backdrop-blur-sm"
                      >
                         <FaCode size={14} /> Code
                      </a>
                  </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 md:hidden text-center">
         <a 
          href="https://github.com/Harsh8911" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors shadow-lg text-sm"
        >
          <FaGithub /> View GitHub
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Projects;