import React from 'react';
import { useLanguage, LanguageOptions } from '../contexts/LanguageContext';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const translations = LanguageOptions[language];

  return (
    <div>
      <button onClick={toggleLanguage}>{translations.toggleLanguage}</button>
      <p>{translations.currentLanguage.replace('{{language}}', language)}</p>
    </div>
  );
};

export default Header;