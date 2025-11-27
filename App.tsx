import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import MyStory from './sections/MyStory';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Community from './sections/Community';
import ProofOfWork from './sections/ProofOfWork';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CommunityButton from './components/CommunityButton';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { auth } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; 
  });

  const [showCommunity, setShowCommunity] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Auth Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setIsAdminLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // View Routing Logic
  if (isAdminLoggedIn) {
      return <AdminDashboard onLogout={() => setIsAdminLoggedIn(false)} />;
  }

  if (showAdminLogin) {
      return (
          <AdminLogin 
            onLoginSuccess={() => setIsAdminLoggedIn(true)} 
            onBack={() => setShowAdminLogin(false)} 
          />
      );
  }

  if (showCommunity) {
      return (
          <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300 font-sans selection:bg-primary-500/30 overflow-x-hidden">
             <Community onBack={() => setShowCommunity(false)} />
          </div>
      )
  }

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen w-full overflow-x-hidden transition-colors duration-300 font-sans selection:bg-primary-500/30">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="w-full overflow-x-hidden">
        <Hero />
        <MyStory />
        <Skills />
        <Projects />
        <Experience />
        <ProofOfWork />
        <Contact onChatClick={() => setShowCommunity(true)} />
      </main>

      <Footer onAdminClick={() => setShowAdminLogin(true)} />
      <BackToTop />
      <CommunityButton onClick={() => setShowCommunity(true)} />
    </div>
  );
};

export default App;