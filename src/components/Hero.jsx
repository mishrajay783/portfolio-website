import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <section id="home" className="hero section">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className="eyebrow"></span>
        <h1>Hi, I'm Jay Krishna Mishra</h1>
        <p className="typing" aria-label="Aspiring Data Analyst | SQL | Python | Power BI | Excel">
          Data Analyst | PowerBI Developer | SQL | Python | Excel |Power BI
        </p>
        <p className="hero-intro">
          I transform raw data into clear business stories through analytics, dashboards, statistics, and practical
          problem solving.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="/resume.pdf" download>
            <FiDownload /> Download Resume
          </a>
          {/* <a className="btn secondary" href="#contact">
            <FiMail /> Contact Me
          </a> */}
        </div>
      </motion.div>

      <motion.div
        className="profile-wrap"
        initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
      >
        <div className="profile-card">
          <div className="profile-image">
            {imageLoaded ? (
              <img src="/Profile.jpeg" alt="Jay Krishna Mishra" onError={() => setImageLoaded(false)} />
            ) : (
              <span>JKM</span>
            )}
          </div>
          <div className="metric-card top">
            <strong>12+</strong>
            <span>Analytics Skills</span>
          </div>
          <div className="metric-card bottom">
            <strong>5</strong>
            <span>Featured Projects</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
