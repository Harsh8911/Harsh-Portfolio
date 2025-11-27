import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLayerGroup, FaArrowRight } from 'react-icons/fa';
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
  {
    id: 4,
    title: 'Github',
    description: 'See more project repository on Github.',
    tags: [],
    imageUrl: 'https://github.com/Harsh8911.png',
    githubUrl: 'https://github.com/Harsh8911/',
    
  },
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const navRef = useRef<HTMLDivElement>(null);

  // Auto-scroll mobile nav when active project changes
  useEffect(() => {
    if (navRef.current && window.innerWidth < 1024) {
      const activeBtn = navRef.current.children[activeProject.id - 1] as HTMLElement;
      if (activeBtn) {
        navRef.current.scrollTo({
          left: activeBtn.offsetLeft - 20,
          behavior: 'smooth'
        });
      }
    }
  }, [activeProject]);

  return (
    <SectionWrapper id="projects" className="relative py-12 md:py-24">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/5 dark:bg-primary-500/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
           Exploring the intersection of design and technology through immersive web experiences.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-[600px] lg:h-[600px]">
        {/* Navigation Sidebar (Desktop) / Top Bar (Mobile) */}
        <div 
            ref={navRef}
            className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide px-1 snap-x z-20"
        >
          {projects.map((project, index) => {
            const isActive = activeProject.id === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`snap-start group flex-shrink-0 lg:flex-shrink-0 flex flex-col items-start p-4 rounded-2xl text-left transition-all duration-300 relative overflow-hidden border ${
                  isActive 
                    ? 'bg-white dark:bg-gray-800 shadow-xl border-primary-500/20 dark:border-primary-500/20 scale-[1.02] lg:translate-x-2' 
                    : 'bg-white/50 dark:bg-gray-900/50 border-transparent hover:bg-white dark:hover:bg-gray-800 opacity-70 hover:opacity-100 hover:border-gray-200 dark:hover:border-gray-700'
                } w-[240px] md:w-[280px] lg:w-full`}
              >
                {/* Active Indicator Line */}
                {isActive && (
                    <motion.div 
                        layoutId="activeLine"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-600" 
                    />
                )}

                <div className="flex items-center justify-between w-full mb-2">
                    <span className="text-[10px] font-mono font-bold text-gray-400">
                        0{index + 1} //
                    </span>
                    {project.featured && isActive && (
                        <span className="text-[9px] bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-1.5 py-0.5 rounded font-bold uppercase">
                            Featured
                        </span>
                    )}
                </div>
                
                <h3 className={`text-lg font-bold transition-colors ${isActive ? 'text-primary-600 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                    {project.title}
                </h3>
                
                <p className={`text-xs line-clamp-2 mt-1 ${isActive ? 'text-gray-600 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}`}>
                    {project.description}
                </p>
                
                {/* Mobile Active Dot */}
                {isActive && <div className="lg:hidden absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-primary-600 animate-pulse" />}
              </button>
            );
          })}
        </div>

        {/* Main Display Area */}
        <div className="w-full lg:w-2/3 flex-1 relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 ring-1 ring-white/10 group min-h-[450px]">
             <AnimatePresence mode="wait">
                <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img 
                        src={activeProject.imageUrl} 
                        alt={activeProject.title} 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Advanced Gradients for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-transparent to-transparent opacity-60" />
                    
                    {/* Scanline Effect */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                </motion.div>
             </AnimatePresence>

             {/* Content Overlay */}
             <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeProject.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        <div className="flex items-center gap-2 mb-3">
                             <div className="px-2 py-1 rounded-md bg-primary-600/20 border border-primary-500/30 text-primary-400 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                                 Project 0{activeProject.id}
                             </div>
                             {activeProject.featured && (
                                <div className="px-2 py-1 rounded-md bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                                    Featured
                                </div>
                             )}
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                            {activeProject.title}
                        </h3>
                        
                        <p className="text-gray-300 text-sm md:text-base max-w-xl leading-relaxed mb-6 line-clamp-3 md:line-clamp-none">
                            {activeProject.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {activeProject.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-200 text-xs font-medium backdrop-blur-md shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {activeProject.liveUrl && (
                                <a 
                                    href={activeProject.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm transition-all shadow-lg shadow-primary-600/30 flex items-center gap-2 group/btn active:scale-95"
                                >
                                    View Live <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            )}
                            <a 
                                href={activeProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold text-sm transition-all backdrop-blur-md flex items-center gap-2 active:scale-95"
                            >
                                <FaGithub size={18} /> Code
                            </a>
                        </div>
                    </motion.div>
                </AnimatePresence>
             </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;