import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'DrawerConfig', LanguagePT);
  i18next.addResourceBundle('ENG', 'DrawerConfig', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'DrawerConfig')) {
      i18next.addResourceBundle('PT', 'DrawerConfig', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'DrawerConfig')) {
      i18next.addResourceBundle('ENG', 'DrawerConfig', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'DrawerConfig');
      i18next.removeResourceBundle('ENG', 'DrawerConfig');
    }) as unknown as void;
  }, []);
};
