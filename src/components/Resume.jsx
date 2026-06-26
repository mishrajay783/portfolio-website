import { motion } from 'framer-motion';
import { FiDownload, FiFileText } from 'react-icons/fi';
import Section from './Section.jsx';

export default function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Download my latest resume">
      <motion.div
        className="resume-card"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
      >
        <div className="resume-preview">
          <FiFileText />
          <div>
            <span>Resume Preview</span>
            <h3>Jay Krishna Mishra</h3>
            <p>Data Analytics | SQL | Python | Power BI | Excel</p>
          </div>
        </div>
        <a className="btn primary" href="/resume.pdf" download>
          <FiDownload /> Download Resume
        </a>
      </motion.div>
    </Section>
  );
}
