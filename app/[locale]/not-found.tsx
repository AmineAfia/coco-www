import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/lib/translations';

interface NotFoundProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function NotFound({ params }: NotFoundProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          {locale === 'de' ? 'Seite nicht gefunden' : 'Page Not Found'}
        </h2>
        <p className="text-muted-foreground mb-8">
          {locale === 'de' 
            ? 'Die Seite, die Sie suchen, existiert nicht.' 
            : "The page you're looking for doesn't exist."
          }
        </p>
        <Button asChild>
          <Link href={`/${locale}`}>
            {locale === 'de' ? 'Zur Startseite' : 'Go Home'}
          </Link>
        </Button>
      </div>
    </div>
  );
}
