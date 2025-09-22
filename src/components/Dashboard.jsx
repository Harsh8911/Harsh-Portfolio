import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import ThemeToggle from './themetoggle';
import Background3D from './Background3D';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-all duration-500">
      <Background3D />
      <div className="flex h-screen overflow-hidden">
        <Sidebar 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
        <MainContent 
          activeSection={activeSection}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Dashboard;