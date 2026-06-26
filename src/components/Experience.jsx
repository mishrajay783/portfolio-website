import { FiBriefcase, FiCheckCircle } from 'react-icons/fi';
import Section from './Section.jsx';

const experience = [
  {
    role: 'Data Analyst & Power BI Developer',
    organization: 'SPARECARE Solutions Pvt.Ltd. | Gurugram,Haryana ',
    period: 'March 2026 - Present',
    // summary:
    //   'Built analytics projects using SQL, Excel, Power BI, and Python to solve business-style reporting and insight-generation problems.',
    points: [
      'Designed and maintained interactive Power BI dashboards and reports to monitor key business metrics and support data-driven decision-making.',
      'Developed SQL queries, Stored Procedures (SPs), and DAX measures, while implementing business logic and modifying existing SPs based on stakeholder and BDM requirements.',
      'Collaborated with stakeholders and BDMs to gather reporting requirements, validate data accuracy, resolve reporting issues, and deliver actionable business insights.',
    ],
    tools: ['SQL', 'Power BI', 'Excel', 'Python', 'DAX'],
  },
  {
    role: 'Data Analyst Intern',
    organization: 'Cognifyz Technologies',
    period: 'July 2025 - September 2025',
    // summary:
    //   'Worked on end-to-end analytics workflows from raw data understanding to dashboard design, insight writing, and GitHub documentation.',
    points: [
      'Worked with SQL, Python, and Excel to clean, analyze, and transform data, performing EDA to uncover trends and actionable business insights while learning to handle industry projects and stakeholder requirements.',
      'Built interactive Power BI dashboards and automated reporting solutions to track KPIs and support data-driven decision-making effectively.',
    ],
    tools: ['MySQL', 'Excel', 'Power BI', 'GitHub'],
  },
];

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Practical analytics experience">
      <div className="experience-grid">
        {experience.map((item) => (
          <article
            className="experience-card"
            key={`${item.role}-${item.period}`}
          >
            <div className="experience-head">
              <div className="experience-icon">
                <FiBriefcase />
              </div>
              <div>
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <p>{item.organization}</p>
              </div>
            </div>
            <p className="experience-summary">{item.summary}</p>
            <ul className="experience-points">
              {item.points.map((point) => (
                <li key={point}>
                  <FiCheckCircle />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="tags">
              {item.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
