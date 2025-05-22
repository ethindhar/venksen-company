import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import About from './About';
import Contact from './Contact';
import Team from './Team';
import Investors from './Investors';
import Technology from './Technology';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Footer from './components/Footer.js';
import './styles.css';

const navTranslations = {
  en: {
    about: "About",
    technology: "Technology",
    team: "Team",
    contact: "Contact",
    investors: "Investors"
  },
  hi: {
    about: "हमारे बारे में",
    technology: "प्रौद्योगिकी",
    team: "टीम",
    contact: "संपर्क",
    investors: "निवेशक"
  }
};

function App() {
  const [theme, setTheme] = useState(() => {
    // Check if theme preference is saved in localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage();
  const navT = navTranslations[language];

  useEffect(() => {
    // Update data-theme attribute when theme changes
    document.documentElement.setAttribute('data-theme', theme);
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  const toggleMenu = () => setMenuOpen(open => !open);

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <nav className="navbar">
            <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <img src="/logo.jpg" alt="VENKSEN Logo" style={{ width: '2.2rem', height: '2.2rem', borderRadius: '50%' }} />
              <span style={{ fontWeight: 700, fontSize: '1.3rem', letterSpacing: '1px' }}>VENKSEN</span>
            </div>
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
              ☰
            </button>
            <div className={`nav-links${menuOpen ? ' open' : ''}`}>
              <Link to="/" onClick={() => setMenuOpen(false)}>{navT.about}</Link>
              <Link to="/technology" onClick={() => setMenuOpen(false)}>{navT.technology}</Link>
              <Link to="/team" onClick={() => setMenuOpen(false)}>{navT.team}</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>{navT.contact}</Link>
              <Link to="/investors" onClick={() => setMenuOpen(false)}>{navT.investors}</Link>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <LanguageToggle />
            </div>
          </nav>
          <div className="page-container">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/investors" element={<Investors />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
