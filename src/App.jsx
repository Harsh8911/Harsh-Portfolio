import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/about'
import Skills from './components/skills'
import Project from './components/project'
import Contact from './components/contact'
import Footer from './components/footer'
import ThemeToggle from './components/themetoggle'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <Hero />
        <About />
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
        <ThemeToggle />
      </main>
    </ThemeProvider>
  )
}
export default App