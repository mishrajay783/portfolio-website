import { motion } from 'framer-motion';
import { FiBarChart2, FiTarget, FiTrendingUp } from 'react-icons/fi';
import Section from './Section.jsx';

const cards = [
  { icon: FiTarget, title: 'Career Objective', text: 'Building data-driven solutions that create measurable business value.' },
  { icon: FiBarChart2, title: 'Analytics Passion', text: 'Turning raw data into meaningful insights and interactive dashboards.' },
  { icon: FiTrendingUp, title: 'Problem Solving', text: 'Using data and logic to solve business challenges effectively.' },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Insight-driven and business-focused">
      <div className="about-grid">
        <motion.div
          className="glass-panel about-copy"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <p>
           Hi, I'm Jay Krishna Mishra, a Data Analyst & PowerBI Developer with expertise in SQL, Power BI, Python, and Excel. I enjoy working with data to uncover insights, build interactive dashboards, and create reports that support informed business decisions.

          </p>
          <p>
                      Through hands-on experience in data analysis and business reporting, I have developed a strong understanding of turning complex data into clear and actionable information. My focus is on delivering practical solutions that help businesses track performance and make better decisions.

          </p>
          
        </motion.div>

        <div className="about-cards">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                className="mini-card"
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Icon />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
