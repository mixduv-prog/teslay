import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Breefy",
  description: "Contactez l'équipe Breefy pour toute question, suggestion ou demande de support.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <header className="mb-16 text-center">
        <h1 className="font-serif text-5xl text-neutral-900 sm:text-6xl">Contact</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-500">
          Une question ? Un bug ? Une suggestion ? Nous répondons à tous les emails.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        <a
          href="mailto:support@getbreefy.com"
          className="group rounded-2xl border border-neutral-200 bg-white p-8 transition-all hover:border-green-500 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <h3 className="mt-4 font-semibold text-neutral-900 group-hover:text-green-600 transition-colors">
            Support
          </h3>
          <p className="mt-2 text-sm text-neutral-500">
            Questions techniques, bugs, fonctionnalités. Réponse sous 24h.
          </p>
          <p className="mt-4 text-sm font-medium text-green-600">
            support@getbreefy.com
          </p>
        </a>

        <a
          href="mailto:contact@getbreefy.com"
          className="group rounded-2xl border border-neutral-200 bg-white p-8 transition-all hover:border-green-500 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <h3 className="mt-4 font-semibold text-neutral-900 group-hover:text-green-600 transition-colors">
            Partenariats & presse
          </h3>
          <p className="mt-2 text-sm text-neutral-500">
            Collaborations, affiliations, demandes presse et média.
          </p>
          <p className="mt-4 text-sm font-medium text-green-600">
            contact@getbreefy.com
          </p>
        </a>
      </div>

      <div className="mt-12 text-center text-sm text-neutral-500">
        Déjà client ?{" "}
        <Link href="/dashboard" className="text-green-600 hover:text-green-700 font-medium">
          Accéder au dashboard
        </Link>
      </div>
    </div>
  );
}
