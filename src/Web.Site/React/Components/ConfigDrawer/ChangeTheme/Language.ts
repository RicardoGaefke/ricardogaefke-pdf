import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'ThemeConfig', LanguagePT);
  i18next.addResourceBundle('ENG', 'ThemeConfig', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'ThemeConfig')) {
      i18next.addResourceBundle('PT', 'ThemeConfig', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'ThemeConfig')) {
      i18next.addResourceBundle('ENG', 'ThemeConfig', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'ThemeConfig');
      i18next.removeResourceBundle('ENG', 'ThemeConfig');
    }) as unknown as void;
  }, []);
};
