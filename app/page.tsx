import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 xs:pt-24 sm:pt-28">
        <Hero />
        {/* <Features /> */}
        {/* <Pricing /> */}
        {/* <FAQ /> */}
        {/* <Testimonials /> */}
        {/* <CTABanner /> */}
        {/* <Footer /> */}
      </main>
    </>
  );
}
