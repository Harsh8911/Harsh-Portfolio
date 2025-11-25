import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { FaEnvelope, FaPhoneAlt, FaComments } from 'react-icons/fa';

interface ContactProps {
  onChatClick?: () => void;
}

const Contact: React.FC<ContactProps> = ({ onChatClick }) => {
  return (
    <SectionWrapper id="contact" className="relative">
       {/* Background Ambience */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 dark:bg-primary-900/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Reach out via email, phone, or join the live chat.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {/* Email Card */}
        <div className="group flex flex-col items-center text-center p-5 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-white/60 dark:border-gray-700/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
           <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 text-lg group-hover:scale-110 transition-transform duration-300">
             <FaEnvelope />
           </div>
           <h3 className="text-base font-bold text-gray-900 dark:text-white mb-0.5">Email</h3>
           <p className="text-gray-500 dark:text-gray-400 text-[10px] mb-3">
             Project inquiries & collaborations.
           </p>
           <a 
             href="mailto:harshumeshgawali@gmail.com" 
             className="w-full py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-xs font-semibold hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all shadow-sm break-all px-2"
           >
             harshumeshgawali@gmail.com
           </a>
        </div>

        {/* Phone Card */}
        <div className="group flex flex-col items-center text-center p-5 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-white/60 dark:border-gray-700/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
           <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center mb-3 text-lg group-hover:scale-110 transition-transform duration-300">
             <FaPhoneAlt />
           </div>
           <h3 className="text-base font-bold text-gray-900 dark:text-white mb-0.5">Phone</h3>
           <p className="text-gray-500 dark:text-gray-400 text-[10px] mb-3">
             Urgent discussions & connects.
           </p>
           <a 
             href="tel:+919503896398" 
             className="w-full py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-xs font-semibold hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all shadow-sm"
           >
             +91 9503896398
           </a>
        </div>

        {/* Community Card - Highlighted */}
        <div className="group flex flex-col items-center text-center p-5 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg hover:shadow-primary-600/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
           {/* Decorative circles */}
           <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl -mr-8 -mt-8" />
           <div className="absolute bottom-0 left-0 w-20 h-20 bg-black/10 rounded-full blur-lg -ml-8 -mb-8" />

           <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-3 text-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-inner">
             <FaComments />
           </div>
           <h3 className="text-base font-bold mb-0.5">Live Chat</h3>
           <p className="text-primary-100 text-[10px] mb-3 px-2">
             Connect instantly.
           </p>
           <button 
             onClick={onChatClick} 
             className="w-full py-2 rounded-lg bg-white text-primary-700 text-xs font-bold hover:bg-gray-50 transition-colors shadow-sm transform active:scale-95"
           >
             Join Community
           </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;