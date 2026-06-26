import { motion } from 'framer-motion';
import Section from './Section.jsx';
import { skillGroups } from '../data/portfolioData.js';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="Skills that turn data into decisions">
      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const GroupIcon = group.icon;
          return (
            <motion.article
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              <div className="card-title">
                <GroupIcon />
                <h3>{group.title}</h3>
              </div>
              <div className="skill-list compact">
                {group.skills.map((skill) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div className="skill-pill" key={skill.name}>
                      <SkillIcon />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
