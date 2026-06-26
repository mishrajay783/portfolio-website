import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { navLinks } from '../data/portfolioData.js';

export default function Navbar({ activeSection, theme, onThemeToggle }) {
  const [open, setOpen] = useState(false);

  const navigate = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <button className="brand" type="button" onClick={() => navigate('home')}>
          <span>J</span>
          <strong>Jay Krishna</strong>
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className={activeSection === link.id ? 'active' : ''}
              onClick={() => navigate(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-btn" type="button" aria-label="Toggle theme" onClick={onThemeToggle}>
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button className="icon-btn menu-btn" type="button" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
}
