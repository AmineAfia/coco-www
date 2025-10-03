import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import "../production-fallback.css";
import { StructuredData, getPregnancySupportSchema, getOrganizationSchema } from "@/components/seo/structured-data";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import { CookieConsent } from "@/components/analytics/cookie-consent";
import { AnalyticsDebug } from "@/components/analytics/analytics-debug";
import { getLocalizedMetadata, type Locale } from "@/lib/translations";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const metadata = getLocalizedMetadata(locale);
  
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://getcoco.life'),
    ...metadata,
    authors: [
      {
        name: "getcoco.life",
        url: "https://getcoco.life",
      },
    ],
    creator: "getcoco.life",
    icons: [
      {
        rel: "icon",
        url: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_APP_URL || 'https://getcoco.life'
    },
    manifest: "/site.webmanifest",
  };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17619451585"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17619451585');
          `}
        </Script>
        <StructuredData schema={getPregnancySupportSchema(locale)} />
        <StructuredData schema={getOrganizationSchema(locale)} />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.getcoco.life" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={locale === 'de' ? "Ihre Begleiter für eine sorgenfreie Schwangerschaft | 24/7 WhatsApp Beratung" : "Your companion for a worry-free pregnancy | 24/7 WhatsApp consultation"} />
        <meta property="og:description" content={locale === 'de' ? "getcoco.life bietet 24/7 Schwangerschaftsbegleitung über WhatsApp. Erhalten Sie wissenschaftlich fundierte Antworten, wöchentliche Updates und persönliche Planungshilfe für Ihre Schwangerschaft." : "getcoco.life offers 24/7 pregnancy support via WhatsApp. Get scientifically based answers, weekly updates and personal planning help for your pregnancy."} />
        <meta property="og:image" content="https://getcoco.life/og-image.png" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="getcoco.life" />
        <meta property="twitter:url" content="https://www.getcoco.life" />
        <meta name="twitter:title" content={locale === 'de' ? "Ihre Begleiter für eine sorgenfreie Schwangerschaft | 24/7 WhatsApp Beratung" : "Your companion for a worry-free pregnancy | 24/7 WhatsApp consultation"} />
        <meta name="twitter:description" content={locale === 'de' ? "getcoco.life bietet 24/7 Schwangerschaftsbegleitung über WhatsApp. Erhalten Sie wissenschaftlich fundierte Antworten, wöchentliche Updates und persönliche Planungshilfe für Ihre Schwangerschaft." : "getcoco.life offers 24/7 pregnancy support via WhatsApp. Get scientifically based answers, weekly updates and personal planning help for your pregnancy."} />
        <meta name="twitter:image" content="https://getcoco.life/og-image.png" />
        
        {/* Additional OpenGraph meta tags for better social sharing */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:image:alt" content={locale === 'de' ? "getcoco.life - Schwangerschaftsbegleitung" : "getcoco.life - Pregnancy support"} />
      </head>
      <body className={`${inter.variable} font-inter antialiased`}>
        <PostHogProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TooltipProvider>
              {children}
              <CookieConsent />
              <AnalyticsDebug />
            </TooltipProvider>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
