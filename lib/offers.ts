// Génération d'offres pour un véhicule.
// ⚠️ Voir app/api/offers/route.ts : ces offres sont ILLUSTRATIVES (dérivées du
// prix catalogue), pas des offres réelles scannées en direct.

export interface Offer {
  source: string;
  type: "Achat" | "LOA" | "LLD";
  label: string;
  priceEur?: number;
  monthlyEur?: number;
  durationMonths?: number;
  note: string;
  isExample: boolean;
}

export function buildOffers(priceFromEur: number | null): Offer[] {
  if (priceFromEur === null) {
    return [
      {
        source: "exemple",
        type: "Achat",
        label: "Prix catalogue non disponible",
        note: "Le prix de départ n'est pas confirmé pour ce modèle — à vérifier sur le site officiel.",
        isExample: true,
      },
    ];
  }

  const bonus = 4000;
  const loaMonthly = Math.round((priceFromEur * 0.011) / 10) * 10;
  const lldMonthly = Math.round((priceFromEur * 0.009) / 10) * 10;

  return [
    {
      source: "exemple",
      type: "Achat",
      label: "Achat comptant (catalogue)",
      priceEur: priceFromEur,
      note: "Prix de départ constructeur. Bonus écologique éventuel non déduit.",
      isExample: true,
    },
    {
      source: "exemple",
      type: "Achat",
      label: "Achat avec bonus écologique (estimé)",
      priceEur: Math.max(priceFromEur - bonus, 0),
      note: `Estimation avec ${bonus.toLocaleString("fr-FR")} € de bonus — éligibilité à vérifier.`,
      isExample: true,
    },
    {
      source: "exemple",
      type: "LOA",
      label: "Location avec option d'achat (estimée)",
      monthlyEur: loaMonthly,
      durationMonths: 37,
      note: "Mensualité illustrative, hors apport et hors conditions réelles.",
      isExample: true,
    },
    {
      source: "exemple",
      type: "LLD",
      label: "Location longue durée (estimée)",
      monthlyEur: lldMonthly,
      durationMonths: 48,
      note: "Mensualité illustrative — les vraies offres LLD varient fortement selon le kilométrage.",
      isExample: true,
    },
  ];
}
