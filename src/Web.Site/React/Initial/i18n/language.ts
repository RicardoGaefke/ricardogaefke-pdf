// eslint-disable-next-line no-unused-vars
import i18n, { TFunction, Module } from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ENG: {},
  PT: {},
};

export default i18n
  .use(initReactI18next as Module)
  .init({
    lng: 'ENG',
    fallbackLng: 'ENG',
    resources,
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    react: {
      bindI18n: 'languageChanged',
    },
  })
  .then((t): TFunction => t);
