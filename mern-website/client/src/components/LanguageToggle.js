import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button 
      onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
      className="lang-btn"
    >
      {language === 'en' ? 'हिंदी' : 'English'}
    </button>
  );
};

export default LanguageToggle; 