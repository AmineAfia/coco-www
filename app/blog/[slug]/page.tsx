"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePostHog } from "@/lib/use-posthog";
import { useEffect } from "react";

// This would normally come from a CMS or database
const blogPost = {
  slug: "schwangerschaftswoche-12-was-passiert",
  title: "Schwangerschaftswoche 12: Was passiert in dieser wichtigen Phase?",
  content: `
    <p>Die 12. Schwangerschaftswoche markiert einen wichtigen Meilenstein in Ihrer Schwangerschaft. In dieser Phase entwickelt sich Ihr Baby rasant weiter und Sie werden möglicherweise erste körperliche Veränderungen bemerken.</p>
    
    <h2>Entwicklung Ihres Babys in der 12. Woche</h2>
    <p>Ihr Baby ist jetzt etwa so groß wie eine Pflaume und wiegt ungefähr 14-16 Gramm. Die wichtigsten Organe sind bereits angelegt und beginnen zu funktionieren:</p>
    
    <ul>
      <li><strong>Gehirn:</strong> Das Gehirn entwickelt sich rasant und die Nervenverbindungen werden ausgebaut</li>
      <li><strong>Herz:</strong> Das Herz schlägt bereits kräftig mit etwa 120-160 Schlägen pro Minute</li>
      <li><strong>Nieren:</strong> Die Nieren beginnen zu funktionieren und produzieren Urin</li>
      <li><strong>Gliedmaßen:</strong> Arme und Beine sind vollständig ausgebildet</li>
    </ul>
    
    <h2>Was Sie in der 12. Woche erwartet</h2>
    <p>Viele Frauen erleben in der 12. Schwangerschaftswoche eine Verbesserung ihrer Symptome:</p>
    
    <ul>
      <li>Die Übelkeit lässt oft nach</li>
      <li>Sie fühlen sich energiegeladener</li>
      <li>Die Stimmung stabilisiert sich</li>
      <li>Der Appetit kehrt zurück</li>
    </ul>
    
    <h2>Wichtige Termine und Untersuchungen</h2>
    <p>In der 12. Woche steht oft die erste große Ultraschalluntersuchung an. Diese Untersuchung ist besonders wichtig, da:</p>
    
    <ul>
      <li>Die Nackentransparenz gemessen wird</li>
      <li>Die Entwicklung des Babys überprüft wird</li>
      <li>Mögliche Risiken frühzeitig erkannt werden können</li>
    </ul>
    
    <h2>Ernährungstipps für die 12. Woche</h2>
    <p>Eine ausgewogene Ernährung ist jetzt besonders wichtig:</p>
    
    <ul>
      <li>Folsäure weiterhin einnehmen</li>
      <li>Ausreichend Eisen für die Blutbildung</li>
      <li>Omega-3-Fettsäuren für die Gehirnentwicklung</li>
      <li>Viel frisches Obst und Gemüse</li>
    </ul>
    
    <h2>Wann sollten Sie einen Arzt aufsuchen?</h2>
    <p>Kontaktieren Sie Ihren Arzt, wenn Sie folgende Symptome bemerken:</p>
    
    <ul>
      <li>Starke Bauchschmerzen</li>
      <li>Blutungen</li>
      <li>Fieber über 38°C</li>
      <li>Anhaltende Übelkeit mit Erbrechen</li>
    </ul>
  `,
  date: "2024-01-15",
  readTime: "5 Min",
  category: "Schwangerschaftswochen",
  author: "Dr. Sarah Müller",
  tags: ["Schwangerschaftswoche 12", "Babyentwicklung", "Ernährung", "Ultraschall"]
};
export default function BlogPostPage() {
  const { track } = usePostHog();

  // Track blog post view
  useEffect(() => {
    track('blog_post_view', {
      post_slug: blogPost.slug,
      post_title: blogPost.title,
      post_category: blogPost.category,
      read_time: blogPost.readTime
    });
  }, [track]);

  const handleWhatsAppClick = () => {
    track('blog_post_whatsapp_click', {
      post_slug: blogPost.slug,
      location: 'blog_post',
      button_text: 'Jetzt mit Coco chatten'
    });
  };

  const handleBackToBlog = () => {
    track('blog_post_back_click', {
      post_slug: blogPost.slug,
      location: 'blog_post'
    });
  };

  // TODO: Implement dynamic blog post content fetching
  return (
    <div className="min-h-screen pt-16 xs:pt-18">
      <div className="max-w-4xl mx-auto px-4 xs:px-6 sm:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={handleBackToBlog}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zum Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-coral-direct/10 text-coral-direct px-3 py-1 rounded-full text-sm font-medium">
              {blogPost.category}
            </span>
            <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
              {blogPost.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-playfair font-semibold text-foreground mb-6">
            {blogPost.title}
          </h1>
          
          <div className="flex items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(blogPost.date).toLocaleDateString('de-DE', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {blogPost.readTime}
            </div>
            <div>
              Von {blogPost.author}
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
            className="text-muted-foreground leading-relaxed"
          />
        </article>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {blogPost.tags.map((tag) => (
              <span
                key={tag}
                className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-muted/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Haben Sie Fragen zu diesem Artikel?
          </h3>
          <p className="text-muted-foreground mb-6">
            Coco AI beantwortet gerne alle Ihre Schwangerschaftsfragen - 24/7 über WhatsApp
          </p>
          <a
            href="https://wa.me/+15558876420?text=Hallo%20Coco"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center px-8 py-4 bg-coral-direct text-white rounded-full font-medium hover:bg-coral-direct/90 transition-colors text-lg"
          >
            Jetzt mit Coco chatten
          </a>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Button variant="outline" className="rounded-full">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Vorheriger Artikel
          </Button>
          <Button variant="outline" className="rounded-full">
            Nächster Artikel
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
