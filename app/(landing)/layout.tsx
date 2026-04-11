import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      <main className="pt-32 pb-20">{children}</main>
      <Footer />
    </div>
  );
}
