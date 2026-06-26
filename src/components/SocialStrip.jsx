import { motion } from 'framer-motion';
import Section from './Section.jsx';
import { socials } from '../data/portfolioData.js';

export default function SocialStrip() {
  return (
<Section id="contact" eyebrow="Contact" title="Get in Touch">      <motion.div
        className="social-strip"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
      >
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
              <Icon />
              <span>{social.label}</span>
            </a>
          );
        })}
      </motion.div>
    </Section>
  );
}
