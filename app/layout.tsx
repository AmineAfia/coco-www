import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";
import "./production-fallback.css";
import { StructuredData, pregnancySupportSchema, organizationSchema } from "@/components/seo/structured-data";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import { CookieConsent } from "@/components/analytics/cookie-consent";
import { AnalyticsDebug } from "@/components/analytics/analytics-debug";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://getcoco.life'),
  title: "GetCoco.life - Ihre Begleiter für eine sorgenfreie Schwangerschaft | 24/7 WhatsApp Beratung",
  description:
    "GetCoco.life bietet 24/7 Schwangerschaftsbegleitung über WhatsApp. Erhalten Sie wissenschaftlich fundierte Antworten, wöchentliche Updates und persönliche Planungshilfe für Ihre Schwangerschaft.",
  keywords: [
    "getcoco.life",
    "getcoco",
    "coco.life",
    "Schwangerschaftsberatung",
    "KI Schwangerschaft",
    "WhatsApp Schwangerschaft", 
    "Schwangerschaftsbegleitung",
    "Schwangerschaftsplanung",
    "AI Schwangerschaft",
    "Schwangerschaft Chatbot",
    "Schwangerschaftsunterstützung",
    "Mutterschaft",
    "Schwangerschaft Tipps",
    "Coco AI",
    "Schwangerschaft",
    "KI-Begleiterin",
    "Begleiter",
    "Begleiterin",
    "WhatsApp Beratung",
    "Schwangerschaftshose",
    "Schwangerschaftshosen",
    "Schwangerschaftsjeans",
    "Schwangerschaftsbekleidung",
    "Umstandsmode",
    "Schwangerschaft Mode",
    "Schwangerschaft Kleidung",
    "Bauchband Hose",
    "Elastische Schwangerschaftshose",
    "Schwangerschaft Arbeitshose",
    "Schwangerschaft Freizeithose",
    "Schwangerschaft Hosen",
    "Schwangerschaft Umstandshose",
    "Schwangerschafts Leggings",
    "Schwangerschaftsbekleidung",
    "Schwangerschaftsbekleidung",
  ],
  openGraph: {
    type: "website",
    siteName: "GetCoco.life",
    locale: "de_DE",
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://getcoco.life',
    title: "GetCoco.life - Ihre Begleiter für eine sorgenfreie Schwangerschaft | 24/7 WhatsApp Beratung",
    description:
      "GetCoco.life bietet 24/7 Schwangerschaftsbegleitung über WhatsApp. Erhalten Sie wissenschaftlich fundierte Antworten, wöchentliche Updates und persönliche Planungshilfe für Ihre Schwangerschaft.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coco AI",
      },
    ],
  },
  authors: [
    {
      name: "GetCoco.life",
      url: "https://getcoco.life",
    },
  ],
  creator: "GetCoco.life",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17619451585"></script>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17619451585');
            `,
          }}
        />
        <StructuredData schema={pregnancySupportSchema} />
        <StructuredData schema={organizationSchema} />
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
