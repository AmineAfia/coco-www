import { Button } from "@/components/ui/button";
import { MessageCircle, BookOpen, Calendar, CheckSquare, Clock, Users, Heart, Baby, Stethoscope, BookOpenCheck, Sparkles, Target } from "lucide-react";
import React from "react";

const features = [
  {
    id: "question-chat",
    title: "Antworte auf jede Frage, die du hast",
    description: "Egal ob du die Mama oder der Papa bist. Egal wann - Coco beantwortet deine Fragen rund um die Uhr",
    buttonText: "Frage stellen",
    buttonAction: "https://wa.me/+15558876420?text=Hallo%20Coco",
    icon: MessageCircle,
    layout: "left" as const,
    visualType: "chat" as const,
  },
  {
    id: "scientific-knowledge",
    title: "Zugang zu wissenschaftlichem Wissen",
    description: "Erhalte Zugang zu Wissen aus wissenschaftlichen Büchern über Schwangerschaft, ohne stundenlang lesen zu müssen",
    buttonText: "Wissen entdecken",
    buttonAction: "https://wa.me/+15558876420?text=Wissen%20entdecken",
    icon: BookOpen,
    layout: "right" as const,
    visualType: "book" as const,
  },
  {
    id: "weekly-celebration",
    title: "Coco feiert jede Woche mit dir",
    description: "Personalisierte Inhalte über die aktuelle Schwangerschaftswoche, die deine Reise begleiten",
    buttonText: "Woche entdecken",
    buttonAction: "https://wa.me/+15558876420?text=Woche%20entdecken",
    icon: Calendar,
    layout: "left" as const,
    visualType: "celebration" as const,
  },
  {
    id: "schedule-management",
    title: "Verwalte deinen Zeitplan (Coming Soon)",
    description: "Coco hilft dir dabei, deinen Zeitplan und deine Aufgaben während der gesamten Schwangerschaft zu verwalten",
    buttonText: "Planen starten",
    buttonAction: "https://wa.me/+15558876420?text=Planen%20starten",
    icon: CheckSquare,
    layout: "right" as const,
    visualType: "schedule" as const,
  },
];

// Visual Components
const QuestionChatVisual = () => {
  return (
    <div className="bg-card card-border-coral rounded-xl p-6 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-green-500 rounded-full" />
        <span className="text-sm font-medium text-muted-foreground">24/7 verfügbar</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
            <Users className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="bg-muted-direct rounded-2xl rounded-tl-sm p-3 max-w-xs">
            <p className="text-sm text-foreground">Ist es normal, dass ich so müde bin?</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 justify-end">
          <div className="bg-coral-direct rounded-2xl rounded-tr-sm p-3 max-w-xs">
            <p className="text-sm text-white">Ja, das ist völlig normal! Müdigkeit ist eines der häufigsten Symptome...</p>
          </div>
          <div className="w-8 h-8 bg-coral-direct rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
            <Baby className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="bg-muted-direct rounded-2xl rounded-tl-sm p-3 max-w-xs">
            <p className="text-sm text-foreground">Wann sollte ich zum Arzt gehen?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScientificKnowledgeVisual = () => {
  return (
    <div className="bg-card card-border-sage rounded-xl p-6 space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <BookOpen className="w-6 h-6 text-coral-direct" />
        <span className="font-semibold text-foreground">Wissenschaftliches Wissen</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 rounded-lg">
          <div className="w-8 h-8 bg-muted-direct rounded-full flex items-center justify-center">
            <Stethoscope className="w-4 h-4 text-muted-foreground" />
          </div>
          <div>
            <span className="text-sm font-medium text-foreground">Entwicklung Woche 12</span>
            <p className="text-sm text-muted-foreground">Fötale Organe beginnen sich zu entwickeln...</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 rounded-lg">
          <div className="w-8 h-8 bg-muted-direct rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-muted-foreground" />
          </div>
          <div>
            <span className="text-sm font-medium text-foreground">Ernährung & Vitamine</span>
            <p className="text-sm text-muted-foreground">Folsäure, Eisen und Omega-3 sind essentiell...</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 rounded-lg">
          <div className="w-8 h-8 bg-muted-direct rounded-full flex items-center justify-center">
            <BookOpenCheck className="w-4 h-4 text-muted-foreground" />
          </div>
          <div>
            <span className="text-sm font-medium text-foreground">Studien & Forschung</span>
            <p className="text-sm text-muted-foreground">Neueste Erkenntnisse aus der Schwangerschaftsforschung...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WeeklyCelebrationVisual = () => {
  return (
    <div className="bg-card card-border-coral rounded-xl p-6 space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <Sparkles className="w-6 h-6 text-coral-direct" />
        <span className="font-semibold text-foreground">Woche 16 - Zeit zu feiern!</span>
      </div>
      
      <div className="bg-muted-direct rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-5 h-5 text-coral-direct" />
          <span className="font-medium text-foreground">Deine Woche</span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">Dein Baby ist jetzt so groß wie eine Avocado!</p>
        <div className="flex gap-2">
          <span className="bg-coral-direct text-white px-3 py-1 rounded-full text-xs">🎉 Erste Bewegungen</span>
          <span className="bg-muted-direct text-muted-foreground px-3 py-1 rounded-full text-xs">👶 Geschlecht erkennbar</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-coral-direct rounded-full" />
          <span className="text-sm text-foreground">Personalisierte Tipps</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-muted-foreground rounded-full" />
          <span className="text-sm text-foreground">Wöchentliche Checkliste</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-muted-foreground rounded-full" />
          <span className="text-sm text-foreground">Erinnerungen & Termine</span>
        </div>
      </div>
    </div>
  );
};

const ScheduleManagementVisual = () => {
  return (
    <div className="bg-card card-border-sage rounded-xl p-6 space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <Target className="w-6 h-6 text-sage-direct" />
        <span className="font-semibold text-foreground">Dein Schwangerschaftsplan</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 bg-muted-direct rounded-lg">
          <CheckSquare className="w-5 h-5 text-green-600" />
          <div className="flex-1">
            <span className="text-sm font-medium text-foreground">Erstes Trimester abgeschlossen</span>
            <p className="text-xs text-muted-foreground">12 Wochen erreicht</p>
          </div>
          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 bg-muted-direct rounded-lg">
          <Calendar className="w-5 h-5 text-coral-direct" />
          <div className="flex-1">
            <span className="text-sm font-medium text-foreground">Nächster Arzttermin</span>
            <p className="text-xs text-muted-foreground">15. Januar 2024</p>
          </div>
          <Clock className="w-4 h-4 text-coral-direct" />
        </div>
        
        <div className="flex items-center gap-3 p-3 bg-muted-direct rounded-lg">
          <Heart className="w-5 h-5 text-muted-foreground" />
          <div className="flex-1">
            <span className="text-sm font-medium text-foreground">Pränatale Vitamine</span>
            <p className="text-xs text-muted-foreground">Täglich einnehmen</p>
          </div>
          <div className="w-6 h-6 border-2 border-muted-foreground rounded-full" />
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="w-full pt-8 xs:pt-12 sm:pt-16 md:pt-20 pb-16 xs:pb-20 sm:pb-24 md:pb-32 px-4 xs:px-6 sm:px-8 bg-warm-gradient" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto">
        {/* <h2 id="features-heading" className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-playfair font-semibold text-center text-foreground mb-4">
          Deine Schwangerschaftsbegleitung
        </h2> */}
        {/* <p className="text-center text-muted-foreground text-lg xs:text-xl max-w-3xl mx-auto mb-16">
          Alles was du brauchst, um deine Schwangerschaft optimal zu begleiten
        </p> */}
        
        <ul className="space-y-24 xs:space-y-32" aria-label="Schwangerschafts-Features">
          {features.map((feature) => (
            <li
              key={feature.id}
              className={`flex flex-col ${feature.layout === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}
              aria-labelledby={`feature-${feature.id}-title`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-coral-gradient rounded-full mb-6" aria-hidden="true">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 id={`feature-${feature.id}-title`} className="text-2xl xs:text-3xl sm:text-4xl font-playfair font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg xs:text-xl mb-8 max-w-2xl">
                  {feature.description}
                </p>
                <Button
                  size="lg"
                  className="btn-primary rounded-full text-base xs:text-lg px-6 xs:px-8 py-3 xs:py-4 font-medium focus-warm"
                  asChild
                >
                  <a 
                    href={feature.buttonAction} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`${feature.buttonText} - Öffnet in neuem Tab`}
                  >
                    {feature.buttonText}
                  </a>
                </Button>
              </div>

              {/* Visual */}
              <div className="flex-1 max-w-lg" aria-hidden="true">
                {feature.visualType === "chat" && <QuestionChatVisual />}
                {feature.visualType === "book" && <ScientificKnowledgeVisual />}
                {feature.visualType === "celebration" && <WeeklyCelebrationVisual />}
                {feature.visualType === "schedule" && <ScheduleManagementVisual />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
