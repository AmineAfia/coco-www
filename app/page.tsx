import Hero from "@/components/hero";
import Features from "@/components/features";
import { Navbar } from "@/components/navbar";
import Footer from '@/components/footer';
import CTABanner from '@/components/cta-banner';
import FAQ from '@/components/faq';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-18">
        <Hero />
        <Features />
        {/* <Testimonials /> */}
        <FAQ />
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
