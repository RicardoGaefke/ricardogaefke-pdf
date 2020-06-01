import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'LanguageConfig', LanguagePT);
  i18next.addResourceBundle('ENG', 'LanguageConfig', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'LanguageConfig')) {
      i18next.addResourceBundle('PT', 'LanguageConfig', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'LanguageConfig')) {
      i18next.addResourceBundle('ENG', 'LanguageConfig', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'LanguageConfig');
      i18next.removeResourceBundle('ENG', 'LanguageConfig');
    }) as unknown as void;
  }, []);
};
