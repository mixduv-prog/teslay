import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Breefy",
  description: "Mentions légales de Breefy.",
};

export default function LegalPage() {
  return (
    <>
      <h1 className="font-serif text-4xl text-neutral-900 mb-2">Mentions légales</h1>
      <p className="text-sm text-neutral-500 mb-10">Dernière mise à jour : 11 avril 2026</p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">Éditeur du site</h2>
      <p className="text-neutral-700 leading-relaxed">
        <strong>Breefy</strong>
        <br />
        Générateur de briefs SEO par intelligence artificielle
        <br />
        Email : contact@getbreefy.com
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">Hébergement</h2>
      <p className="text-neutral-700 leading-relaxed">
        Le site Breefy est hébergé par :
        <br />
        <strong>Vercel Inc.</strong>
        <br />
        340 S Lemon Ave #4133
        <br />
        Walnut, CA 91789, États-Unis
        <br />
        <a href="https://vercel.com" className="text-green-600 hover:underline">vercel.com</a>
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">Propriété intellectuelle</h2>
      <p className="text-neutral-700 leading-relaxed">
        L&apos;ensemble du site (design, textes, code, logos) est protégé par le droit d&apos;auteur.
        Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">Contact</h2>
      <p className="text-neutral-700 leading-relaxed">
        Pour toute question ou réclamation, vous pouvez nous contacter à l&apos;adresse suivante :
        <br />
        <strong>contact@getbreefy.com</strong>
      </p>
    </>
  );
}
