import React from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const Skills = () => {
  const developmentSteps = [
    { number: 1, title: "Planning" },
    { number: 2, title: "Design" },
    { number: 3, title: "Coding" },
    { number: 4, title: "Deploy" },
  ];

  const skills = [
    {
      name: "HTML5",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      level: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      level: "Beginner",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MySQL",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Git",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      darkIcon: true,
    },
    {
      name: "Bootstrap",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Figma",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ];

  return (
    <section id="skills" className="py-12 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            My Development Approach
          </h2>

          {/* Development Steps with Mobile Arrows */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12">
            {developmentSteps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold">{step.number}</div>
                      <div className="text-xs sm:text-sm">{step.title}</div>
                    </div>
                  </div>
                  {/* Mobile Down Arrow */}
                  {index < developmentSteps.length - 1 && (
                    <div className="h-8 flex items-center sm:hidden mt-2">
                      <ChevronDown size={24} className="text-gray-400 dark:text-gray-500 animate-bounce" />
                    </div>
                  )}
                </div>
                {/* Desktop Right Arrow */}
                {index < developmentSteps.length - 1 && (
                  <ChevronRight 
                    size={24} 
                    className="hidden sm:block text-gray-400 dark:text-gray-500" 
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            About My Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-3 text-center hover:transform hover:scale-105 transition-transform duration-200 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 ${skill.darkIcon ? "dark:invert" : ""}`}
                />
                <div className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                  {skill.name}
                </div>
                <div
                  className={`text-xs sm:text-sm ${
                    skill.level === "Advanced"
                      ? "text-green-600 dark:text-green-400"
                      : skill.level === "Intermediate"
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-orange-600 dark:text-orange-400"
                  }`}
                >
                  {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;