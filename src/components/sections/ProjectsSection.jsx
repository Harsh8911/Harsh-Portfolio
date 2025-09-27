import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Github, Eye, Sparkles, Star, Code, Zap, Play, Pause } from 'lucide-react';

const ProjectsSection = () => {
  const [isGridView, setIsGridView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const projects = [
    {
      name: 'Heroic Vault',
      description: 'Heritage and Culture website showcasing Virtual Museum with immersive 3D experiences and interactive cultural artifacts.',
      image: '/images/H.png',
      demoUrl: 'https://heroic-vault.vercel.app/',
      sourceUrl: 'https://github.com/Harsh8911/heroic-vault',
      techStack: ['Virtual Reality', 'React', 'Three.js', 'WebGL'],
      gradient: 'from-blue-500 via-purple-500 to-indigo-600',
      category: 'VR Experience',
      featured: true
    },
    {
      name: 'Vitalian',
      description: 'Virtual Reality based Health Surgery and Body Information Website for medical education with detailed anatomical models.',
      image: '/images/vitalian.jpg',
      demoUrl: 'https://vitalian.vercel.app/',
      sourceUrl: 'https://github.com/Harsh8911/vitalian',
      techStack: ['Virtual Reality', 'HTML/CSS', 'Three.js'],
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      category: 'Medical VR',
      featured: false
    },
    {
      name: 'Stellar',
      description: 'Virtual Reality based constellations viewing and exploring website for astronomy enthusiasts with real-time star mapping.',
      image: '/images/Stellar-logo.png',
      demoUrl: 'https://stellar-eta-one.vercel.app/',
      sourceUrl: 'https://github.com/Harsh8911/stellar',
      techStack: ['Virtual Reality', 'HTML/CSS', 'JavaScript'],
      gradient: 'from-purple-500 via-pink-500 to-rose-600',
      category: 'Astronomy VR',
      featured: false
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isGridView && isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isGridView, isAutoPlay, projects.length]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-full p-2 lg:p-3">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-4 lg:mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-blue-500 dark:text-blue-400 animate-pulse" />
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white font-playfair">
                  Featured Projects
                </h1>
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {!isGridView && (
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 text-xs font-medium"
                >
                  {isAutoPlay ? <Pause size={14} /> : <Play size={14} />}
                  {isAutoPlay ? 'Pause' : 'Play'}
                </button>
              )}
              <button 
                onClick={() => setIsGridView(!isGridView)}
                className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg text-xs lg:text-sm font-medium"
              >
                <Eye size={16} />
                {isGridView ? 'Slider View' : 'Grid View'}
              </button>
            </div>
          </div>
          <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 max-w-2xl">
            Explore my latest projects featuring cutting-edge technologies and innovative solutions
          </p>
        </div>

        {isGridView ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="project-card group relative glass-3d rounded-xl overflow-hidden shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 card-3d particle-zone"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-xs font-bold shadow-lg animate-pulse">
                    <Star size={10} />
                    Featured
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 right-3 z-10 px-2 py-1 bg-black/20 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                  {project.category}
                </div>

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}></div>
                
                {/* Image Container */}
                <div className="relative h-40 lg:h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="project-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors transform hover:scale-110"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors transform hover:scale-110"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative p-3 lg:p-4">
                  <h3 className="font-bold text-base lg:text-lg mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-playfair">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 text-xs lg:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 px-2 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 hover:scale-105 text-xs font-medium shadow-lg"
                    >
                      <ExternalLink size={12} />
                      Demo
                    </a>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 px-2 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-xs font-medium"
                    >
                      <Github size={12} />
                      Code
                    </a>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 px-2 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 hover:scale-105 text-xs font-medium shadow-lg"
                    >
                      <ExternalLink size={12} />
                      Demo
                    </a>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 px-2 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-xs font-medium"
                    >
                      <Github size={12} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
            
            {/* View All Projects Card */}
            <div className="group bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <a href="https://github.com/Harsh8911" target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="h-full p-4 lg:p-6 text-white flex flex-col items-center justify-center text-center relative">
                  <div className="mb-3 p-3 bg-white/20 rounded-full group-hover:animate-bounce">
                    <ArrowRight size={24} />
                  </div>
                  <h3 className="text-base lg:text-lg font-bold mb-2 font-playfair">View All Projects</h3>
                  <p className="text-blue-100 text-xs lg:text-sm mb-3">Explore more on GitHub</p>
                  <div className="flex items-center gap-1 text-xs">
                    <Code size={14} />
                    <span>10+ Repositories</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ) : (
          <div className="relative max-w-5xl mx-auto">
            {/* Slider Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={project.name} className="w-full flex-shrink-0">
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-700/50 mx-1 lg:mx-2">
                      <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className="md:w-2/5 relative group">
                          {/* Featured Badge */}
                          {project.featured && (
                            <div className="absolute top-4 left-4 z-10 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-bold shadow-lg animate-pulse">
                              <Star size={12} />
                              Featured
                            </div>
                          )}
                          
                          <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}></div>
                            
                            {/* Animated overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="md:w-3/5 p-4 lg:p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 rounded-full font-medium">
                                {project.category}
                              </span>
                              <div className="flex items-center gap-1 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={14} fill="currentColor" />
                                ))}
                              </div>
                            </div>

                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white font-playfair mb-3">
                              {project.name}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                              {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.techStack.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 hover:scale-105 font-medium shadow-lg text-sm"
                            >
                              <ExternalLink size={16} />
                              Live Demo
                            </a>
                            <a
                              href={project.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 font-medium text-sm"
                            >
                              <Github size={16} />
                              Source Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-xl hover:bg-white dark:hover:bg-gray-700 z-10 text-gray-700 dark:text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-xl hover:bg-white dark:hover:bg-gray-700 z-10 text-gray-700 dark:text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? 'w-8 h-3 bg-blue-500 dark:bg-blue-400' 
                      : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-4 bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 ease-in-out"
                style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;