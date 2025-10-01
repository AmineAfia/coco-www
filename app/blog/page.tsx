import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    slug: "schwangerschaftswoche-12-was-passiert",
    title: "Schwangerschaftswoche 12: Was passiert in dieser wichtigen Phase?",
    excerpt: "Die 12. Schwangerschaftswoche markiert einen wichtigen Meilenstein. Erfahren Sie, wie sich Ihr Baby entwickelt und welche Veränderungen Sie erwarten können.",
    date: "2024-01-15",
    readTime: "5 Min",
    category: "Schwangerschaftswochen",
    featured: true
  },
  {
    slug: "ernaehrung-schwangerschaft-ultimative-guide",
    title: "Ernährung während der Schwangerschaft - Der ultimative Guide",
    excerpt: "Was sollten Sie essen, was vermeiden? Ein umfassender Leitfaden zur gesunden Ernährung in der Schwangerschaft mit praktischen Tipps.",
    date: "2024-01-10",
    readTime: "8 Min",
    category: "Ernährung",
    featured: true
  },
  {
    slug: "schwangerschaftssymptome-was-ist-normal",
    title: "Schwangerschaftssymptome: Was ist normal und wann zum Arzt?",
    excerpt: "Übelkeit, Müdigkeit, Stimmungsschwankungen - welche Symptome sind normal und wann sollten Sie einen Arzt aufsuchen?",
    date: "2024-01-05",
    readTime: "6 Min",
    category: "Gesundheit",
    featured: false
  },
  {
    slug: "geburtsvorbereitung-checkliste",
    title: "Geburtsvorbereitung: Die ultimative Checkliste",
    excerpt: "Alles was Sie für die Geburt vorbereiten sollten - von der Krankenhaustasche bis zur mentalen Vorbereitung.",
    date: "2024-01-01",
    readTime: "7 Min",
    category: "Geburtsvorbereitung",
    featured: false
  }
];

const categories = [
  "Alle",
  "Schwangerschaftswochen", 
  "Ernährung",
  "Gesundheit",
  "Geburtsvorbereitung"
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-16 xs:pt-18">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl font-playfair font-semibold text-foreground mb-4">
            Schwangerschafts-Blog
          </h1>
          <p className="text-muted-foreground text-lg xs:text-xl max-w-3xl mx-auto">
            Wissenschaftlich fundierte Artikel, praktische Tipps und wöchentliche Updates für Ihre Schwangerschaft
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Alle" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Empfohlene Artikel</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <article key={post.slug} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-coral-direct/10 text-coral-direct px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('de-DE')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" size="sm" className="rounded-full">
                        Lesen
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-8">Alle Artikel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-coral-direct/10 text-coral-direct px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('de-DE')}
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" size="sm" className="rounded-full">
                        Lesen
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-muted/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Haben Sie Fragen zu Ihrem Artikel?
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
