import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import LogoCloud from "./logo-cloud";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] flex flex-col items-center py-16 xs:py-20 sm:py-24 md:py-32 px-4 xs:px-6 sm:px-8 bg-warm-gradient">
      <div className="flex items-center justify-center w-full">
        <div className="text-center max-w-5xl">
          {/* <Badge className="bg-primary rounded-full py-1 border-none">
            v1.0.0 is available now! 🚀
          </Badge> */}
          <h1 className="mt-4 xs:mt-6 sm:mt-8 max-w-[30ch] text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold !leading-[1.1] tracking-tight text-foreground">
            Begleitet und unterstützt auf Ihrem Weg zur Mutterschaft
          </h1>
          <p className="mt-6 xs:mt-8 sm:mt-10 max-w-[70ch] text-lg xs:text-xl sm:text-2xl text-muted-foreground font-inter leading-relaxed">
            Ihre KI-Begleiterin für eine sorgenfreie Schwangerschaft - mit sofortiger Beratung, individueller Planung und verlässlicher Unterstützung rund um die Uhr.
          </p>
          <div className="mt-12 xs:mt-14 sm:mt-16 md:mt-20 flex flex-col sm:flex-row items-center sm:justify-center gap-4 xs:gap-6">
            <Button
              size="lg"
              className="w-full sm:w-auto btn-primary rounded-full text-base xs:text-lg px-6 xs:px-8 py-3 xs:py-4 font-medium"
              asChild
            >
              <a 
                href="https://wa.me/15558876420" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Auf WhatsApp chatten <ArrowUpRight className="!h-4 !w-4 xs:!h-5 xs:!w-5 ml-2" />
              </a>
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </Button> */}
          </div>
        </div>
      </div>
      {/* <LogoCloud className="mt-24 max-w-3xl mx-auto" /> */}
    </div>
  );
};

export default Hero;
