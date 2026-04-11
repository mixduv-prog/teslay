import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — BriefCraft",
  description: "Conditions générales d'utilisation du service BriefCraft.",
};

export default function TermsPage() {
  return (
    <>
      <h1 className="font-serif text-4xl text-neutral-900 mb-2">Conditions générales d&apos;utilisation</h1>
      <p className="text-sm text-neutral-500 mb-10">Dernière mise à jour : 11 avril 2026</p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">1. Objet</h2>
      <p className="text-neutral-700 leading-relaxed">
        Les présentes conditions générales d&apos;utilisation (ci-après « CGU ») régissent l&apos;utilisation
        du service BriefCraft, un générateur de briefs SEO propulsé par intelligence artificielle.
        En accédant au service, l&apos;utilisateur accepte sans réserve les présentes CGU.
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">2. Services proposés</h2>
      <p className="text-neutral-700 leading-relaxed">
        BriefCraft permet de générer automatiquement des briefs éditoriaux SEO à partir d&apos;un mot-clé
        et de paramètres définis par l&apos;utilisateur. Le service inclut plusieurs formules :
      </p>
      <ul className="text-neutral-700 leading-relaxed list-disc pl-6 mt-4">
        <li><strong>Free</strong> : 3 briefs gratuits, à vie</li>
        <li><strong>Starter</strong> : 19€/mois, 50 briefs par mois</li>
        <li><strong>Pro</strong> : 49€/mois, briefs illimités et export Markdown</li>
      </ul>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">3. Inscription et compte</h2>
      <p className="text-neutral-700 leading-relaxed">
        L&apos;accès au service nécessite la création d&apos;un compte via Google OAuth ou email.
        L&apos;utilisateur s&apos;engage à fournir des informations exactes. Il est seul responsable de
        la confidentialité de ses identifiants.
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">4. Tarification et paiement</h2>
      <p className="text-neutral-700 leading-relaxed">
        Les abonnements Starter et Pro sont facturés mensuellement via Stripe. Les paiements sont
        sécurisés et aucune donnée bancaire n&apos;est stockée sur nos serveurs. L&apos;utilisateur
        peut annuler son abonnement à tout moment depuis sa page de facturation. L&apos;abonnement
        reste actif jusqu&apos;à la fin de la période en cours.
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">5. Remboursement</h2>
      <p className="text-neutral-700 leading-relaxed">
        Conformément à l&apos;article L. 221-28 du Code de la consommation, le droit de rétractation
        ne s&apos;applique pas aux contenus numériques livrés immédiatement. Les abonnements ne sont
        donc pas remboursables une fois souscrits.
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">6. Propriété intellectuelle</h2>
      <p className="text-neutral-700 leading-relaxed">
        Les briefs générés appartiennent à l&apos;utilisateur qui les a créés. BriefCraft conserve
        les droits sur la plateforme, le code source et le design. Toute reproduction du service
        est interdite sans autorisation écrite.
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">7. Utilisation de l&apos;IA</h2>
      <p className="text-neutral-700 leading-relaxed">
        BriefCraft utilise l&apos;API Claude d&apos;Anthropic pour générer les briefs. Les contenus
        produits sont générés automatiquement et peuvent contenir des erreurs ou des imprécisions.
        L&apos;utilisateur est invité à vérifier chaque brief avant utilisation. BriefCraft ne peut
        être tenu responsable de l&apos;exactitude des informations générées.
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">8. Limitation de responsabilité</h2>
      <p className="text-neutral-700 leading-relaxed">
        BriefCraft ne saurait être tenu responsable des dommages directs ou indirects résultant de
        l&apos;utilisation du service, notamment en cas de perte de données, d&apos;interruption de
        service ou d&apos;erreurs dans les briefs générés.
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">9. Résiliation</h2>
      <p className="text-neutral-700 leading-relaxed">
        BriefCraft se réserve le droit de résilier tout compte en cas de non-respect des présentes
        CGU, d&apos;utilisation abusive du service ou de comportement frauduleux.
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">10. Modification des CGU</h2>
      <p className="text-neutral-700 leading-relaxed">
        BriefCraft peut modifier les présentes CGU à tout moment. Les utilisateurs seront informés
        par email de tout changement important.
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">11. Droit applicable</h2>
      <p className="text-neutral-700 leading-relaxed">
        Les présentes CGU sont régies par le droit français. Tout litige sera soumis aux tribunaux
        compétents du ressort du siège social de BriefCraft.
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">12. Contact</h2>
      <p className="text-neutral-700 leading-relaxed">
        Pour toute question relative aux CGU, contactez-nous à : <strong>contact@briefcraft.app</strong>
      </p>
    </>
  );
}
