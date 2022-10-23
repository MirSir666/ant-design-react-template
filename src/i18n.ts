import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';
import translationCN from './locales/cn/translation.json';

const resources = {
  cn: {
    translation: translationCN,
  },
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'cn',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
