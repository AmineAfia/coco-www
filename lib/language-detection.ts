import { headers } from 'next/headers';
import type { Locale } from './translations';

export async function detectLanguage(): Promise<Locale> {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');
  
  if (!acceptLanguage) {
    return 'de'; // Default to German
  }
  
  // Parse Accept-Language header
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [locale, qValue] = lang.trim().split(';q=');
      return {
        locale: locale.trim(),
        quality: qValue ? Number.parseFloat(qValue) : 1.0
      };
    })
    .sort((a, b) => b.quality - a.quality);
  
  // Check for German language preference
  for (const { locale } of languages) {
    if (locale.startsWith('de')) {
      return 'de';
    }
  }
  
  // Default to English for all other languages
  return 'en';
}

export function getLanguageFromPathname(pathname: string): Locale | null {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === 'de' || firstSegment === 'en') {
    return firstSegment as Locale;
  }
  
  return null;
}
