import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// interface BlogPostProps {
//   params: Promise<{
//     locale: Locale;
//     slug: string;
//   }>;
// }

// Function to get all blog post slugs (in a real app, this would come from a CMS or database)
async function getAllBlogPostSlugs() {
  return [
    "schwangerschaftswoche-12-was-passiert",
    "ernaehrung-schwangerschaft-ultimative-guide",
    "schwangerschaftssymptome-was-ist-normal",
    "geburtsvorbereitung-checkliste"
  ];
}

// Function to get blog post data (in a real app, this would come from a CMS or database)
async function getBlogPost() {
  // For now, return the hardcoded blog post
  // In a real app, you would fetch from a CMS or database
  return {
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
        <li>Ihr Appetit kehrt zurück</li>
        <li>Die Stimmung stabilisiert sich</li>
      </ul>
      
      <h2>Wichtige Termine und Untersuchungen</h2>
      <p>In der 12. Woche steht oft die erste große Ultraschalluntersuchung an. Diese Untersuchung ist besonders aufregend, da Sie Ihr Baby zum ersten Mal richtig sehen können.</p>
      
      <h2>Ernährungstipps für die 12. Woche</h2>
      <p>Eine ausgewogene Ernährung ist jetzt besonders wichtig:</p>
      
      <ul>
        <li>Folsäure und Eisen sind essentiell</li>
        <li>Ausreichend Protein für die Entwicklung</li>
        <li>Viel Wasser trinken</li>
        <li>Vermeiden Sie rohe Lebensmittel</li>
      </ul>
      
      <h2>Wann sollten Sie einen Arzt aufsuchen?</h2>
      <p>Kontaktieren Sie Ihren Arzt bei:</p>
      
      <ul>
        <li>Starken Blutungen</li>
        <li>Anhaltenden Schmerzen</li>
        <li>Fieber über 38°C</li>
        <li>Plötzlichem Verschwinden der Schwangerschaftssymptome</li>
      </ul>
      
      <p>Die 12. Schwangerschaftswoche ist ein wichtiger Meilenstein. Ihr Baby entwickelt sich rasant und Sie können sich auf die kommenden Wochen freuen!</p>
    `,
    date: "2024-01-15",
    readTime: "5 Min",
    category: "Schwangerschaftswochen",
    author: "Dr. Sarah Müller",
    tags: ["Schwangerschaftswoche 12", "Babyentwicklung", "Ernährung", "Ultraschall"]
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllBlogPostSlugs();
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage() {
  const blogPost = await getBlogPost();

  return (
    <div className="min-h-screen pt-16 xs:pt-18">
      <div className="max-w-4xl mx-auto px-4 xs:px-6 sm:px-8 py-12">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zum Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="p-6 xs:p-8">
            {/* Category and Meta */}
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-coral-direct/10 text-coral-direct px-3 py-1 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
              <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                {blogPost.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-playfair font-semibold text-foreground mb-6">
              {blogPost.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(blogPost.date).toLocaleDateString('de-DE')}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {blogPost.readTime}
              </div>
              <div>
                Von {blogPost.author}
              </div>
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-muted/30 rounded-xl p-8">
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
              className="inline-flex items-center px-8 py-4 bg-coral-direct text-white rounded-full font-medium hover:bg-coral-direct/90 transition-colors text-lg"
            >
              Jetzt mit Coco chatten
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}