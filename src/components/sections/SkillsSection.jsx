import React, { useState } from "react";
import { Code, Server, Wrench, Sparkles } from "lucide-react";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const frontendSkills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color: "from-cyan-400 to-teal-500",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "from-orange-400 to-red-500",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "from-green-400 to-green-600",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "from-blue-400 to-yellow-500",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Supabase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "SQL Server",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
      color: "from-red-500 to-red-600",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      color: "from-purple-500 to-blue-600",
    },
  ];

  const developmentTools = [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "from-red-400 to-red-600",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "from-gray-600 to-gray-800",
      darkIcon: true,
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "from-pink-400 to-purple-500",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Notion",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
      color: "from-gray-700 to-black",
      darkIcon: true,
    },
    {
      name: "Expo",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
      color: "from-purple-600 to-blue-600",
      darkIcon: true,
    },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-4 h-4" />,
      skills: frontendSkills,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Backend Development", 
      icon: <Server className="w-4 h-4" />,
      skills: backendSkills,
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      title: "Development Tools",
      icon: <Wrench className="w-4 h-4" />,
      skills: developmentTools,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    }
  ];

  return (
    <div className="min-h-full p-2 lg:p-3">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 lg:mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-blue-500 dark:text-blue-400 animate-pulse" />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white font-playfair">
              Technical Skills
            </h1>
          </div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3"></div>
          <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 max-w-2xl">
            Explore my technical expertise across different domains of software development
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 lg:gap-3 mb-6 lg:mb-8 justify-center">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-xs lg:text-sm ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : `${category.bgColor} text-gray-700 dark:text-gray-300 hover:scale-105 hover:shadow-md`
              }`}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.title}</span>
              <span className="sm:hidden">{category.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="space-y-6 lg:space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-500 ${
                activeCategory === categoryIndex ? 'block' : 'hidden'
              }`}
            >
              {/* Category Header */}
              <div className="text-center mb-4 lg:mb-6">
                <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-xl shadow-lg mb-3`}>
                  {category.icon}
                  <h2 className="text-base lg:text-lg font-bold font-playfair">
                    {category.title}
                  </h2>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group p-3 lg:p-4 text-center hover:transform hover:scale-105 transition-all duration-300 bg-white/70 dark:bg-gray-800/70 rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl"
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    <div className="relative">
                      {/* Skill Icon */}
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-2 group-hover:animate-bounce ${
                          skill.darkIcon ? "dark:invert" : ""
                        }`}
                      />
                      
                      {/* Skill Name */}
                      <h3 className="text-xs lg:text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-playfair">
                        {skill.name}
                      </h3>

                      {/* Hover Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-8 lg:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          <div className="text-center p-3 lg:p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="text-lg lg:text-xl font-bold text-blue-600 dark:text-blue-400 mb-1 font-playfair">19+</div>
            <div className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">Technologies</div>
          </div>
          <div className="text-center p-3 lg:p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="text-lg lg:text-xl font-bold text-green-600 dark:text-green-400 mb-1 font-playfair">13</div>
            <div className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">Advanced Skills</div>
          </div>
          <div className="text-center p-3 lg:p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="text-lg lg:text-xl font-bold text-purple-600 dark:text-purple-400 mb-1 font-playfair">3</div>
            <div className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">Categories</div>
          </div>
          <div className="text-center p-3 lg:p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="text-lg lg:text-xl font-bold text-orange-600 dark:text-orange-400 mb-1 font-playfair">2+</div>
            <div className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">Years Learning</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;