import Link from "next/link";
import { Button } from "../ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-neutral-200/60 bg-[#fafaf8]/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white font-serif font-bold text-sm">
            B
          </div>
          <span className="font-serif text-lg text-neutral-900">BriefCraft</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
          <Link href="#features" className="hover:text-neutral-900 transition-colors">
            Fonctionnalités
          </Link>
          <Link href="#pricing" className="hover:text-neutral-900 transition-colors">
            Tarifs
          </Link>
          <Link href="#faq" className="hover:text-neutral-900 transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm">Connexion</Button>
          </Link>
          <Link href="/register">
            <Button size="sm">Essai gratuit</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
