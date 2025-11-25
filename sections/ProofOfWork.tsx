import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaMedal, 
  FaGithub, 
  FaCheckCircle, 
  FaExternalLinkAlt, 
  FaGitAlt, 
  FaPhp, 
  FaDatabase, 
  FaCode, 
  FaPalette,
  FaCloud,
  FaTrophy,
  FaCertificate,
  FaCrown,
  FaMapMarkerAlt,
  FaUsers,
  FaBullseye,
  FaCalendarAlt
} from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';

const certifications = [
  {
    id: 6,
    title: "Oracle Cloud Infrastructure Certified Developer",
    issuer: "Oracle",
    year: "2025",
    tags: ["Cloud", "OCI", "DevOps"],
    icon: FaCloud,
    color: "text-red-600",
    bgColor: "bg-red-100 dark:bg-red-900/20",
    link: "#"
  },
  {
    id: 1,
    title: "Git Training",
    issuer: "Simplilearn",
    year: "2024",
    tags: ["Git", "Version Control", "Collaboration"],
    icon: FaGitAlt,
    color: "text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    link: "#"
  },
  {
    id: 2,
    title: "Advanced PHP & MYSQL",
    issuer: "Infosys Springboard",
    year: "2024",
    tags: ["PHP", "MySQL", "Web Dev"],
    icon: FaPhp,
    color: "text-indigo-500",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/20",
    link: "#"
  },
  {
    id: 3,
    title: "Database and SQL",
    issuer: "Infosys Springboard",
    year: "2024",
    tags: ["SQL", "DBMS", "Optimization"],
    icon: FaDatabase,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    link: "#"
  },
  {
    id: 5,
    title: "Tailwind CSS Bootcamp",
    issuer: "LetsUpgrade",
    year: "2024",
    tags: ["Tailwind", "UI/UX", "Responsive"],
    icon: FaPalette,
    color: "text-cyan-500",
    bgColor: "bg-cyan-100 dark:bg-cyan-900/20",
    link: "#"
  },
  {
    id: 4,
    title: "Data Structure & Algo",
    issuer: "Infosys Springboard",
    year: "2023",
    tags: ["DSA", "Algorithms", "Problem Solving"],
    icon: FaCode,
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    link: "#"
  }
];

const achievementsList = [
  {
    id: 4,
    title: "Smart India Hackathon Grand Finalists 2025",
    description: "Selected as Grand Finalists for the Smart India Hackathon 2025, representing innovation at the national level.",
    year: "2025",
    location: "Bhatinda, Punjab",
    type: "National Finals",
    participants: "Top Teams India",
    tags: ["SIH 2025", "Grand Finalist"],
    icon: FaTrophy,
  },
  {
    id: 1,
    title: "University Level AAVISHKAR 2024",
    description: "Selected to represent at the university level for AAVISHKAR 2024, a prestigious research competition.",
    year: "2024",
    location: "SPPU, Pune",
    type: "University Level Selection",
    participants: "1000+ participants",
    tags: ["Academic Excellence", "University Level"],
    icon: FaCrown,
  },
  {
    id: 2,
    title: "Mumbai Hacks 2.0 (2024)",
    description: "Actively participated in Mumbai Hacks 2.0. Demonstrated exceptional collaborative development skills.",
    year: "2024",
    location: "Mumbai",
    type: "Innovation & Collaboration",
    participants: "500+ developers",
    tags: ["Hackathon", "Participant"],
    icon: FaMedal,
  },
  {
    id: 3,
    title: "NASA International Space Apps Challenge",
    description: "Achieved Top 10 position in the NASA International Space Apps Challenge at local level.",
    year: "2024",
    location: "Local Level",
    type: "Top 10 Local Ranking",
    participants: "200+ local participants",
    tags: ["Space Technology", "Top 10"],
    icon: FaTrophy,
  }
];

type TabType = 'certifications' | 'achievements';

const ProofOfWork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('certifications');

  return (
    <SectionWrapper id="proof" className="relative">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Proof of Work</h2>
        <p className="text-gray-600 dark:text-gray-400 text-base">My professional milestones and recognitions.</p>
      </div>

      {/* Transparent Tab Navigation */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1 rounded-full bg-white/20 dark:bg-gray-800/30 backdrop-blur-md border border-white/30 dark:border-gray-700/30 shadow-sm relative">
            {/* Animated Background for Active Tab */}
            <motion.div 
                layoutId="activeTabBackground"
                className="absolute inset-y-1 rounded-full bg-white dark:bg-gray-700 shadow-sm z-0"
                initial={false}
                animate={{
                    left: activeTab === 'certifications' ? '4px' : '50%',
                    right: activeTab === 'certifications' ? '50%' : '4px',
                    x: 0
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ width: 'calc(50% - 6px)' }}
            />
            
            <button
                onClick={() => setActiveTab('certifications')}
                className={`relative z-10 flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-colors duration-200 ${
                    activeTab === 'certifications' 
                    ? 'text-primary-600 dark:text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-gray-200'
                }`}
            >
                <FaCertificate /> Certifications
            </button>
            <button
                onClick={() => setActiveTab('achievements')}
                className={`relative z-10 flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-colors duration-200 ${
                    activeTab === 'achievements' 
                    ? 'text-primary-600 dark:text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-gray-200'
                }`}
            >
                <FaTrophy /> Achievements
            </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'certifications' ? (
            <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
                {certifications.map((cert, idx) => (
                    <motion.div 
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                        className="group relative flex flex-col p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-white/60 dark:border-gray-700/50 rounded-xl hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 h-full"
                    >
                        {/* Year Badge - Top Right Corner */}
                        <div className="absolute top-0 right-0 bg-primary-100/80 dark:bg-primary-900/80 text-primary-700 dark:text-primary-300 text-[10px] font-bold px-2 py-0.5 rounded-bl-lg rounded-tr-lg border-l border-b border-white/20 dark:border-white/10 shadow-sm">
                        {cert.year}
                        </div>

                        {/* Header */}
                        <div className="flex justify-between items-start mb-3 pr-6">
                            <div className="flex items-center gap-3 w-full">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${cert.bgColor} ${cert.color} shadow-sm group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                                    <cert.icon size={20} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm leading-tight mb-0.5 truncate pr-2" title={cert.title}>
                                        {cert.title}
                                    </h4>
                                    <p className="text-[10px] text-primary-600 dark:text-primary-400 font-medium truncate">{cert.issuer}</p>
                                </div>
                            </div>
                        </div>

                        {/* Tags - Compact */}
                        <div className="flex flex-wrap gap-1 mb-3 mt-auto">
                            {cert.tags.map(tag => (
                                <span key={tag} className="px-1.5 py-0.5 text-[9px] font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="pt-2 border-t border-gray-200/50 dark:border-gray-700/50 flex items-center justify-between">
                            <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-[10px] font-bold">
                                <FaCheckCircle size={9} />
                                <span>Completed</span>
                            </div>
                            <a 
                                href={cert.link}
                                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-[10px] font-semibold transition-colors shadow-sm hover:shadow-md"
                            >
                                <FaExternalLinkAlt size={9} /> View
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        ) : (
            <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
                {achievementsList.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="group relative flex flex-col items-center text-center p-5 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/50 dark:border-gray-700/50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 aspect-square justify-between"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        {/* Icon */}
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 shadow-inner group-hover:scale-110 transition-transform duration-300">
                            <item.icon size={28} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col justify-center w-full mt-3">
                            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-tight line-clamp-2">
                                {item.title}
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 line-clamp-3 leading-relaxed">
                                {item.description}
                            </p>
                            
                             {/* Mini Meta */}
                            <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 dark:text-gray-400 mb-2">
                                <span className="flex items-center gap-1 bg-white/50 dark:bg-gray-800/50 px-1.5 py-0.5 rounded"><FaCalendarAlt className="text-primary-500"/> {item.year}</span>
                                <span className="flex items-center gap-1 bg-white/50 dark:bg-gray-800/50 px-1.5 py-0.5 rounded"><FaMapMarkerAlt className="text-primary-500"/> {item.location}</span>
                            </div>
                        </div>

                        {/* Footer / Badge */}
                         <div className="w-full pt-3 border-t border-gray-200/50 dark:border-gray-700/50 mt-auto">
                            <button className="w-full py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-[10px] font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 transform active:scale-95">
                                <FaTrophy size={10} /> Achievement Unlocked
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default ProofOfWork;