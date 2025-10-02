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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://getcoco.ai'),
  title: "Coco AI - Ihre KI-Begleiterin für eine sorgenfreie Schwangerschaft | 24/7 WhatsApp Beratung",
  description:
    "Coco AI bietet 24/7 Schwangerschaftsberatung über WhatsApp. Erhalten Sie wissenschaftlich fundierte Antworten, wöchentliche Updates und persönliche Planungshilfe für Ihre Schwangerschaft.",
  keywords: [
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
    "WhatsApp Beratung",
  ],
  openGraph: {
    type: "website",
    siteName: "Coco AI",
    locale: "de_DE",
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://getcoco.ai',
    title: "Coco AI - Ihre KI-Begleiterin für eine sorgenfreie Schwangerschaft | 24/7 WhatsApp Beratung",
    description:
      "Coco AI bietet 24/7 Schwangerschaftsberatung über WhatsApp. Erhalten Sie wissenschaftlich fundierte Antworten, wöchentliche Updates und persönliche Planungshilfe für Ihre Schwangerschaft.",
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
      name: "Coco AI",
      url: "https://getcoco.ai",
    },
  ],
  creator: "Coco AI",
  icons: [
    {
      rel: "icon",
      url: "/coco-logo.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/coco-logo.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/coco-logo.png",
      sizes: "any",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL || 'https://getcoco.ai'
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
