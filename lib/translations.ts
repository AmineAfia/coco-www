export type Locale = 'de' | 'en';

export const translations = {
  de: {
    // Hero section
    hero: {
      title: "Nie wieder allein mit deinen Schwangerschaftsfragen",
      subtitle: "Deine persönliche Begleiter für alle Schwangerschaftsfragen. Sofortige Antworten direkt in WhatsApp – keine App, keine Wartezeiten.",
      cta: "Jetzt kostenlos testen"
    },
    // Features section
    features: {
      questionChat: {
        title: "Antworte auf jede Frage, die du hast",
        description: "Egal ob du die Mama oder der Papa bist. Egal wann - Coco beantwortet deine Fragen rund um die Uhr",
        buttonText: "Frage stellen",
        visual: {
          header: "24/7 WhatsApp Chat",
          subtitle: "Sofortige Antworten auf deine Fragen",
          userQuestion: "Ist es normal, dass ich so müde bin in Woche 12?",
          cocoResponse: "Ja, das ist völlig normal! In Woche 12 ist Müdigkeit sehr häufig. Dein Körper arbeitet hart für dein Baby. 💕",
          tip: "Tipp: Mehr Ruhe und Eisen-reiche Ernährung helfen."
        }
      },
      scientificKnowledge: {
        title: "Zugang zu wissenschaftlichem Wissen",
        description: "Erhalte Zugang zu Wissen aus wissenschaftlichen Büchern über Schwangerschaft, ohne stundenlang lesen zu müssen",
        buttonText: "Wissen entdecken",
        visual: {
          header: "Wissenschaftliches Wissen",
          subtitle: "Zugang zu Forschung ohne stundenlang lesen",
          weekTitle: "Entwicklung Woche 12",
          current: "Aktuell",
          description: "Dein Baby ist jetzt so groß wie eine Pflaume und entwickelt sich rasant. Das Herz schlägt bereits 120-160 Mal pro Minute.",
          understood: "85% verstanden",
          studyTag: "Medizinische Studie 2023",
          peerReviewed: "Peer-reviewed"
        }
      },
      weeklyCelebration: {
        title: "Coco feiert jede Woche mit dir",
        description: "Personalisierte Inhalte über die aktuelle Schwangerschaftswoche, die deine Reise begleiten",
        buttonText: "Woche entdecken",
        visual: {
          header: "Wöchentliche Feiern",
          subtitle: "Coco feiert jede Woche mit dir",
          weekTitle: "Woche 16 - Zeit zu feiern!",
          size: "So groß wie eine Avocado 🥑",
          special: "Diese Woche ist besonders!",
          description: "Dein Baby kann jetzt hören und reagiert auf deine Stimme. Zeit für die erste Unterhaltung! 🎵"
        }
      },
      scheduleManagement: {
        title: "Verwalte deinen Zeitplan (Coming Soon)",
        description: "Coco hilft dir dabei, deinen Zeitplan und deine Aufgaben während der gesamten Schwangerschaft zu verwalten",
        buttonText: "Planen starten",
        visual: {
          header: "Zeitplan verwalten",
          subtitle: "Coco hilft dir bei der Planung (Coming Soon)",
          planTitle: "Dein Schwangerschaftsplan",
          week: "Woche 16",
          doctorAppointment: "Arzttermin - 15. Januar",
          ultrasound: "Ultraschall - 22. Januar",
          preparation: "Geburtsvorbereitung"
        }
      }
    },
    // Navbar
    navbar: {
      chatButton: "Chat"
    },
    // Footer
    footer: {
      tagline: "Deine Schwangerschaftsbegleitung",
      stayUpdated: "Bleib auf dem Laufenden",
      newsletterDescription: "Erhalte wöchentliche Schwangerschaftstipps und Updates direkt in dein WhatsApp.",
      emailPlaceholder: "Deine E-Mail-Adresse",
      getUpdates: "Updates erhalten",
      copyright: "Alle Rechte vorbehalten.",
      taglineBottom: "Deine vertrauensvolle Schwangerschaftsbegleitung",
      visitTikTok: "Besuche unseren Tiktok Kanal",
      chatWhatsApp: "Chat mit Coco auf WhatsApp"
    },
    // FAQ
    faq: {
      title: "Häufig gestellte Fragen",
      subtitle: "Alles was Sie über Coco AI wissen müssen - von der Nutzung bis zum Datenschutz",
      questions: [
        {
          id: "how-it-works",
          question: "Wie funktioniert Coco AI?",
          answer: "Coco AI ist eine Begleiter, die über WhatsApp 24/7 Schwangerschaftsberatung anbietet. Sie beantwortet Ihre Fragen, gibt wissenschaftlich fundierte Ratschläge und hilft bei der Planung Ihrer Schwangerschaft. Einfach WhatsApp öffnen und 'Hallo Coco' schreiben!"
        },
        {
          id: "is-free",
          question: "Ist Coco AI kostenlos?",
          answer: "Ja, Coco AI ist vollständig kostenlos verfügbar. Sie können jederzeit über WhatsApp mit Coco chatten und alle Funktionen nutzen, ohne versteckte Kosten oder Abonnements."
        },
        {
          id: "scientific-accuracy",
          question: "Wie wissenschaftlich fundiert sind die Antworten?",
          answer: "Coco AI greift auf aktuelle wissenschaftliche Literatur und Studien zur Schwangerschaft zurück. Alle Antworten basieren auf medizinischen Erkenntnissen und werden regelmäßig aktualisiert, um Ihnen die verlässlichsten Informationen zu bieten."
        },
        {
          id: "privacy",
          question: "Sind meine Daten sicher?",
          answer: "Absolut! Wir nehmen Datenschutz sehr ernst. Alle Gespräche mit Coco AI sind verschlüsselt und werden nicht an Dritte weitergegeben. Ihre Privatsphäre steht an erster Stelle."
        },
        {
          id: "when-to-use",
          question: "Wann sollte ich Coco AI nutzen?",
          answer: "Coco AI ist für alle Schwangerschaftsphasen geeignet - vom ersten Tag bis zur Geburt. Nutzen Sie Coco für Fragen zu Symptomen, Ernährung, Entwicklung Ihres Babys, Terminplanung oder einfach für emotionalen Support."
        },
        {
          id: "replaces-doctor",
          question: "Ersetzt Coco AI meinen Arzt?",
          answer: "Nein, Coco AI ersetzt niemals den Besuch bei Ihrem Arzt oder Ihrer Hebamme. Coco ist eine zusätzliche Unterstützung für alltägliche Fragen und bietet erste Orientierung. Bei medizinischen Bedenken sollten Sie immer einen Arzt konsultieren."
        },
        {
          id: "response-time",
          question: "Wie schnell antwortet Coco AI?",
          answer: "Coco AI antwortet sofort! Die KI ist 24/7 verfügbar und gibt Ihnen innerhalb von Sekunden eine hilfreiche Antwort. Keine Wartezeiten, keine Öffnungszeiten - Coco ist immer da."
        },
        {
          id: "personalization",
          question: "Kann Coco AI sich an meine Schwangerschaft anpassen?",
          answer: "Ja! Coco AI kann sich an Ihre aktuelle Schwangerschaftswoche anpassen und personalisierte Tipps und Informationen geben. Teilen Sie einfach Ihre Schwangerschaftswoche mit, und Coco wird entsprechend beraten."
        }
      ]
    },
    // CTA Banner
    ctaBanner: {
      title: "Bereit für deine Schwangerschaftsreise?",
      description: "Erhalte 24/7 Unterstützung, wissenschaftliches Wissen und personalisierte Begleitung für jede Woche deiner Schwangerschaft. Starte jetzt kostenlos!",
      startNow: "Jetzt kostenlos starten",
      learnMore: "Mehr über Coco erfahren"
    },
    // Meta data
    meta: {
      title: "Ihre Begleiter für eine sorgenfreie Schwangerschaft | 24/7 WhatsApp Beratung",
      description: "getcoco.life bietet 24/7 Schwangerschaftsbegleitung über WhatsApp. Erhalten Sie wissenschaftlich fundierte Antworten, wöchentliche Updates und persönliche Planungshilfe für Ihre Schwangerschaft.",
      keywords: [
        "getcoco.life",
        "getcoco",
        "coco.life",
        "Schwangerschaftsberatung",
        "KI Schwangerschaft",
        "WhatsApp Schwangerschaft", 
        "Schwangerschaftsbegleitung",
        "Schwangerschaftsplanung",
        "AI Schwangerschaft",
        "Schwangerschaft Chatbot",
        "Schwangerschaftsunterstützung",
        "Mutterschaft",
        "Schwangerschaft Tipps",
        "Coco AI",
        "Schwangerschaft",
        "KI-Begleiterin",
        "Begleiter",
        "Begleiterin",
        "WhatsApp Beratung",
        "Schwangerschaftshose",
        "Schwangerschaftshosen",
        "Schwangerschaftsjeans",
        "Schwangerschaftsbekleidung",
        "Umstandsmode",
        "Schwangerschaft Mode",
        "Schwangerschaft Kleidung",
        "Bauchband Hose",
        "Elastische Schwangerschaftshose",
        "Schwangerschaft Arbeitshose",
        "Schwangerschaft Freizeithose",
        "Schwangerschaft Hosen",
        "Schwangerschaft Umstandshose",
        "Schwangerschafts Leggings",
        "Schwangerschaftsbekleidung",
        "Schwangerschaftsbekleidung",
      ]
    }
  },
  en: {
    // Hero section
    hero: {
      title: "Never feel alone with your pregnancy questions again",
      subtitle: "Your personal companion for all pregnancy questions. Instant answers directly in WhatsApp – no app, no waiting times.",
      cta: "Start free trial now"
    },
    // Features section
    features: {
      questionChat: {
        title: "Get answers to every question you have",
        description: "Whether you're the mom or dad. No matter when - Coco answers your questions around the clock",
        buttonText: "Ask a question",
        visual: {
          header: "24/7 WhatsApp Chat",
          subtitle: "Instant answers to your questions",
          userQuestion: "Is it normal that I'm so tired in week 12?",
          cocoResponse: "Yes, that's completely normal! Fatigue is very common in week 12. Your body is working hard for your baby. 💕",
          tip: "Tip: More rest and iron-rich nutrition help."
        }
      },
      scientificKnowledge: {
        title: "Access to scientific knowledge",
        description: "Get access to knowledge from scientific books about pregnancy, without having to read for hours",
        buttonText: "Discover knowledge",
        visual: {
          header: "Scientific Knowledge",
          subtitle: "Access to research without reading for hours",
          weekTitle: "Development Week 12",
          current: "Current",
          description: "Your baby is now the size of a plum and developing rapidly. The heart is already beating 120-160 times per minute.",
          understood: "85% understood",
          studyTag: "Medical Study 2023",
          peerReviewed: "Peer-reviewed"
        }
      },
      weeklyCelebration: {
        title: "Coco celebrates every week with you",
        description: "Personalized content about your current pregnancy week, accompanying your journey",
        buttonText: "Discover week",
        visual: {
          header: "Weekly Celebrations",
          subtitle: "Coco celebrates every week with you",
          weekTitle: "Week 16 - Time to celebrate!",
          size: "As big as an avocado 🥑",
          special: "This week is special!",
          description: "Your baby can now hear and responds to your voice. Time for the first conversation! 🎵"
        }
      },
      scheduleManagement: {
        title: "Manage your schedule (Coming Soon)",
        description: "Coco helps you manage your schedule and tasks throughout your entire pregnancy",
        buttonText: "Start planning",
        visual: {
          header: "Schedule Management",
          subtitle: "Coco helps you with planning (Coming Soon)",
          planTitle: "Your Pregnancy Plan",
          week: "Week 16",
          doctorAppointment: "Doctor appointment - January 15",
          ultrasound: "Ultrasound - January 22",
          preparation: "Birth preparation"
        }
      }
    },
    // Navbar
    navbar: {
      chatButton: "Chat"
    },
    // Footer
    footer: {
      tagline: "Your pregnancy companion",
      stayUpdated: "Stay updated",
      newsletterDescription: "Get weekly pregnancy tips and updates directly in your WhatsApp.",
      emailPlaceholder: "Your email address",
      getUpdates: "Get updates",
      copyright: "All rights reserved.",
      taglineBottom: "Your trusted pregnancy companion",
      visitTikTok: "Visit our TikTok channel",
      chatWhatsApp: "Chat with Coco on WhatsApp"
    },
    // FAQ
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about Coco AI - from usage to privacy",
      questions: [
        {
          id: "how-it-works",
          question: "How does Coco AI work?",
          answer: "Coco AI is a companion that offers 24/7 pregnancy consultation via WhatsApp. She answers your questions, provides scientifically based advice and helps with planning your pregnancy. Simply open WhatsApp and write 'Hello Coco'!"
        },
        {
          id: "is-free",
          question: "Is Coco AI free?",
          answer: "Yes, Coco AI is completely free to use. You can chat with Coco via WhatsApp anytime and use all features without hidden costs or subscriptions."
        },
        {
          id: "scientific-accuracy",
          question: "How scientifically accurate are the answers?",
          answer: "Coco AI draws on current scientific literature and studies on pregnancy. All answers are based on medical knowledge and are regularly updated to provide you with the most reliable information."
        },
        {
          id: "privacy",
          question: "Is my data safe?",
          answer: "Absolutely! We take data protection very seriously. All conversations with Coco AI are encrypted and are not shared with third parties. Your privacy comes first."
        },
        {
          id: "when-to-use",
          question: "When should I use Coco AI?",
          answer: "Coco AI is suitable for all pregnancy phases - from the first day until birth. Use Coco for questions about symptoms, nutrition, your baby's development, appointment planning or simply for emotional support."
        },
        {
          id: "replaces-doctor",
          question: "Does Coco AI replace my doctor?",
          answer: "No, Coco AI never replaces a visit to your doctor or midwife. Coco is additional support for everyday questions and provides initial guidance. For medical concerns, you should always consult a doctor."
        },
        {
          id: "response-time",
          question: "How fast does Coco AI respond?",
          answer: "Coco AI responds immediately! The AI is available 24/7 and gives you a helpful answer within seconds. No waiting times, no opening hours - Coco is always there."
        },
        {
          id: "personalization",
          question: "Can Coco AI adapt to my pregnancy?",
          answer: "Yes! Coco AI can adapt to your current pregnancy week and provide personalized tips and information. Simply share your pregnancy week, and Coco will advise accordingly."
        }
      ]
    },
    // CTA Banner
    ctaBanner: {
      title: "Ready for your pregnancy journey?",
      description: "Get 24/7 support, scientific knowledge and personalized guidance for every week of your pregnancy. Start now for free!",
      startNow: "Start now for free",
      learnMore: "Learn more about Coco"
    },
    // Meta data
    meta: {
      title: "Your companion for a worry-free pregnancy | 24/7 WhatsApp consultation",
      description: "getcoco.life offers 24/7 pregnancy support via WhatsApp. Get scientifically based answers, weekly updates and personal planning help for your pregnancy.",
      keywords: [
        "getcoco.life",
        "getcoco",
        "coco.life",
        "pregnancy consultation",
        "AI pregnancy",
        "WhatsApp pregnancy", 
        "pregnancy support",
        "pregnancy planning",
        "AI pregnancy",
        "pregnancy chatbot",
        "pregnancy assistance",
        "motherhood",
        "pregnancy tips",
        "Coco AI",
        "pregnancy",
        "AI companion",
        "companion",
        "WhatsApp consultation",
        "maternity pants",
        "maternity jeans",
        "maternity clothing",
        "maternity wear",
        "pregnancy mode",
        "pregnancy clothing",
        "belly band pants",
        "elastic maternity pants",
        "maternity work pants",
        "maternity casual pants",
        "maternity pants",
        "maternity leggings",
        "maternity clothing",
        "maternity clothing",
      ]
    }
  }
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export function getLocalizedMetadata(locale: Locale) {
  const t = getTranslations(locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
    keywords: [...t.meta.keywords],
    openGraph: {
      type: "website" as const,
      siteName: "getcoco.life",
      locale: locale === 'de' ? "de_DE" : "en_US",
      url: process.env.NEXT_PUBLIC_APP_URL || 'https://getcoco.life',
      title: t.meta.title,
      description: t.meta.description,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://getcoco.life'}/og-image.png`,
          width: 1200,
          height: 630,
          alt: locale === 'de' ? "getcoco.life - Schwangerschaftsbegleitung" : "getcoco.life - Pregnancy support",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: t.meta.title,
      description: t.meta.description,
      images: [`${process.env.NEXT_PUBLIC_APP_URL || 'https://getcoco.life'}/og-image.png`],
    },
  };
}
