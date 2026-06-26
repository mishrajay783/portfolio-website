import { motion } from 'framer-motion';
import Section from './Section.jsx';
import { education } from '../data/portfolioData.js';

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic foundation">
      <div className="timeline">
        {education.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={item.degree}
            initial={{ opacity: 0, x: index % 2 ? 28 : -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            <span className="timeline-dot" />
            <div className="glass-panel timeline-content">
              <span>{item.year}</span>
              <h3>{item.degree}</h3>
              <strong>{item.institution}</strong>
              <p>{item.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
