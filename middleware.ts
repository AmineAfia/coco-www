import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap') ||
    pathname.startsWith('/og-image') ||
    pathname.startsWith('/apple-touch-icon') ||
    pathname.startsWith('/android-chrome') ||
    pathname.startsWith('/site.webmanifest') ||
    pathname.includes('.') ||
    pathname === '/404' ||
    pathname === '/500'
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = pathname.startsWith('/de') || pathname.startsWith('/en');
  
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Handle root path specifically
  if (pathname === '/') {
    // Detect language from Accept-Language header
    const acceptLanguage = request.headers.get('accept-language') || '';
    const languages = acceptLanguage
      .split(',')
      .map(lang => {
        const [locale] = lang.trim().split(';');
        return locale.trim();
      });

    // Check for German language preference
    const isGerman = languages.some(lang => lang.startsWith('de'));
    const locale = isGerman ? 'de' : 'en';

    // Redirect to localized path
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    
    return NextResponse.redirect(url);
  }

  // For other paths, redirect to localized version
  const acceptLanguage = request.headers.get('accept-language') || '';
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [locale] = lang.trim().split(';');
      return locale.trim();
    });

  // Check for German language preference
  const isGerman = languages.some(lang => lang.startsWith('de'));
  const locale = isGerman ? 'de' : 'en';

  // Redirect to localized path
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap|og-image|apple-touch-icon|android-chrome|site.webmanifest).*)',
  ],
};
