import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";
import "./production-fallback.css";
import { StructuredData, pregnancySupportSchema, organizationSchema } from "@/components/seo/structured-data";

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
