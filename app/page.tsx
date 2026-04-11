import { Navbar } from "@/components/landing/navbar";
import { PromoBanner } from "@/components/landing/promo-banner";
import { Hero } from "@/components/landing/hero";
import { Stats } from "@/components/landing/stats";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Demo } from "@/components/landing/demo";
import { UseCasesGrid } from "@/components/landing/use-cases-grid";
import { Testimonials } from "@/components/landing/testimonials";
import { Comparison } from "@/components/landing/comparison";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      <PromoBanner />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Demo />
      <UseCasesGrid />
      <Testimonials />
      <Comparison />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
