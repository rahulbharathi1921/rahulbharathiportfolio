import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProjectCarousel from './components/ProjectCarousel';
import Methodology from './components/Methodology';
import SkillsMatrix from './components/SkillsMatrix';
import ContactForm from './components/ContactForm';
import ProjectDetail from './components/ProjectDetail';
import Experience from './components/Experience';
import About from './components/About';
import Research from './components/Research';
import PageTransition from './components/PageTransition';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import { AnimatePresence } from 'motion/react';

function HomePage() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <ProjectCarousel />
        <Methodology />
      </main>
    </PageTransition>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-surface text-on-surface">
        <CustomCursor />
        <ParticleBackground />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<PageTransition><SkillsMatrix /></PageTransition>} />
            <Route path="/project/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
            <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/research" element={<PageTransition><Research /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactForm /></PageTransition>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}
