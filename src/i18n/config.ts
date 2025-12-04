import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './local/en.json';
import es from './local/es.json';

i18n
  .use(LanguageDetector) // Detect the browser language
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
    fallbackLng: 'en', // Default language
    debug: false,
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
