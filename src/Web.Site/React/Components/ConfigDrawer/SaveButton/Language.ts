import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'ButtonCloseConfig', LanguagePT);
  i18next.addResourceBundle('ENG', 'ButtonCloseConfig', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'ButtonCloseConfig')) {
      i18next.addResourceBundle('PT', 'ButtonCloseConfig', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'ButtonCloseConfig')) {
      i18next.addResourceBundle('ENG', 'ButtonCloseConfig', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'ButtonCloseConfig');
      i18next.removeResourceBundle('ENG', 'ButtonCloseConfig');
    }) as unknown as void;
  }, []);
};
