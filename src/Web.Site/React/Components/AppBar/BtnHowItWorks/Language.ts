import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'BtnHowItWorks', LanguagePT);
  i18next.addResourceBundle('ENG', 'BtnHowItWorks', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'BtnHowItWorks')) {
      i18next.addResourceBundle('PT', 'BtnHowItWorks', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'BtnHowItWorks')) {
      i18next.addResourceBundle('ENG', 'BtnHowItWorks', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'BtnHowItWorks');
      i18next.removeResourceBundle('ENG', 'BtnHowItWorks');
    }) as unknown as void;
  }, []);
};
