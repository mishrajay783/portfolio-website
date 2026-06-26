import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {eyebrow && <span>{eyebrow}</span>}
        <h2>{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}
