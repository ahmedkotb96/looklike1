import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  const { language, toggleLanguage } = context;

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Key not found, return the key itself for debugging
        return key;
      }
    }

    // If the resolved value is an object with part1 and part2, combine them
    if (value && typeof value === 'object' && 'part1' in value && 'part2' in value) {
      return `${value.part1}${value.part2}`;
    }

    // If it's just a string, return it
    if (typeof value === 'string') {
      return value;
    }

    // Fallback for other unexpected object structures
    return key;
  };

  return {
    language,
    toggleLanguage,
    t,
  };
}

