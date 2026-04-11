import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white font-serif font-bold text-sm">
                B
              </div>
              <span className="font-serif text-lg text-neutral-900">Breefy</span>
            </div>
            <p className="mt-4 text-sm text-neutral-500">
              Générateur de briefs SEO par IA. Des briefs parfaits en 30 secondes.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Produit</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/#features" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/exemples" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                  Exemples
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Ressources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#use-cases" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                  Cas d&apos;usage
                </Link>
              </li>
              <li>
                <Link href="/vs/semrush" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                  vs Semrush
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Légal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                  CGU
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-100 pt-8 sm:flex-row">
          <p className="text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} Breefy. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Paiement sécurisé Stripe
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              RGPD compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
