import type React from 'react';

export const pregnancySupportSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Coco AI",
  "description": "Begleiter für Schwangerschaftsberatung über WhatsApp",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web, WhatsApp",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "provider": {
    "@type": "Organization",
    "name": "Coco AI"
  },
  "featureList": [
    "24/7 Schwangerschaftsberatung",
    "Wissenschaftliche Antworten",
    "Wöchentliche Updates",
    "Planungshilfe"
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie funktioniert Coco AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Coco AI ist eine Begleiterin, die über WhatsApp 24/7 Schwangerschaftsberatung anbietet. Sie beantwortet Fragen, gibt wissenschaftlich fundierte Ratschläge und hilft bei der Planung Ihrer Schwangerschaft."
      }
    },
    {
      "@type": "Question", 
      "name": "Ist Coco AI kostenlos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, Coco AI ist kostenlos verfügbar. Sie können jederzeit über WhatsApp mit Coco chatten und alle Funktionen nutzen."
      }
    },
    {
      "@type": "Question",
      "name": "Wie wissenschaftlich fundiert sind die Antworten?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Coco AI greift auf wissenschaftliche Literatur und Studien zur Schwangerschaft zurück, um Ihnen verlässliche und fundierte Antworten zu geben."
      }
    }
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Coco AI",
  "description": "Begleiter für Schwangerschaftsberatung",
  "url": "https://coco-ai.de",
  "logo": "https://coco-ai.de/coco-logo.png",
  "sameAs": [
    "https://instagram.com/cocoai",
    "https://facebook.com/cocoai",
    "https://youtube.com/cocoai"
  ]
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
