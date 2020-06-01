import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', '404Main', LanguagePT);
  i18next.addResourceBundle('ENG', '404Main', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', '404Main')) {
      i18next.addResourceBundle('PT', '404Main', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', '404Main')) {
      i18next.addResourceBundle('ENG', '404Main', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', '404Main');
      i18next.removeResourceBundle('ENG', '404Main');
    }) as unknown as void;
  }, []);
};
