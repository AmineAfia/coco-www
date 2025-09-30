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
    title: "Verwalte deinen Zeitplan",
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
    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-green-500 rounded-full" />
        <span className="text-sm font-medium text-gray-600">24/7 verfügbar</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <Users className="w-4 h-4 text-gray-600" />
          </div>
          <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 max-w-xs">
            <p className="text-sm text-gray-700">Ist es normal, dass ich so müde bin?</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 justify-end">
          <div className="bg-coral rounded-2xl rounded-tr-sm p-3 max-w-xs">
            <p className="text-sm text-white">Ja, das ist völlig normal! Müdigkeit ist eines der häufigsten Symptome...</p>
          </div>
          <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <Baby className="w-4 h-4 text-gray-600" />
          </div>
          <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 max-w-xs">
            <p className="text-sm text-gray-700">Wann sollte ich zum Arzt gehen?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScientificKnowledgeVisual = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <BookOpen className="w-6 h-6 text-coral" />
        <span className="font-semibold text-gray-800">Wissenschaftliches Wissen</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 rounded-lg">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <Stethoscope className="w-4 h-4 text-gray-600" />
          </div>
          <div>
            <span className="text-sm font-medium text-gray-800">Entwicklung Woche 12</span>
            <p className="text-sm text-gray-600">Fötale Organe beginnen sich zu entwickeln...</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 rounded-lg">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-gray-600" />
          </div>
          <div>
            <span className="text-sm font-medium text-gray-800">Ernährung & Vitamine</span>
            <p className="text-sm text-gray-600">Folsäure, Eisen und Omega-3 sind essentiell...</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 rounded-lg">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <BookOpenCheck className="w-4 h-4 text-gray-600" />
          </div>
          <div>
            <span className="text-sm font-medium text-gray-800">Studien & Forschung</span>
            <p className="text-sm text-gray-600">Neueste Erkenntnisse aus der Schwangerschaftsforschung...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WeeklyCelebrationVisual = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <Sparkles className="w-6 h-6 text-coral" />
        <span className="font-semibold text-gray-800">Woche 16 - Zeit zu feiern!</span>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-5 h-5 text-coral" />
          <span className="font-medium text-gray-800">Deine Woche</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">Dein Baby ist jetzt so groß wie eine Avocado!</p>
        <div className="flex gap-2">
          <span className="bg-coral text-white px-3 py-1 rounded-full text-xs">🎉 Erste Bewegungen</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">👶 Geschlecht erkennbar</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-coral rounded-full" />
          <span className="text-sm text-gray-700">Personalisierte Tipps</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
          <span className="text-sm text-gray-700">Wöchentliche Checkliste</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
          <span className="text-sm text-gray-700">Erinnerungen & Termine</span>
        </div>
      </div>
    </div>
  );
};

const ScheduleManagementVisual = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <Target className="w-6 h-6 text-sage" />
        <span className="font-semibold text-gray-800">Dein Schwangerschaftsplan</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <CheckSquare className="w-5 h-5 text-green-600" />
          <div className="flex-1">
            <span className="text-sm font-medium text-gray-800">Erstes Trimester abgeschlossen</span>
            <p className="text-xs text-gray-600">12 Wochen erreicht</p>
          </div>
          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Calendar className="w-5 h-5 text-coral" />
          <div className="flex-1">
            <span className="text-sm font-medium text-gray-800">Nächster Arzttermin</span>
            <p className="text-xs text-gray-600">15. Januar 2024</p>
          </div>
          <Clock className="w-4 h-4 text-coral" />
        </div>
        
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Heart className="w-5 h-5 text-gray-600" />
          <div className="flex-1">
            <span className="text-sm font-medium text-gray-800">Pränatale Vitamine</span>
            <p className="text-xs text-gray-600">Täglich einnehmen</p>
          </div>
          <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="w-full pt-8 xs:pt-12 sm:pt-16 md:pt-20 pb-16 xs:pb-20 sm:pb-24 md:pb-32 px-4 xs:px-6 sm:px-8" aria-labelledby="features-heading">
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
