import { Button } from "@/components/ui/button";
import { MessageCircle, BookOpen, Calendar, CheckSquare, Heart, Sparkles, Target } from "lucide-react";
import React from "react";
import { getTranslations, type Locale } from "@/lib/translations";

interface FeaturesProps {
  locale: Locale;
}

const Features = ({ locale }: FeaturesProps) => {
  const t = getTranslations(locale);

  const features = [
    {
      id: "question-chat",
      title: t.features.questionChat.title,
      description: t.features.questionChat.description,
      buttonText: t.features.questionChat.buttonText,
      buttonAction: "https://wa.me/+15558876420?text=Hallo%20Coco",
      icon: MessageCircle,
      layout: "left" as const,
      visualType: "chat" as const,
    },
    {
      id: "scientific-knowledge",
      title: t.features.scientificKnowledge.title,
      description: t.features.scientificKnowledge.description,
      buttonText: t.features.scientificKnowledge.buttonText,
      buttonAction: "https://wa.me/+15558876420?text=Wissen%20entdecken",
      icon: BookOpen,
      layout: "right" as const,
      visualType: "book" as const,
    },
    {
      id: "weekly-celebration",
      title: t.features.weeklyCelebration.title,
      description: t.features.weeklyCelebration.description,
      buttonText: t.features.weeklyCelebration.buttonText,
      buttonAction: "https://wa.me/+15558876420?text=Woche%20entdecken",
      icon: Calendar,
      layout: "left" as const,
      visualType: "celebration" as const,
    },
    {
      id: "schedule-management",
      title: t.features.scheduleManagement.title,
      description: t.features.scheduleManagement.description,
      buttonText: t.features.scheduleManagement.buttonText,
      buttonAction: "https://wa.me/+15558876420?text=Planen%20starten",
      icon: CheckSquare,
      layout: "right" as const,
      visualType: "schedule" as const,
    },
  ];

// Visual Components
const QuestionChatVisual = ({ locale }: { locale: Locale }) => {
  const t = getTranslations(locale);
  return (
    <div className="relative group">
      {/* Warm minimalist background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral-50 to-amber-50 rounded-2xl shadow-lg shadow-coral-200/30" />
      
      {/* Main card content */}
      <div className="relative bg-coral-50/80 backdrop-blur-sm rounded-2xl p-6 border border-coral-200/50">
        {/* Simple header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-coral-gradient rounded-xl flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-coral-900">{t.features.questionChat.visual.header}</h3>
            <p className="text-sm text-coral-700">{t.features.questionChat.visual.subtitle}</p>
          </div>
        </div>
        
        {/* Warm chat exchange */}
        <div className="bg-gradient-to-br from-coral-50/80 to-amber-50/80 rounded-xl p-4 shadow-sm border border-coral-200/50">
          {/* Warm chat header */}
          <div className="flex items-center gap-3 mb-3 pb-2 border-b border-coral-200/60">
            <div className="w-8 h-8 bg-gradient-to-br from-coral-500 to-amber-500 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <span className="font-semibold text-coral-900 text-sm">Coco</span>
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse inline-block ml-2" />
              <span className="text-xs text-coral-700 ml-2">online</span>
            </div>
          </div>
          
          {/* Warm chat exchange */}
          <div className="space-y-2">
            {/* User question */}
            <div className="flex justify-end">
              <div className="bg-amber-100 border border-amber-200 text-amber-900 rounded-2xl rounded-tr-sm p-3 max-w-xs shadow-sm">
                <p className="text-sm font-medium text-amber-900">{t.features.questionChat.visual.userQuestion}</p>
                <span className="text-xs text-amber-600">14:32</span>
              </div>
            </div>
            
            {/* Coco's warm response */}
            <div className="flex justify-start">
              <div className="bg-white/90 border border-coral-200/60 rounded-2xl rounded-tl-sm p-3 max-w-xs shadow-sm">
                <p className="text-sm text-coral-900">{t.features.questionChat.visual.cocoResponse}</p>
                <p className="text-sm text-amber-800 mt-1 font-medium">{t.features.questionChat.visual.tip}</p>
                <span className="text-xs text-coral-600">14:32 ✓✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScientificKnowledgeVisual = ({ locale }: { locale: Locale }) => {
  const t = getTranslations(locale);
  return (
    <div className="relative group">
      {/* Warm minimalist background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral-50 to-amber-50 rounded-2xl shadow-lg shadow-coral-200/30" />
      
      {/* Main card content */}
      <div className="relative bg-coral-50/80 backdrop-blur-sm rounded-2xl p-6 border border-coral-200/50">
        {/* Simple header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-coral-gradient rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-coral-900">{t.features.scientificKnowledge.visual.header}</h3>
            <p className="text-sm text-coral-700">{t.features.scientificKnowledge.visual.subtitle}</p>
          </div>
        </div>
        
        {/* Essential research card */}
        <div className="bg-white/70 rounded-xl p-4 shadow-sm border border-coral-200/30">
          {/* Single research card */}
          <div className="bg-gradient-to-r from-coral-50 to-amber-50 rounded-lg p-4 border border-coral-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-coral-900">{t.features.scientificKnowledge.visual.weekTitle}</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-coral-500 rounded-full animate-pulse" />
                <span className="text-xs text-coral-600">{t.features.scientificKnowledge.visual.current}</span>
              </div>
            </div>
            <p className="text-sm text-coral-800 mb-3">{t.features.scientificKnowledge.visual.description}</p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-coral-600">{t.features.scientificKnowledge.visual.understood}</div>
              <div className="w-16 h-2 bg-coral-200 rounded-full">
                <div className="w-14 h-2 bg-coral-500 rounded-full" />
              </div>
            </div>
          </div>
          
          {/* Source credibility */}
          <div className="flex gap-2 mt-3">
            <span className="text-xs bg-coral-100 text-coral-700 px-2 py-1 rounded-full font-medium">{t.features.scientificKnowledge.visual.studyTag}</span>
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-medium">{t.features.scientificKnowledge.visual.peerReviewed}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const WeeklyCelebrationVisual = ({ locale }: { locale: Locale }) => {
  const t = getTranslations(locale);
  return (
    <div className="relative group">
      {/* Warm minimalist background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral-50 to-amber-50 rounded-2xl shadow-lg shadow-coral-200/30" />
      
      {/* Main card content */}
      <div className="relative bg-coral-50/80 backdrop-blur-sm rounded-2xl p-6 border border-coral-200/50">
        {/* Simple header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-coral-gradient rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-coral-900">{t.features.weeklyCelebration.visual.header}</h3>
            <p className="text-sm text-coral-700">{t.features.weeklyCelebration.visual.subtitle}</p>
          </div>
        </div>
        
        {/* Essential milestone celebration */}
        <div className="bg-white/70 rounded-xl p-4 shadow-sm border border-coral-200/30">
          {/* Single milestone achievement */}
          <div className="bg-gradient-to-r from-coral-50 to-amber-50 rounded-lg p-4 border border-coral-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-coral-500 to-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">16</span>
              </div>
              <div>
                <h4 className="font-semibold text-coral-900">{t.features.weeklyCelebration.visual.weekTitle}</h4>
                <p className="text-sm text-coral-600">{t.features.weeklyCelebration.visual.size}</p>
              </div>
            </div>
            
            {/* Celebration message */}
            <div className="bg-white/60 rounded-lg p-3 border border-coral-200">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="font-semibold text-coral-900 text-sm">{t.features.weeklyCelebration.visual.special}</span>
              </div>
              <p className="text-sm text-coral-800">{t.features.weeklyCelebration.visual.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScheduleManagementVisual = ({ locale }: { locale: Locale }) => {
  const t = getTranslations(locale);
  return (
    <div className="relative group">
      {/* Warm minimalist background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral-50 to-amber-50 rounded-2xl shadow-lg shadow-coral-200/30" />
      
      {/* Main card content */}
      <div className="relative bg-coral-50/80 backdrop-blur-sm rounded-2xl p-6 border border-coral-200/50">
        {/* Simple header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-coral-gradient rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-coral-900">{t.features.scheduleManagement.visual.header}</h3>
            <p className="text-sm text-coral-700">{t.features.scheduleManagement.visual.subtitle}</p>
          </div>
        </div>
        
        {/* Minimal 3-event schedule */}
        <div className="bg-white/70 rounded-xl p-4 shadow-sm border border-coral-200/30">
          {/* Simple header */}
          <div className="flex items-center gap-3 mb-3 pb-2 border-b border-coral-100">
            <div className="w-8 h-8 bg-coral-gradient rounded-lg flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-coral-900 text-sm">{t.features.scheduleManagement.visual.planTitle}</h4>
              <p className="text-xs text-coral-600">{t.features.scheduleManagement.visual.week}</p>
            </div>
          </div>
          
          {/* Minimal 3-event list */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm text-coral-900">{t.features.scheduleManagement.visual.doctorAppointment}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-coral-300 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-coral-400 rounded-full" />
              </div>
              <span className="text-sm text-coral-900">{t.features.scheduleManagement.visual.ultrasound}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-coral-300 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-coral-400 rounded-full" />
              </div>
              <span className="text-sm text-coral-900">{t.features.scheduleManagement.visual.preparation}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
                {feature.visualType === "chat" && <QuestionChatVisual locale={locale} />}
                {feature.visualType === "book" && <ScientificKnowledgeVisual locale={locale} />}
                {feature.visualType === "celebration" && <WeeklyCelebrationVisual locale={locale} />}
                {feature.visualType === "schedule" && <ScheduleManagementVisual locale={locale} />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
