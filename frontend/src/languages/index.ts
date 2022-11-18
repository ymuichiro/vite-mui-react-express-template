import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/languages/_en';
import ja from '@/languages/_ja';
import LanguageDetector from 'i18next-browser-languagedetector';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof ja;
  }
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en,
      ja,
    },
    fallbackLng: 'en',
    detection: {
      order: ['navigator', 'querystring', 'cookie', 'localStorage', 'sessionStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .catch(console.error);

export enum Languages {
  'en' = 'en',
  'ja' = 'ja',
}

export default i18n;
