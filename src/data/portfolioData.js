import {
  FaChartLine,
  FaDatabase,
  FaEnvelope,
  FaFileExcel,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPython,
  FaTable,
  FaPhone,
} from 'react-icons/fa';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { SiMysql } from 'react-icons/si';
import { TbChartHistogram, TbMathFunction } from 'react-icons/tb';
import { FiGitBranch } from 'react-icons/fi';

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export const socials = [
    { label: 'Contact No', href: 'tel:+91 9569210394', icon: FaPhone },
    { label: 'Email', href: 'mailto:mishrajay783@gmail.com', icon: FaEnvelope },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jay-krishna-mishra-200864294', icon: FaLinkedin },

  { label: 'GitHub', href: 'https://github.com/mishrajay783', icon: FaGithub },

];

export const skillGroups = [
  {
    title: 'Programming',
    icon: FaPython,
    skills: [
      { name: 'Python', icon: FaPython },
      { name: 'SQL', icon: FaDatabase },
    ],
  },
  {
    title: 'Data Analytics',
    icon: FaChartLine,
    skills: [
      { name: 'Excel', icon: FaFileExcel },
      { name: 'Power BI', icon: FaChartLine },
    ],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    skills: [
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    title: 'Statistics',
    icon: TbMathFunction,
    skills: [
      { name: 'Hypothesis Testing', icon: TbChartHistogram },
      { name: 'Probability', icon: TbMathFunction },
      { name: 'Descriptive Statistics', icon: FaTable },
    ],
  },
  {
    title: 'Tools',
    icon: FiGitBranch,
    skills: [
      { name: 'Git', icon: FiGitBranch },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: BiLogoVisualStudio },
    ],
  },
];

export const education = [
  {
    degree: " Bachelor of Technology (B.Tech) - Computer Science & Engineering",
    institution: 'Dr. APJ Abdul Kalam Technical University, Lucknow',
    year: '2022- 2026',
    // detail: 'completed Bachelors degree with a strong interest in Data Analytics and Business Intelligence. Developed expertise in Python, SQL, Excel, Power BI, Statistics, and Data Visualization. Worked on multiple projects involving data cleaning, exploratory analysis, dashboard creation, and business insight generation to support data-driven decision making.',
  },
  {
    degree: 'Higher Secondary',
    institution: 'Shri Krishna Children Central Academy (CBSE), Ambedkar Nagar',
    year: '2020 - 2022',
    // detail: 'Built a strong foundation in mathematics, logical thinking, and communication.',
  },
  {
    degree: 'Secondary School',
    institution: 'Shri Krishna Children Central Academy (CBSE), Ambedkar Nagar',
    year: '2019-2020',
    // detail: 'Developed discipline, curiosity, and a consistent learning mindset.',
  },
];

export const projects = [
  {
    // title: 'Business 360 (Finance, Sales, Marketing, Supply Chain, Executive)-Brick & mortar and e-commerce',
    description: 'Designed a 360° business analytics dashboard that provides a complete view of performance across Finance, Sales, Marketing, and Supply Chain operations.',
    tech: ['Power BI', 'DAX', 'Excel', 'Analytics'],
    image: '/business-360.png',
    github: 'https://github.com/mishrajay783/_Business_insights_360',
    demo: 'https://app.powerbi.com/view?r=eyJrIjoiNzk1MGJhODAtOTFmYy00MmFmLWFlNjAtNDIzOTY4MDI5ZTkyIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
  },
  {
    // title: 'Consumer Goods Ad-Hoc Insights (AtliQ Hardware)',
    description: 'Worked with large business datasets in SQL to find meaningful insights and support better business decisions.',
    tech: ['SQL', 'MySql','Excel'],
    image: '/consumer-goods-adhoc.png',
    github: 'https://github.com/mishrajay783/atliq-hardware-sql-adhoc-analysis',
  },
  {
    // title: 'Excel: Sales Analytics FMCG',
description: 'Developed sales analytics reports in Excel to evaluate customer performance, track business targets, and uncover key sales trends.',
    tech: ['Excel'],
    image: '/excel-sales-analytics.jpeg',
    github: 'https://github.com/mishrajay783/AtliQ-Sales-and-Financial-Report',
    // demo: 'https://github.com/yourusername',
  },
  {
    // title: 'Healthcare Claims Analysis: Fraud, Waste & Abuse (FWA) Detection',
description: 'Developed SQL-based analyses to detect billing irregularities, monitor provider performance, and support fraud, waste, and abuse detection in healthcare claims data.',
    tech: [' SQL',' MySql', 'Excel'],
    image: '/healthcare-fwa-analysis.png',
    github: 'https://github.com/mishrajay783/Claims_FWA_Analysis_Project',
    // demo: 'https://github.com/yourusername',
  },
  {
    // title: 'Healthcare Claims & Patient Risk Analytics Dashboard ',
description: 'Built a healthcare analytics dashboard to track claims performance, identify financial leakage, and support patient risk management through automated insights.',
    tech: ['Power BI',  'SQL',  'Excel','Dax Studio'],
    image: '/healthcare-dashboard.jpg',
    github: 'https://github.com/mishrajay783/Claims_FWA_Analysis_Project',
    // demo: 'https://github.com/yourusername',
  },
];

export const certifications = [
  {
    title: 'Data Analytics Certification',
    issuer: 'Codebasics',
    href: '/DA.certificate.jpeg',
    image: '/DA.certificate.jpeg',
  },
  {
    title: 'SQL Certification',
    issuer: 'Codebasics',
    href: '/SQL.certificate.jpeg',
    image: '/SQL.certificate.jpeg',
  },
  {
    title: 'Power BI Certification',
    issuer: 'Codebasics',
    href: '/PBI.certificate.jpeg',
    image: '/PBI.certificate.jpeg',
  },
  {
    title: 'Python Certification',
    issuer: 'Codebasics',
    href: '/py.certificate.jpeg',
    image: '/py.certificate.jpeg',
  },
];







