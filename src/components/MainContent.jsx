import React from 'react';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificationsSection from './sections/CertificationsSection';
import AchievementsSection from './sections/AchievementsSection';
import CommunitySection from './sections/CommunitySection';
import ContactSection from './sections/ContactSection';

const MainContent = ({ activeSection, setIsSidebarOpen }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'certifications':
        return <CertificationsSection />;
      case 'achievements':
        return <AchievementsSection />;
      case 'community':
        return <CommunitySection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-2 lg:p-4">
        {renderSection()}
      </div>
    </div>
  );
};

export default MainContent;