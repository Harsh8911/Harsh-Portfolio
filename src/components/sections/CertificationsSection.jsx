import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Git Training',
      provider: 'Simplilearn',
      description: 'Comprehensive training on Git version control system, including branching, merging, and collaboration workflows.',
      icon: '🔧',
      color: 'from-orange-400 to-red-500',
      skills: ['Git', 'Version Control', 'Collaboration', 'Branching'],
      status: 'Completed',
      link: 'https://drive.google.com/file/d/11RF3EzkXunwqQBr0yfNWiH00R3S5DUs5/view?usp=sharing'
    },
    {
      title: 'Advanced PHP & MYSQL Training',
      provider: 'Infosys Springboard',
      description: 'Advanced concepts in PHP programming and MySQL database management for web development.',
      icon: '🐘',
      color: 'from-purple-400 to-indigo-500',
      skills: ['PHP', 'MySQL', 'Web Development', 'Database Design'],
      status: 'Completed',
      link: 'https://drive.google.com/file/d/1izLiX10jYqFT0gWT2dJJxZgfRk-RlwFx/view?usp=sharing'
    },
    {
      title: 'Database and SQL',
      provider: 'Infosys Springboard',
      description: 'Comprehensive understanding of database concepts, SQL queries, and database optimization techniques.',
      icon: '🗄️',
      color: 'from-blue-400 to-cyan-500',
      skills: ['SQL', 'Database Design', 'Query Optimization', 'RDBMS'],
      status: 'Completed',
      link: 'https://drive.google.com/file/d/1gFDknqx6Xg1LrfinQQaEW1bdjPg2wbVw/view?usp=sharing'
    },
    {
      title: 'Data Structure & Algorithm',
      provider: 'Infosys Springboard',
      description: 'In-depth study of data structures and algorithms essential for efficient programming and problem-solving.',
      icon: '🧮',
      color: 'from-green-400 to-emerald-500',
      skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Optimization'],
      status: 'Completed',
      link: 'https://drive.google.com/file/d/1SrHUbo-9Dx9n_kdhgsdDAdZJbp5bvslZ/view?usp=sharing'
    },
    {
      title: 'Tailwind CSS Bootcamp',
      provider: 'LetsUpgrade',
      description: 'Comprehensive bootcamp covering Tailwind CSS framework for rapid UI development and responsive design.',
      icon: '🎨',
      color: 'from-cyan-400 to-blue-500',
      skills: ['Tailwind CSS', 'Responsive Design', 'UI Development', 'CSS Framework'],
      status: 'Completed',
      link: 'https://drive.google.com/file/d/18TpGN78o12wASDu6tdceqxZauVo4RvuV/view?usp=sharing'
    }
  ];

  return (
    <div className="min-h-full p-3 lg:p-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 lg:mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-6 h-6 lg:w-8 lg:h-8 text-blue-500 dark:text-blue-400" />
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white font-playfair">
                Certifications
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 mt-1">
                Professional certifications and training achievements
              </p>
            </div>
          </div>
          <div className="w-14 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg lg:rounded-xl p-3 lg:p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="absolute -top-3 -right-3 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl group-hover:animate-bounce"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-3 lg:mb-4">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${cert.color} rounded-lg lg:rounded-xl flex items-center justify-center text-base lg:text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-playfair">
                        {cert.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-xs lg:text-sm">
                        {cert.provider}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 px-2 py-0.5 lg:px-2 lg:py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                    <CheckCircle size={12} />
                    {cert.status}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-3 lg:mb-4 leading-relaxed text-xs lg:text-sm">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3 lg:mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-1.5 py-0.5 lg:px-2 lg:py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-default"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <Calendar size={12} />
                    <span>Certified</span>
                  </div>

                  <a
                    href={`/certificate-viewer?url=${encodeURIComponent(cert.link)}&title=${encodeURIComponent(cert.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2 py-1 lg:px-3 lg:py-1.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 hover:scale-105 text-xs font-medium group-hover:animate-pulse"
                  >
                    <ExternalLink size={12} />
                    View Certificate
                  </a>
                </div>

                <div className="absolute top-3 right-3 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          <div className="text-center p-3 lg:p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg lg:rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300">
            <div className="text-lg lg:text-xl font-bold text-blue-600 dark:text-blue-400 mb-1 font-playfair">5</div>
            <div className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">Certifications Earned</div>
          </div>
          <div className="text-center p-3 lg:p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg lg:rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300">
            <div className="text-lg lg:text-xl font-bold text-green-600 dark:text-green-400 mb-1 font-playfair">3</div>
            <div className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">Training Providers</div>
          </div>
          <div className="text-center p-3 lg:p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg lg:rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300">
            <div className="text-lg lg:text-xl font-bold text-purple-600 dark:text-purple-400 mb-1 font-playfair">20+</div>
            <div className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">Skills Acquired</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;
