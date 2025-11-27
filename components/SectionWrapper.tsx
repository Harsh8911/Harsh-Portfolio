import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        // smaller amount makes the intersection trigger earlier when scrolling from mobile nav
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;