import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'LoginBtnConfig', LanguagePT);
  i18next.addResourceBundle('ENG', 'LoginBtnConfig', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'LoginBtnConfig')) {
      i18next.addResourceBundle('PT', 'LoginBtnConfig', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'LoginBtnConfig')) {
      i18next.addResourceBundle('ENG', 'LoginBtnConfig', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'LoginBtnConfig');
      i18next.removeResourceBundle('ENG', 'LoginBtnConfig');
    }) as unknown as void;
  }, []);
};
