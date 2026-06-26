import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import Section from './Section.jsx';
import { projects } from '../data/portfolioData.js';

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected analytics work">
      <div className="projects-grid">
        {projects.map((project, index) => {
          const imageStyle = project.image?.startsWith('/')
            ? { backgroundImage: `linear-gradient(180deg, transparent 35%, rgba(2, 6, 23, 0.72)), url(${project.image})` }
            : { background: project.image };

          return (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              <div className="project-image" style={imageStyle}>
                <span>{project.title}</span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
                  <a href={project.demo} target="_blank" rel="noreferrer"><FiExternalLink /> Live Demo</a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
