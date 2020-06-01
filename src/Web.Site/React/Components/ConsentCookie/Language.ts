import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('ENG', 'ConsentCookie', LanguageENG);
  i18next.addResourceBundle('PT', 'ConsentCookie', LanguagePT);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'ConsentCookie')) {
      i18next.addResourceBundle('PT', 'ConsentCookie', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'ConsentCookie')) {
      i18next.addResourceBundle('ENG', 'ConsentCookie', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'ConsentCookie');
      i18next.removeResourceBundle('ENG', 'ConsentCookie');
    }) as unknown as void;
  }, []);
};
