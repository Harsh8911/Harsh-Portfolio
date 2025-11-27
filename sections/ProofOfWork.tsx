import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { 
  FaMedal, 
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
  FaAward,
  FaFingerprint,
  FaCheckCircle
} from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';

// --- Data ---
const certifications = [
  {
    id: 6,
    title: "Oracle Cloud Infrastructure Developer",
    issuer: "Oracle",
    year: "2025",
    tags: ["Cloud", "DevOps"],
    icon: FaCloud,
    color: "text-red-500",
    gradient: "from-red-500/20 to-orange-500/5",
    border: "group-hover:border-red-500/50",
    link: "#"
  },
  {
    id: 1,
    title: "Git Training",
    issuer: "Simplilearn",
    year: "2024",
    tags: ["Version Control"],
    icon: FaGitAlt,
    color: "text-orange-500",
    gradient: "from-orange-500/20 to-red-500/5",
    border: "group-hover:border-orange-500/50",
    link: "#"
  },
  {
    id: 2,
    title: "Advanced PHP & MYSQL",
    issuer: "Infosys Springboard",
    year: "2024",
    tags: ["Backend"],
    icon: FaPhp,
    color: "text-indigo-500",
    gradient: "from-indigo-500/20 to-blue-500/5",
    border: "group-hover:border-indigo-500/50",
    link: "#"
  },
  {
    id: 3,
    title: "Database and SQL",
    issuer: "Infosys Springboard",
    year: "2024",
    tags: ["Database"],
    icon: FaDatabase,
    color: "text-blue-500",
    gradient: "from-blue-500/20 to-cyan-500/5",
    border: "group-hover:border-blue-500/50",
    link: "#"
  },
  {
    id: 5,
    title: "Tailwind CSS Bootcamp",
    issuer: "LetsUpgrade",
    year: "2024",
    tags: ["UI/UX"],
    icon: FaPalette,
    color: "text-cyan-500",
    gradient: "from-cyan-500/20 to-teal-500/5",
    border: "group-hover:border-cyan-500/50",
    link: "#"
  },
  {
    id: 4,
    title: "Data Structure & Algo",
    issuer: "Infosys Springboard",
    year: "2023",
    tags: ["CS Fundamentals"],
    icon: FaCode,
    color: "text-green-500",
    gradient: "from-green-500/20 to-emerald-500/5",
    border: "group-hover:border-green-500/50",
    link: "#"
  }
];

const achievementsList = [
  {
    id: 4,
    title: "Smart India Hackathon 2025",
    subtitle: "Grand Finalist",
    description: "Selected as Grand Finalists representing innovation at the national level.",
    year: "2025",
    location: "Punjab",
    tags: ["National Level", "Finalist"],
    icon: FaTrophy,
    accent: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30"
  },
  {
    id: 1,
    title: "AAVISHKAR 2024",
    subtitle: "University Representative",
    description: "Selected to represent at the university level for a prestigious research competition.",
    year: "2024",
    location: "Pune",
    tags: ["Research", "Selection"],
    icon: FaCrown,
    accent: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30"
  },
  {
    id: 2,
    title: "Mumbai Hacks 2.0",
    subtitle: "Active Participant",
    description: "Demonstrated exceptional collaborative development skills in a 24-hour sprint.",
    year: "2024",
    location: "Mumbai",
    tags: ["Hackathon", "Collaboration"],
    icon: FaMedal,
    accent: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30"
  },
  {
    id: 3,
    title: "NASA Space Apps Challenge",
    subtitle: "Top 10 Local Ranking",
    description: "Achieved Top 10 position solving complex space technology problems.",
    year: "2024",
    location: "Local",
    tags: ["NASA", "Top 10"],
    icon: FaAward,
    accent: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30"
  }
];

// Spotlight Card Component
const SpotlightCard = ({ children, className = "", onClick, accentColor = "rgba(139, 92, 246, 0.1)" }: any) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${accentColor},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
};

const ProofOfWork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'certifications' | 'achievements'>('certifications');

  return (
    <SectionWrapper id="certifications" className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/5 dark:bg-primary-900/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 dark:bg-blue-900/10 rounded-full blur-[100px] -z-10" />

        {/* Centered Header */}
        <div className="flex flex-col items-center text-center mb-16 relative z-10 px-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-600 dark:text-primary-400 font-mono text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md"
            >
                <FaFingerprint />
          <span>Certifications</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-8">
                Milestones <span className="text-gray-400 dark:text-gray-700">&</span> Recognitions
            </h2>

            {/* Toggle Switch */}
            <div className="p-1.5 rounded-2xl bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 backdrop-blur-sm relative flex w-full max-w-xs sm:max-w-md">
                <motion.div 
                    className="absolute top-1.5 bottom-1.5 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200/50 dark:border-gray-700/50"
                    initial={false}
                    animate={{
                        left: activeTab === 'certifications' ? '6px' : '50%',
                        width: 'calc(50% - 6px)'
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <button
                    onClick={() => setActiveTab('certifications')}
                    className={`relative z-10 flex-1 py-3 text-sm font-bold transition-colors flex items-center justify-center gap-2 ${
                        activeTab === 'certifications' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                >
                    <FaCertificate /> Certifications
                </button>
                <button
                    onClick={() => setActiveTab('achievements')}
                    className={`relative z-10 flex-1 py-3 text-sm font-bold transition-colors flex items-center justify-center gap-2 ${
                        activeTab === 'achievements' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                >
                    <FaTrophy /> Achievements
                </button>
            </div>
        </div>

        {/* Content Tabs */}
        <AnimatePresence mode="wait">
            {activeTab === 'certifications' ? (
                <motion.div
                    key="certifications"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                    {certifications.map((cert) => (
                        <SpotlightCard 
                            key={cert.id}
                            className={`rounded-2xl bg-white dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:border-primary-500/30 group`}
                        >
                            {/* Technical Details Decoration */}
                            <div className="absolute top-3 right-4 flex gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                                <div className="w-1 h-1 rounded-full bg-current" />
                                <div className="w-1 h-1 rounded-full bg-current" />
                                <div className="w-1 h-1 rounded-full bg-current" />
                            </div>

                            <div className="p-5 flex items-center gap-5">
                                {/* Icon Chip */}
                                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${cert.color} bg-gray-50 dark:bg-gray-800 shadow-inner ring-1 ring-inset ring-black/5 dark:ring-white/5 group-hover:scale-105 transition-transform duration-300`}>
                                    <cert.icon size={28} />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate pr-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                                        Issued by <span className="font-semibold text-gray-800 dark:text-gray-300">{cert.issuer}</span>
                                    </p>
                                    
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                                            <FaFingerprint size={10} /> {cert.year}
                                        </div>
                                        <div className="flex items-center gap-1 text-[10px] font-bold text-green-600 dark:text-green-400">
                                            <FaCheckCircle size={10} /> Verified
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300 text-gray-400">
                                    <FaExternalLinkAlt />
                                </div>
                            </div>
                            
                            {/* Bottom Bar Code Effect */}
                            <div className="h-1 w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent opacity-50 mt-1" />
                        </SpotlightCard>
                    ))}
                </motion.div>
            ) : (
                <motion.div
                    key="achievements"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {achievementsList.map((item, index) => (
                        <SpotlightCard 
                            key={item.id}
                            className={`rounded-3xl bg-white dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-center hover:shadow-2xl transition-all duration-500 group overflow-visible`}
                            accentColor="rgba(234, 179, 8, 0.15)"
                        >
                            <div className="h-full p-6 flex flex-col items-center relative z-20">
                                {/* Ambient Glow */}
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 ${item.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Floating 3D Icon Container */}
                                <motion.div 
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                    className={`w-20 h-20 rounded-2xl ${item.bg} ${item.accent} flex items-center justify-center text-4xl mb-5 relative z-10 shadow-lg ring-1 ring-black/5 dark:ring-white/10`}
                                >
                                    <item.icon />
                                    {/* Glass reflection */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/40 to-transparent pointer-events-none" />
                                </motion.div>

                                <div className="mb-auto w-full">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 border ${item.border} ${item.bg} ${item.accent}`}>
                                        {item.subtitle}
                                    </div>
                                    <p className="text-xs text-gray-700 dark:text-gray-400 leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>
                                
                                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 w-full flex justify-between items-center text-[10px] text-gray-500 dark:text-gray-400 font-mono">
                                    <span>{item.location}</span>
                                    <span>{item.year}</span>
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    </SectionWrapper>
  );
};

export default ProofOfWork;