import { getAllVehicles, brandsOf } from "@/lib/vehicle-store";
import { VeExplorer } from "@/components/ve/ve-explorer";
import { BatteryGuide } from "@/components/ve/battery-guide";

export default async function VoituresElectriquesPage() {
  const vehicles = await getAllVehicles();
  const brands = brandsOf(vehicles);
  const neuf = vehicles.filter((v) => v.status === "neuf").length;
  const occasion = vehicles.length - neuf;

  return (
    <>
      <div className="mb-8">
        <h1 className="font-serif text-3xl sm:text-4xl">Comparateur de voitures électriques</h1>
        <p className="mt-2 max-w-2xl text-neutral-600">
          {vehicles.length} modèles &amp; versions du marché français — filtrez par segment,
          batterie, marque, prix (min/max), autonomie, coffre ou charge 800&nbsp;V.
        </p>
        <div className="mt-4 flex flex-wrap gap-2.5 text-sm">
          <Stat value={vehicles.length} label="modèles & versions" />
          <Stat value={neuf} label="neufs" />
          {occasion > 0 && <Stat value={occasion} label="occasion" />}
          <Stat value={brands.length} label="marques" />
        </div>
      </div>

      <VeExplorer vehicles={vehicles} brands={brands} />

      <div id="batteries" className="scroll-mt-20">
        <BatteryGuide />
      </div>
    </>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <span className="rounded-xl border border-neutral-200 bg-white px-3 py-2">
      <strong className="text-neutral-900">{value}</strong>{" "}
      <span className="text-neutral-500">{label}</span>
    </span>
  );
}
