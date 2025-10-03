import type React from 'react';
import { getTranslations, type Locale } from '@/lib/translations';

export const getPregnancySupportSchema = (locale: Locale) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "getcoco.life",
    "description": locale === 'de' 
      ? "Begleiter für Schwangerschaftsberatung über WhatsApp"
      : "Pregnancy consultation companion via WhatsApp",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web, WhatsApp",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": locale === 'de' ? "EUR" : "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "getcoco.life"
    },
    "featureList": locale === 'de' 
      ? [
          "24/7 Schwangerschaftsberatung",
          "Wissenschaftliche Antworten",
          "Wöchentliche Updates",
          "Planungshilfe"
        ]
      : [
          "24/7 pregnancy consultation",
          "Scientific answers",
          "Weekly updates",
          "Planning assistance"
        ]
  };
};

export const getFaqSchema = (locale: Locale) => {
  const t = getTranslations(locale);
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.questions.slice(0, 3).map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };
};

export const getOrganizationSchema = (locale: Locale) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "getcoco.life",
    "description": locale === 'de' 
      ? "Begleiter für Schwangerschaftsberatung"
      : "Pregnancy consultation companion",
    "url": "https://getcoco.life",
    "logo": "https://getcoco.life/coco-logo.png",
    "sameAs": [
      "https://instagram.com/cocoai",
      "https://facebook.com/cocoai",
      "https://youtube.com/cocoai"
    ]
  };
};

interface StructuredDataProps {
  schema: object;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Structured data requires dangerouslySetInnerHTML
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
