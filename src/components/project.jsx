import React, { useState } from 'react';
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Github } from 'lucide-react';

const Projects = () => {
  const [isGridView, setIsGridView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      name: 'Heroic Vault',
      description: 'It is Heritage and Culture website which showcase the Virtual Museum.',
      image: '/images/H.png',
      demoUrl: 'https://heroic-vault.vercel.app/',
      sourceUrl: 'https://github.com/Harsh8911/heroic-vault',
      techStack: ['Virtual Reality', 'React', 'Three.js', 'WebGL']
    },
    {
      name: 'Vitalian',
      description: 'Virtual Realty based Health Surgery and Body Information Website.',
      image: '/images/vitalian.jpg',
      demoUrl: 'https://vitalian.vercel.app/',
      sourceUrl: 'https://github.com/Harsh8911/vitalian',
      techStack: ['Virtual Reality', 'HTML/CSS', 'Three.js']
    },
    {
      name: 'Stellar',
      description: 'Virtual Reality based constellations viewing and exploring website.',
      image: '/images/Stellar-logo.png',
      demoUrl: 'https://stellar-eta-one.vercel.app/',
      sourceUrl: 'https://github.com/Harsh8911/stellar',
      techStack: ['Virtual Reality', 'HTML/CSS', 'JavaScript']
    }
  ];

  return (
    <section className="py-12 min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-[1271px] mx-auto px-4">
        {/* Title section */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
            <button 
              onClick={() => setIsGridView(!isGridView)}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              {isGridView ? 'Show Slider' : 'Show Grid'}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {isGridView ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
              >
                <div className="relative h-48 sm:h-36">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg text-center mb-3 text-gray-900 dark:text-white">{project.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 mt-auto">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors p-2 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <a href="https://github.com/Harsh8911" className="block h-full">
                <button className="w-full h-full p-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex flex-col items-center justify-center">
                  <ArrowRight size={28} />
                  <div className="mt-2 font-medium">View All Projects</div>
                </button>
              </a>
            </div>
          </div>
        ) : (
          <div className="relative h-[550px] w-full max-w-[800px] mx-auto">
            <button 
              onClick={() => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-gray-100/80 dark:bg-gray-700/80 p-2 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 z-10 text-gray-700 dark:text-white"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={() => setCurrentIndex((prev) => (prev + 1) % projects.length)}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-gray-100/80 dark:bg-gray-700/80 p-2 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 z-10 text-gray-700 dark:text-white"
            >
              <ChevronRight size={24} />
            </button>

            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-xl h-full flex flex-col">
              <div className="relative h-[250px] sm:h-[400px]">
                <img 
                  src={projects[currentIndex].image} 
                  alt={projects[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                  {projects[currentIndex].name}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {projects[currentIndex].description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[currentIndex].techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a
                    href={projects[currentIndex].demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors p-2 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 flex-1"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                  <a
                    href={projects[currentIndex].sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 flex-1"
                  >
                    <Github size={20} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-blue-500 dark:bg-blue-400 w-4' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;