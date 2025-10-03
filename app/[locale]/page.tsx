import Hero from "@/components/hero";
import Features from "@/components/features";
import { Navbar } from "@/components/navbar";
import Footer from '@/components/footer';
import CTABanner from '@/components/cta-banner';
import FAQ from '@/components/faq';
import type { Locale } from '@/lib/translations';

interface HomeProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  return (
    <>
      <Navbar locale={locale} />
      <main className="pt-16 xs:pt-18">
        <Hero locale={locale} />
        <Features locale={locale} />
        {/* <Testimonials /> */}
        <FAQ locale={locale} />
        <CTABanner locale={locale} />
        <Footer locale={locale} />
      </main>
    </>
  );
}
