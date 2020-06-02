import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'Form', LanguagePT);
  i18next.addResourceBundle('ENG', 'Form', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'Form')) {
      i18next.addResourceBundle('PT', 'Form', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'Form')) {
      i18next.addResourceBundle('ENG', 'Form', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'Form');
      i18next.removeResourceBundle('ENG', 'Form');
    }) as unknown as void;
  }, []);
};
