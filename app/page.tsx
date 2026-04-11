import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Stats } from "@/components/landing/stats";
import { Features } from "@/components/landing/features";
import { Demo } from "@/components/landing/demo";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Demo />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
