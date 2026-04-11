import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <article className="prose prose-neutral max-w-none">{children}</article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
