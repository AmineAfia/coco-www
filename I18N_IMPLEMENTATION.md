# Internationalization (i18n) Implementation

This document describes the internationalization setup for the getcoco.life website, supporting German and English languages.

## Overview

The website now supports:
- **German (de)**: Default language, shown when user's browser is set to German
- **English (en)**: Fallback language for all other browsers

## Implementation Details

### 1. Next.js Configuration

The `next.config.ts` file has been updated with i18n configuration:

```typescript
i18n: {
  locales: ['de', 'en'],
  defaultLocale: 'de',
  localeDetection: true,
}
```

### 2. Middleware

A middleware (`middleware.ts`) handles automatic language detection and routing:
- Detects user's browser language from `Accept-Language` header
- Redirects to appropriate locale path (`/de` or `/en`)
- Skips static files and API routes

### 3. Translation System

#### Translation Files (`lib/translations.ts`)
- Centralized translation management
- Type-safe translations with TypeScript
- Separate translations for German and English
- Includes metadata for SEO (titles, descriptions, keywords)

#### Language Detection (`lib/language-detection.ts`)
- Server-side language detection from headers
- Fallback to German as default
- Support for quality values in Accept-Language header

### 4. App Structure

```
app/
├── layout.tsx                 # Root layout (redirects)
├── page.tsx                   # Root page (redirects)
└── [locale]/
    ├── layout.tsx             # Localized layout with metadata
    └── page.tsx               # Localized home page
```

### 5. Component Updates

Components now accept a `locale` prop and use translations:

```typescript
interface ComponentProps {
  locale: Locale;
}

const Component = ({ locale }: ComponentProps) => {
  const t = getTranslations(locale);
  return <div>{t.hero.title}</div>;
};
```

## How It Works

1. **User visits the site** (e.g., `https://getcoco.life`)
2. **Middleware detects language** from browser's `Accept-Language` header
3. **Automatic redirect** to appropriate locale:
   - German browsers → `/de`
   - All others → `/en`
4. **Components render** with appropriate translations
5. **SEO metadata** is localized for each language

## Supported Languages

### German (de)
- Default language
- Triggered when browser language starts with "de"
- Full translation coverage

### English (en)
- Fallback language
- Triggered for all non-German browsers
- Complete English translations

## Adding New Translations

To add new translatable content:

1. Add to `lib/translations.ts`:
```typescript
export const translations = {
  de: {
    newSection: {
      title: "German title",
      description: "German description"
    }
  },
  en: {
    newSection: {
      title: "English title", 
      description: "English description"
    }
  }
}
```

2. Use in components:
```typescript
const t = getTranslations(locale);
return <h1>{t.newSection.title}</h1>;
```

## Testing

### Manual Testing
1. Set browser language to German → should show German content
2. Set browser language to English → should show English content
3. Set browser language to French → should show English content (fallback)

### Development
```bash
npm run dev
```

Visit:
- `http://localhost:3000` (auto-redirects based on browser language)
- `http://localhost:3000/de` (German version)
- `http://localhost:3000/en` (English version)

## SEO Considerations

- Each locale has its own metadata
- OpenGraph and Twitter cards are localized
- Canonical URLs are properly set
- Language-specific keywords for better search visibility

## Future Enhancements

- Add more languages (French, Spanish, etc.)
- Implement language switcher component
- Add RTL support for Arabic/Hebrew
- Implement dynamic imports for translation files
- Add pluralization support
