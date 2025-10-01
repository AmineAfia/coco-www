import React from "react";
import { Star, Quote } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Sarah M.",
    location: "München",
    week: "Schwangerschaftswoche 24",
    rating: 5,
    text: "Coco AI hat mir in den ersten Wochen so viel Sicherheit gegeben! Als Erstgebärende hatte ich so viele Fragen und Coco hat immer sofort geantwortet. Besonders die wöchentlichen Updates sind wunderbar.",
    highlight: "Sofortige Antworten"
  },
  {
    id: "testimonial-2", 
    name: "Anna K.",
    location: "Berlin",
    week: "Schwangerschaftswoche 18",
    rating: 5,
    text: "Die wissenschaftlich fundierten Antworten von Coco AI sind genau das, was ich gesucht habe. Ich kann jederzeit nachfragen, ohne mir Sorgen zu machen, ob die Informationen korrekt sind.",
    highlight: "Wissenschaftlich fundiert"
  },
  {
    id: "testimonial-3",
    name: "Lisa R.",
    location: "Hamburg", 
    week: "Schwangerschaftswoche 32",
    rating: 5,
    text: "Coco AI hilft mir bei der Planung meiner Schwangerschaft und erinnert mich an wichtige Termine. Die personalisierten Tipps sind genau auf meine Situation zugeschnitten.",
    highlight: "Personalisierte Planung"
  },
  {
    id: "testimonial-4",
    name: "Maria S.",
    location: "Köln",
    week: "Schwangerschaftswoche 12",
    rating: 5,
    text: "Als berufstätige Mutter schätze ich es sehr, dass Coco AI 24/7 verfügbar ist. Ich kann auch nachts meine Fragen stellen und bekomme sofort eine hilfreiche Antwort.",
    highlight: "24/7 verfügbar"
  },
  {
    id: "testimonial-5",
    name: "Julia W.",
    location: "Frankfurt",
    week: "Schwangerschaftswoche 28",
    rating: 5,
    text: "Coco AI ist wie eine vertrauensvolle Freundin, die immer da ist. Die Antworten sind einfühlsam und trotzdem fachlich korrekt. Ich fühle mich so gut begleitet!",
    highlight: "Vertrauensvolle Begleitung"
  },
  {
    id: "testimonial-6",
    name: "Nina T.",
    location: "Stuttgart",
    week: "Schwangerschaftswoche 20",
    rating: 5,
    text: "Die WhatsApp-Integration ist perfekt! Ich nutze Coco AI direkt in meinem gewohnten Messenger. So einfach und praktisch. Kann ich nur empfehlen!",
    highlight: "WhatsApp Integration"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-16 xs:py-20 sm:py-24 md:py-32 px-4 xs:px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 xs:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-playfair font-semibold text-foreground mb-4">
            Was unsere Nutzerinnen sagen
          </h2>
          <p className="text-muted-foreground text-lg xs:text-xl max-w-3xl mx-auto">
            Über 1000+ Schwangere vertrauen bereits auf Coco AI für ihre tägliche Begleitung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={`star-${testimonial.id}-${i}`} className="w-4 h-4 fill-coral-direct text-coral-direct" />
                ))}
              </div>
              
              <div className="mb-4">
                <Quote className="w-6 h-6 text-coral-direct mb-2" />
                <p className="text-muted-foreground leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <div className="w-full h-full bg-coral-gradient rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-xs text-coral-direct">{testimonial.week}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <span className="inline-block bg-coral-direct/10 text-coral-direct px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-muted/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Bereit, Teil unserer Community zu werden?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schließen Sie sich über 1000+ Schwangeren an, die bereits von Coco AI profitieren
            </p>
            <a
              href="https://wa.me/+15558876420?text=Hallo%20Coco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-coral-direct text-white rounded-full font-medium hover:bg-coral-direct/90 transition-colors text-lg"
            >
              Jetzt kostenlos starten
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;