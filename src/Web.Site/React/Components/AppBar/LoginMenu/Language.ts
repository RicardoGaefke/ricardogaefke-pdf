import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'LoginMenu', LanguagePT);
  i18next.addResourceBundle('ENG', 'LoginMenu', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'LoginMenu')) {
      i18next.addResourceBundle('PT', 'LoginMenu', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'LoginMenu')) {
      i18next.addResourceBundle('ENG', 'LoginMenu', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'LoginMenu');
      i18next.removeResourceBundle('ENG', 'LoginMenu');
    }) as unknown as void;
  }, []);
};
