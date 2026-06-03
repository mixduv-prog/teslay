// Encart pédagogique : différences de batteries + état de santé (SoH).
export function BatteryGuide() {
  return (
    <section className="mt-16">
      <div className="mb-6 text-center">
        <h2 className="font-serif text-3xl">Comprendre les batteries</h2>
        <p className="mt-2 text-neutral-500">LFP, NMC… et qu'est-ce qu'un bon état de santé (SoH) ?</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {/* LFP */}
        <article className="rounded-3xl border border-emerald-200 bg-gradient-to-b from-emerald-50 to-white p-6">
          <div className="mb-3 inline-flex rounded-full bg-emerald-600 px-3 py-1 text-sm font-semibold text-white">
            LFP
          </div>
          <h3 className="font-serif text-xl">Lithium-Fer-Phosphate</h3>
          <p className="mt-1 text-sm text-neutral-600">
            La chimie « éco » et endurante, sans cobalt. De plus en plus utilisée sur l'entrée et le
            milieu de gamme (Tesla Standard, BYD « Blade », Dacia, Citroën, MG…).
          </p>
          <ul className="mt-4 space-y-1.5 text-sm">
            <Pro>Durée de vie élevée (3 000+ cycles)</Pro>
            <Pro>Se charge à 100 % au quotidien sans l'abîmer</Pro>
            <Pro>Très stable thermiquement (sûre) &amp; moins chère</Pro>
            <Con>Densité plus faible → plus lourde / moins d'autonomie</Con>
            <Con>Moins performante par grand froid</Con>
          </ul>
        </article>

        {/* NMC */}
        <article className="rounded-3xl border border-sky-200 bg-gradient-to-b from-sky-50 to-white p-6">
          <div className="mb-3 inline-flex rounded-full bg-sky-600 px-3 py-1 text-sm font-semibold text-white">
            NMC
          </div>
          <h3 className="font-serif text-xl">Nickel-Manganèse-Cobalt</h3>
          <p className="mt-1 text-sm text-neutral-600">
            La chimie « performance », dense en énergie. Domine le milieu et le haut de gamme
            (proche du <strong>NCA</strong>, utilisé par Tesla sur les versions Grande Autonomie).
          </p>
          <ul className="mt-4 space-y-1.5 text-sm">
            <Pro>Meilleure autonomie à poids égal</Pro>
            <Pro>Plus performante par temps froid</Pro>
            <Pro>Recharge rapide souvent plus élevée</Pro>
            <Con>Plus chère (nickel + cobalt)</Con>
            <Con>Charge quotidienne conseillée à ~80 %</Con>
          </ul>
        </article>

        {/* SoH */}
        <article className="rounded-3xl border border-neutral-200 bg-white p-6">
          <div className="mb-3 inline-flex rounded-full bg-neutral-900 px-3 py-1 text-sm font-semibold text-white">
            SoH
          </div>
          <h3 className="font-serif text-xl">État de santé de la batterie</h3>
          <p className="mt-1 text-sm text-neutral-600">
            Le <strong>SoH</strong> (<em>State of Health</em>) = la capacité restante par rapport au
            neuf. 100 % à la sortie d'usine, il baisse lentement avec le temps et les cycles.
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <SohBar pct={95} tone="emerald" label="≥ 90 % — excellent (quasi neuf)" />
            <SohBar pct={83} tone="lime" label="80–90 % — bon, usure normale" />
            <SohBar pct={73} tone="amber" label="70–80 % — correct, autonomie en baisse" />
            <SohBar pct={60} tone="rose" label="< 70 % — faible (souvent seuil de garantie)" />
          </div>
          <p className="mt-4 text-xs text-neutral-500">
            💡 Garantie batterie courante : <strong>8 ans / 160 000 km</strong> avec SoH garanti
            ≥ 70 %. À l'achat d'occasion, demandez le <strong>certificat SoH</strong> — visez ≥ 90 %
            sur un modèle récent.
          </p>
        </article>
      </div>
    </section>
  );
}

function Pro({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-neutral-700">
      <span className="text-emerald-600">✓</span>
      {children}
    </li>
  );
}
function Con({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-neutral-500">
      <span className="text-rose-400">✕</span>
      {children}
    </li>
  );
}

function SohBar({
  pct,
  tone,
  label,
}: {
  pct: number;
  tone: "emerald" | "lime" | "amber" | "rose";
  label: string;
}) {
  const colors: Record<string, string> = {
    emerald: "bg-emerald-500",
    lime: "bg-lime-500",
    amber: "bg-amber-500",
    rose: "bg-rose-500",
  };
  return (
    <div>
      <div className="mb-0.5 text-xs text-neutral-600">{label}</div>
      <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
        <div className={`h-full rounded-full ${colors[tone]}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
