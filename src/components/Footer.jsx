import { navLinks, socials } from '../data/portfolioData.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Jay Krishna Mishra</strong>
        <p>© 2026 Jay Krishna Mishra. All Rights Reserved.</p>
      </div>
      <div className="footer-links">
        {navLinks.slice(0, 6).map((link) => (
          <a key={link.id} href={`#${link.id}`}>{link.label}</a>
        ))}
      </div>
      {/* <div className="footer-socials">
        {socials.slice(0, 3).map((social) => {
          const Icon = social.icon;
          return (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
              <Icon />
            </a>
          );
        })}
      </div> */}
    </footer>
  );
}
