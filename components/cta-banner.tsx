import { Heart, Baby, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function CTABanner() {
  return (
    <div className="px-4 xs:px-6 sm:px-8">
      <div className="relative overflow-hidden my-16 xs:my-20 sm:my-24 md:my-32 w-full bg-card text-foreground max-w-screen-lg mx-auto rounded-2xl py-10 md:py-16 px-6 md:px-14 border border-border/50 shadow-soft-lg hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300 group">
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-coral/10 to-sage/10 rounded-2xl" />
        {/* Coral accent line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-coral-gradient rounded-full" />
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.05}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.3),transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.05}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_top_left,white,rgba(255,255,255,0.3),transparent)]",
            "inset-x-0 inset-y-0 h-[200%] skew-y-12"
          )}
        />
        <div className="relative z-10 flex flex-col gap-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-coral group-hover:scale-110 transition-transform duration-300" />
            <Baby className="w-8 h-8 text-sage group-hover:scale-110 transition-transform duration-300" />
            <MessageCircle className="w-8 h-8 text-coral group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-4xl xs:text-5xl sm:text-6xl font-playfair font-semibold text-foreground group-hover:text-coral/90 transition-colors duration-300">
            Bereit für deine Schwangerschaftsreise?
          </h3>
          <p className="mt-2 text-base xs:text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Erhalte 24/7 Unterstützung, wissenschaftliches Wissen und personalisierte Begleitung 
            für jede Woche deiner Schwangerschaft. Starte jetzt kostenlos!
          </p>
        </div>
        <div className="relative z-10 mt-12 xs:mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 xs:gap-6">
          <Button
            size="lg"
            className="w-full sm:w-auto btn-primary rounded-full text-base xs:text-lg px-8 xs:px-10 py-4 xs:py-5 font-medium focus-warm hover:scale-105 hover:shadow-soft-lg transition-all duration-300 group-hover:shadow-soft-lg"
            asChild
          >
            <a 
              href="https://wa.me/+15558876420?text=Hallo%20Coco" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Jetzt kostenlos starten
              <MessageCircle className="!h-4 !w-4 xs:!h-5 xs:!w-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto rounded-full text-base xs:text-lg px-6 xs:px-8 py-3 xs:py-4 font-medium shadow-none border-coral/30 hover:bg-coral/5 hover:border-coral/50 hover:scale-105 focus-warm transition-all duration-300"
            asChild
          >
            <a href="#features">
              Mehr über Coco erfahren
              <Heart className="!h-4 !w-4 xs:!h-5 xs:!w-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
