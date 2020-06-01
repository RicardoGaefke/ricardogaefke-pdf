import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'PolicyMain', LanguagePT);
  i18next.addResourceBundle('ENG', 'PolicyMain', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'PolicyMain')) {
      i18next.addResourceBundle('PT', 'PolicyMain', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'PolicyMain')) {
      i18next.addResourceBundle('ENG', 'PolicyMain', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'PolicyMain');
      i18next.removeResourceBundle('ENG', 'PolicyMain');
    }) as unknown as void;
  }, []);
};
