import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'CustomBtnConfig', LanguagePT);
  i18next.addResourceBundle('ENG', 'CustomBtnConfig', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'CustomBtnConfig')) {
      i18next.addResourceBundle('PT', 'CustomBtnConfig', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'CustomBtnConfig')) {
      i18next.addResourceBundle('ENG', 'CustomBtnConfig', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'CustomBtnConfig');
      i18next.removeResourceBundle('ENG', 'CustomBtnConfig');
    }) as unknown as void;
  }, []);
};
