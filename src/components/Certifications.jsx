import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import Section from './Section.jsx';
import { certifications } from '../data/portfolioData.js';

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title="Certifications and learning"
    >
      <div className="cert-grid">
        {certifications.map((certificate, index) => (
          <motion.a
            className="cert-card"
            href={certificate.href}
            target="_blank"
            rel="noreferrer"
            key={certificate.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="cert-image"
            />

            <div>
              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
            </div>

            <FiExternalLink className="cert-link" />
          </motion.a>
        ))}
      </div>
    </Section>
  );
}