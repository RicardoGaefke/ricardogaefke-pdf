import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'FileNotFound', LanguagePT);
  i18next.addResourceBundle('ENG', 'FileNotFound', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'FileNotFound')) {
      i18next.addResourceBundle('PT', 'FileNotFound', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'FileNotFound')) {
      i18next.addResourceBundle('ENG', 'FileNotFound', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'FileNotFound');
      i18next.removeResourceBundle('ENG', 'FileNotFound');
    }) as unknown as void;
  }, []);
};
