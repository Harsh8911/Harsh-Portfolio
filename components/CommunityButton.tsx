import React from 'react';
import { motion } from 'framer-motion';
import { FaComments } from 'react-icons/fa';

interface CommunityButtonProps {
    onClick: () => void;
}

const CommunityButton: React.FC<CommunityButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 p-3 md:p-4 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-500 rounded-full shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
      aria-label="Join Community Chat"
    >
      <FaComments size={20} className="group-hover:animate-pulse" />
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Community Chat
      </span>
    </motion.button>
  );
};

export default CommunityButton;