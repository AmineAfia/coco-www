"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { StructuredData, getFaqSchema } from "@/components/seo/structured-data";
import { usePostHog } from "@/lib/use-posthog";
import { getTranslations, type Locale } from "@/lib/translations";

interface FAQProps {
  locale: Locale;
}

const FAQ = ({ locale }: FAQProps) => {
  const t = getTranslations(locale);
  const faqData = t.faq.questions;
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
      <StructuredData schema={getFaqSchema(locale)} />
      <section id="faq" className="w-full py-16 xs:py-20 sm:py-24 md:py-32 px-4 xs:px-6 sm:px-8 bg-warm-gradient">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 xs:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl heading-hero text-foreground mb-4">
              {t.faq.title}
            </h2>
            <p className="text-muted-foreground text-lg xs:text-xl max-w-3xl mx-auto text-body-premium">
              {t.faq.subtitle}
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