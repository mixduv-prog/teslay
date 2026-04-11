import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Breefy",
  description: "Politique de confidentialité et protection des données personnelles de Breefy.",
};

export default function PrivacyPage() {
  return (
    <>
      <h1 className="font-serif text-4xl text-neutral-900 mb-2">Politique de confidentialité</h1>
      <p className="text-sm text-neutral-500 mb-10">Dernière mise à jour : 11 avril 2026</p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">1. Introduction</h2>
      <p className="text-neutral-700 leading-relaxed">
        Breefy accorde une grande importance à la protection de vos données personnelles. La
        présente politique explique quelles données nous collectons, comment nous les utilisons et
        quels sont vos droits, conformément au Règlement Général sur la Protection des Données (RGPD).
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">2. Responsable du traitement</h2>
      <p className="text-neutral-700 leading-relaxed">
        Le responsable du traitement est Breefy. Pour toute question relative au traitement de
        vos données, contactez-nous à : <strong>privacy@getbreefy.com</strong>
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">3. Données collectées</h2>
      <p className="text-neutral-700 leading-relaxed">
        Nous collectons les données suivantes lorsque vous utilisez Breefy :
      </p>
      <ul className="text-neutral-700 leading-relaxed list-disc pl-6 mt-4">
        <li><strong>Données de compte</strong> : nom, adresse email, photo de profil (via Google OAuth)</li>
        <li><strong>Données de paiement</strong> : gérées exclusivement par Stripe, aucune donnée bancaire n&apos;est stockée sur nos serveurs</li>
        <li><strong>Données d&apos;usage</strong> : briefs générés, historique de consultation, préférences</li>
        <li><strong>Données techniques</strong> : adresse IP, type de navigateur, pages visitées</li>
      </ul>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">4. Finalités du traitement</h2>
      <p className="text-neutral-700 leading-relaxed">Vos données sont utilisées pour :</p>
      <ul className="text-neutral-700 leading-relaxed list-disc pl-6 mt-4">
        <li>Fournir et améliorer le service Breefy</li>
        <li>Gérer votre compte et vos abonnements</li>
        <li>Vous envoyer des emails transactionnels (bienvenue, confirmation de paiement)</li>
        <li>Prévenir les abus et sécuriser la plateforme</li>
        <li>Respecter nos obligations légales</li>
      </ul>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">5. Base légale</h2>
      <p className="text-neutral-700 leading-relaxed">
        Le traitement de vos données repose sur : l&apos;exécution du contrat (fourniture du service),
        votre consentement (cookies, marketing) et nos obligations légales (facturation, fiscalité).
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">6. Sous-traitants</h2>
      <p className="text-neutral-700 leading-relaxed">
        Pour faire fonctionner le service, nous utilisons les sous-traitants suivants :
      </p>
      <ul className="text-neutral-700 leading-relaxed list-disc pl-6 mt-4">
        <li><strong>Vercel</strong> (hébergement) — États-Unis, conforme DPF</li>
        <li><strong>Neon</strong> (base de données) — Union Européenne</li>
        <li><strong>Stripe</strong> (paiements) — États-Unis, conforme DPF</li>
        <li><strong>Anthropic</strong> (génération IA) — États-Unis, conforme DPF</li>
        <li><strong>Google</strong> (authentification OAuth) — États-Unis, conforme DPF</li>
      </ul>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">7. Durée de conservation</h2>
      <p className="text-neutral-700 leading-relaxed">
        Vos données de compte sont conservées tant que votre compte est actif. Les données de
        facturation sont conservées 10 ans conformément aux obligations légales. Les briefs générés
        sont conservés tant que votre compte existe ; vous pouvez les supprimer à tout moment.
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">8. Vos droits</h2>
      <p className="text-neutral-700 leading-relaxed">
        Conformément au RGPD, vous disposez des droits suivants :
      </p>
      <ul className="text-neutral-700 leading-relaxed list-disc pl-6 mt-4">
        <li>Droit d&apos;accès à vos données</li>
        <li>Droit de rectification</li>
        <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
        <li>Droit à la limitation du traitement</li>
        <li>Droit à la portabilité</li>
        <li>Droit d&apos;opposition</li>
        <li>Droit d&apos;introduire une réclamation auprès de la CNIL</li>
      </ul>
      <p className="text-neutral-700 leading-relaxed mt-4">
        Pour exercer ces droits, contactez-nous à : <strong>privacy@getbreefy.com</strong>
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">9. Cookies</h2>
      <p className="text-neutral-700 leading-relaxed">
        Breefy utilise uniquement des cookies strictement nécessaires au fonctionnement du
        service (session d&apos;authentification). Aucun cookie publicitaire ou de tracking
        tiers n&apos;est utilisé sans votre consentement explicite.
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">10. Sécurité</h2>
      <p className="text-neutral-700 leading-relaxed">
        Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger
        vos données : chiffrement HTTPS, authentification sécurisée, sauvegardes régulières, accès
        restreint aux données.
      </p>

      <h2 className="font-serif text-2xl text-neutral-900 mt-10 mb-4">11. Modifications</h2>
      <p className="text-neutral-700 leading-relaxed">
        Nous pouvons mettre à jour cette politique à tout moment. Toute modification importante
        vous sera notifiée par email.
      </p>
    </>
  );
}
