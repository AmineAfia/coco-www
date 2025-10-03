"use client";

import { Heart, Baby, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { usePostHog } from "@/lib/use-posthog";
import { getTranslations, type Locale } from "@/lib/translations";

interface CTABannerProps {
  locale: Locale;
}

export default function CTABanner({ locale }: CTABannerProps) {
  const t = getTranslations(locale);
  const { track } = usePostHog();

  const handleWhatsAppClick = () => {
    track('cta_whatsapp_click', {
      location: 'cta_banner',
      button_text: t.ctaBanner.startNow,
      target: 'whatsapp'
    });
  };

  const handleLearnMoreClick = () => {
    track('cta_learn_more_click', {
      location: 'cta_banner',
      button_text: t.ctaBanner.learnMore,
      target: 'features_section'
    });
  };

  return (
    <div className="px-4 xs:px-6 sm:px-8">
      <div className="relative group my-16 xs:my-20 sm:my-24 md:my-32 w-full max-w-4xl mx-auto">
        {/* Warm minimalist background */}
        <div className="absolute inset-0 bg-gradient-to-br from-coral-50 to-amber-50 rounded-2xl shadow-lg shadow-coral-200/30" />
        
        {/* Main card content */}
        <div className="relative bg-coral-50/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-coral-200/50 overflow-hidden hover-lift transition-warm">
          {/* Grid pattern in bottom right */}
          <AnimatedGridPattern
            numSquares={20}
            maxOpacity={0.08}
            duration={3}
            className={cn(
              "mask-[radial-gradient(300px_circle_at_bottom_right,white,rgba(255,255,255,0.4),transparent)]",
              "absolute bottom-0 right-0 w-[400px] h-[300px]"
            )}
          />
          <div className="relative z-10 flex flex-col gap-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-12 h-12 bg-coral-gradient rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-sage-gradient rounded-xl flex items-center justify-center">
                <Baby className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-coral-gradient rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl xs:text-4xl sm:text-5xl font-playfair font-semibold text-coral-900">
              {t.ctaBanner.title}
            </h3>
            <p className="text-coral-800 text-lg xs:text-xl max-w-2xl mx-auto leading-relaxed">
              {t.ctaBanner.description}
            </p>
          </div>
          <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 xs:gap-6">
            <Button
              size="lg"
              className="btn-primary rounded-full text-base xs:text-lg px-6 xs:px-8 py-3 xs:py-4 font-medium focus-warm"
              onClick={() => {
                handleWhatsAppClick();
                window.open("https://wa.me/+15558876420?text=Hallo%20Coco", "_blank", "noopener,noreferrer");
              }}
            >
              {t.ctaBanner.startNow}
              <MessageCircle className="h-4! w-4! xs:!h-5 xs:!w-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base xs:text-lg px-6 xs:px-8 py-3 xs:py-4 font-medium border-coral-200/60 hover:bg-coral-100/50 hover:border-coral-300/60 focus-warm transition-all duration-300"
              onClick={() => {
                handleLearnMoreClick();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t.ctaBanner.learnMore}
              <Heart className="h-4! w-4! xs:!h-5 xs:!w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
