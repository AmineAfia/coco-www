"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { StructuredData, faqSchema } from "@/components/seo/structured-data";
import { usePostHog } from "@/lib/use-posthog";

const faqData = [
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
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const { track } = usePostHog();

  const toggleItem = (id: string) => {
    const isOpening = !openItems.includes(id);
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
    
    // Track FAQ interactions
    track('faq_toggle', {
      faq_id: id,
      action: isOpening ? 'open' : 'close',
      question: faqData.find(item => item.id === id)?.question
    });
  };

  return (
    <>
      <StructuredData schema={faqSchema} />
      <section id="faq" className="w-full py-16 xs:py-20 sm:py-24 md:py-32 px-4 xs:px-6 sm:px-8 bg-warm-gradient">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 xs:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl heading-hero text-foreground mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-muted-foreground text-lg xs:text-xl max-w-3xl mx-auto text-body-premium">
              Alles was Sie über Coco AI wissen müssen - von der Nutzung bis zum Datenschutz
            </p>
          </div>

          <div className="space-y-3">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="relative group"
              >
                {/* Warm minimalist background */}
                <div className="absolute inset-0 bg-gradient-to-br from-coral-50 to-amber-50 rounded-xl shadow-md shadow-coral-200/20" />
                
                {/* Main card content */}
                <div className="relative bg-coral-50/80 backdrop-blur-sm rounded-xl p-4 border border-coral-200/50 overflow-hidden hover-lift transition-warm">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left flex items-center justify-between hover:bg-coral-100/50 transition-warm focus-warm rounded-lg p-1"
                    aria-expanded={openItems.includes(item.id)}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <h3 className="text-base font-semibold text-coral-900 pr-3 text-body-emphasis">
                      {item.question}
                    </h3>
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="h-4 w-4 text-coral-600 flex-shrink-0 transition-warm" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-coral-600 flex-shrink-0 transition-warm" />
                    )}
                  </button>
                  
                  {openItems.includes(item.id) && (
                    <div
                      id={`faq-answer-${item.id}`}
                      className="mt-3 pt-3 border-t border-coral-200/60"
                    >
                      <p className="text-coral-800 leading-relaxed text-sm">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-16">
            <div className="bg-card card-border-coral rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4 heading-section">
                Haben Sie weitere Fragen?
              </h3>
              <p className="text-muted-foreground mb-6 text-body-premium">
                Coco AI beantwortet gerne alle Ihre Schwangerschaftsfragen - 24/7 über WhatsApp
              </p>
              <a
                href="https://wa.me/+15558876420?text=Hallo%20Coco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 btn-primary rounded-full text-body-emphasis focus-warm"
              >
                Jetzt mit Coco chatten
              </a>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default FAQ;