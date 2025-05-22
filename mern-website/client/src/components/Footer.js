import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles.css';

const translations = {
  en: {
    getInTouch: "Get In Touch",
    mainPages: "Main Pages",
    contactInfo: "Contact Info",
    investmentInfo: "For investment and business inquiries please contact:",
    about: "About",
    team: "Team",
    contact: "Contact",
    investors: "Investors"
  },
  hi: {
    getInTouch: "संपर्क करें",
    mainPages: "मुख्य पृष्ठ",
    contactInfo: "संपर्क जानकारी",
    investmentInfo: "निवेश और व्यवसाय संबंधित जानकारी के लिए कृपया संपर्क करें:",
    about: "हमारे बारे में",
    team: "टीम",
    contact: "संपर्क",
    investors: "निवेशक"
  }
};

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-section">
        {/* You can replace this with your logo if you have one */}
        <div className="footer-logo">
          <img src="/logo.jpg" alt="VENKSEN Logo" className="footer-logo-icon" style={{ width: '2.2rem', height: '2.2rem', borderRadius: '50%' }} />
          <div>
            <div className="footer-company">VENKSEN</div>
            <div className="footer-tagline">Private Limited</div>
          </div>
        </div>
        <div className="footer-contact">
          <div><b>{t.getInTouch}</b></div>
          <div>
            <span role="img" aria-label="phone">📞</span> 9441845502
          </div>
          <div>
            <span role="img" aria-label="email">✉️</span>venksen@gmail.com
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-title">{t.mainPages}</div>
        <ul className="footer-links">
          <li>{t.about}</li>
          <li>{t.team}</li>
          <li>{t.contact}</li>
          <li>{t.investors}</li>
        </ul>
      </div>
      <div className="footer-section">
        <div className="footer-title">{t.contactInfo}</div>
        <div>
          {t.investmentInfo}
          <br /><b>VENKSEN PRIVATE LIMITED</b>
          <br /><span role="img" aria-label="location">📍</span> Plot No.10, Kadapa Road, Muddanur,
          <br />Muddanur, Cuddapah- 516380,
          <br />Andhra Pradesh
        </div>
      </div>
    </footer>
  );
};

export default Footer;
