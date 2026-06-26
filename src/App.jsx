import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import About from './components/About.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Skills from './components/Skills.jsx';
import SocialStrip from './components/SocialStrip.jsx';
import { navLinks } from './data/portfolioData.js';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);

  const sectionIds = useMemo(() => navLinks.map((link) => link.id), []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 950);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);
      setShowTop(scrollTop > 560);

      let current = 'home';
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollTop + 140) current = id;
      }
      if (current) setActiveSection(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, pointerEvents: 'none' }}
            transition={{ duration: 0.5 }}
          >
            <div className="loader-mark">JKM</div>
            <span>Preparing insights...</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
      <ParticleBackground />
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onThemeToggle={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
      />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Resume />
        <SocialStrip />
        {/* <Contact /> */}
      </main>

      <Footer />
      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FiArrowUp />
      </button>
    </>
  );
}
