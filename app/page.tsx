import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Demo } from "@/components/landing/demo";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
