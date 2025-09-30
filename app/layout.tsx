import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";
import "./production-fallback.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.vercel.app'),
  title: "Coco AI - Ihre KI-Begleiterin für eine sorgenfreie Schwangerschaft",
  description:
    "Ihre KI-Begleiterin für eine sorgenfreie Schwangerschaft - mit sofortiger Beratung, individueller Planung und verlässlicher Unterstützung rund um die Uhr.",
  keywords: [
    "Coco AI",
    "Schwangerschaft",
    "KI-Begleiterin",
    "Schwangerschaftsberatung",
    "AI Schwangerschaft",
    "Schwangerschaftsplanung",
    "Mutterschaft",
    "WhatsApp Beratung",
    "Schwangerschaftsunterstützung",
  ],
  openGraph: {
    type: "website",
    siteName: "Coco AI",
    locale: "de_DE",
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.vercel.app',
    title: "Coco AI - Ihre KI-Begleiterin für eine sorgenfreie Schwangerschaft",
    description:
      "Ihre KI-Begleiterin für eine sorgenfreie Schwangerschaft - mit sofortiger Beratung, individueller Planung und verlässlicher Unterstützung rund um die Uhr.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coco AI",
      },
    ],
  },
  authors: [
    {
      name: "Akash Moradiya",
      url: "https://shadcnui-blocks.com",
    },
  ],
  creator: "Akash Moradiya",
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
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-inter antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
