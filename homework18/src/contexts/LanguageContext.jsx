// import { createContext, useContext, useMemo, useState } from "react"
import React, { createContext, useState, useContext, useEffect } from 'react';

// Define your language options
export const LanguageOptions = {
  en: {
    toggleLanguage: 'Toggle Language',
    currentLanguage: 'Current Language: {{language}}',
    name: 'User',
    todoInput: 'Add Task',
    addBtn: 'Add Task',
    taskFor: "Todo For",
    deadline: "Deadline",
    todoStatus: 'Todo Status',
    markDone: 'Mark As Done',
    markIncomplete: 'Mark As Incomplete',
    deleteBtn: 'Delete Todo',
    editBtn: "Edit Todo",

  },
  geo: {
    toggleLanguage: 'შეცვალე ენა',
    currentLanguage: 'ამჟამინდელი ენა : {{language}}',
    name: 'იუზერი',
    todoInput: 'დაამატეთ დავალება',
    addBtn: 'დამატება',
    taskFor: "დავალება ეკუთვნის",
    deadline: "ვადა",
    todoStatus: 'დავალების სტატუსი',
    markDone: 'შესრულებულია',
    markIncomplete: 'შეუსრულებელია',
    deleteBtn: 'წაშლა',
    editBtn: "მონაცემების განახლება",
  },
};

const LanguageContext = createContext(null);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'geo' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguage };
