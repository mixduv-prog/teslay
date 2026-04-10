import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white font-serif font-bold text-sm">
              B
            </div>
            <span className="font-serif text-lg text-neutral-900">BriefCraft</span>
          </div>
          <nav className="flex gap-8 text-sm text-neutral-500">
            <Link href="#features" className="hover:text-neutral-900 transition-colors">
              Fonctionnalités
            </Link>
            <Link href="#pricing" className="hover:text-neutral-900 transition-colors">
              Tarifs
            </Link>
            <Link href="#faq" className="hover:text-neutral-900 transition-colors">
              FAQ
            </Link>
            <Link href="/login" className="hover:text-neutral-900 transition-colors">
              Connexion
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-neutral-100 pt-8 text-center text-sm text-neutral-400">
          &copy; {new Date().getFullYear()} BriefCraft. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
