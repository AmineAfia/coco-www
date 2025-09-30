import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] flex flex-col items-center py-16 xs:py-20 sm:py-24 md:py-32 px-4 xs:px-6 sm:px-8 bg-warm-gradient">
      <div className="flex items-center justify-center w-full">
        <div className="text-center max-w-5xl">
          {/* <Badge className="bg-primary rounded-full py-1 border-none">
            v1.0.0 is available now! 🚀
          </Badge> */}
          <h1 className="mt-4 xs:mt-6 sm:mt-8 max-w-[30ch] mx-auto text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold !leading-[1.1] tracking-tight text-foreground">
            Ihre Schwangerschaft unterstützt rund um die Uhr
          </h1>
          <p className="mt-6 xs:mt-8 sm:mt-10 max-w-[70ch] mx-auto text-base xs:text-lg sm:text-xl text-muted-foreground font-inter leading-relaxed">
            Die Unterstützung, die du brauchst. Antworte auf Fragen, Empfehlungen, plannung hilfe und mehr. 
          </p>
          <div className="mt-12 xs:mt-14 sm:mt-16 md:mt-20 flex flex-col sm:flex-row items-center sm:justify-center gap-4 xs:gap-6">
            <Button
              size="lg"
              className="w-full sm:w-auto btn-primary rounded-full text-base xs:text-lg px-6 xs:px-8 py-3 xs:py-4 font-medium"
              asChild
            >
              <a 
                href="https://wa.me/+15558876420?text=Hallo%20Coco" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Kostenlos anfangen {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg className="!h-4 !w-4 xs:!h-5 xs:!w-5 ml-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
