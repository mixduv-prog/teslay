"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select } from "../ui/select";
import { templates, getTemplateById } from "@/lib/templates";

const languages = [
  { value: "Français", label: "Français" },
  { value: "English", label: "English" },
  { value: "Español", label: "Español" },
  { value: "Deutsch", label: "Deutsch" },
  { value: "Italiano", label: "Italiano" },
  { value: "Português", label: "Português" },
];

const tones = [
  { value: "Professionnel", label: "Professionnel" },
  { value: "Conversationnel", label: "Conversationnel" },
  { value: "Expert", label: "Expert / Technique" },
  { value: "Pédagogique", label: "Pédagogique" },
  { value: "Commercial", label: "Commercial" },
];

const intents = [
  { value: "Informationnel", label: "Informationnel" },
  { value: "Transactionnel", label: "Transactionnel" },
  { value: "Navigationnel", label: "Navigationnel" },
  { value: "Commercial", label: "Investigation commerciale" },
];

export function BriefForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const [formValues, setFormValues] = useState({
    intent: "Informationnel",
    tone: "Professionnel",
    wordCount: 1500,
    notes: "",
  });

  const handleTemplateClick = (id: string) => {
    const template = getTemplateById(id);
    if (!template) return;
    setSelectedTemplate(id);
    setFormValues({
      intent: template.intent,
      tone: template.tone,
      wordCount: template.wordCount,
      notes: template.notesTemplate,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      keyword: formData.get("keyword") as string,
      language: formData.get("language") as string,
      tone: formData.get("tone") as string,
      intent: formData.get("intent") as string,
      wordCount: Number(formData.get("wordCount")),
      competitors: formData.get("competitors") as string,
      notes: formData.get("notes") as string,
    };

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Erreur lors de la génération");
      }

      const brief = await res.json();
      router.push(`/brief/${brief.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          Template (optionnel)
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {templates.map((template) => (
            <button
              key={template.id}
              type="button"
              onClick={() => handleTemplateClick(template.id)}
              className={`rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ${
                selectedTemplate === template.id
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300"
              }`}
            >
              <div className="font-medium">{template.name}</div>
              <div className="mt-0.5 text-xs text-neutral-500 line-clamp-1">
                {template.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      <Input
        id="keyword"
        name="keyword"
        label="Mot-clé principal"
        placeholder="Ex: stratégie de contenu, meilleur CRM, recette pain maison..."
        required
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <Select id="language" name="language" label="Langue" options={languages} />
        <Select
          id="tone"
          name="tone"
          label="Ton"
          options={tones}
          value={formValues.tone}
          onChange={(e) => setFormValues({ ...formValues, tone: e.target.value })}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Select
          id="intent"
          name="intent"
          label="Intention de recherche"
          options={intents}
          value={formValues.intent}
          onChange={(e) => setFormValues({ ...formValues, intent: e.target.value })}
        />
        <Input
          id="wordCount"
          name="wordCount"
          label="Nombre de mots cible"
          type="number"
          value={formValues.wordCount}
          onChange={(e) =>
            setFormValues({ ...formValues, wordCount: Number(e.target.value) })
          }
          min={500}
          max={5000}
          step={100}
        />
      </div>

      <Input
        id="competitors"
        name="competitors"
        label="URLs concurrentes (optionnel)"
        placeholder="https://concurrent1.com/article, https://concurrent2.com/article"
      />

      <Textarea
        id="notes"
        name="notes"
        label="Notes additionnelles (optionnel)"
        placeholder="Contexte, angle spécifique, points à couvrir..."
        rows={4}
        value={formValues.notes}
        onChange={(e) => setFormValues({ ...formValues, notes: e.target.value })}
      />

      <Button type="submit" size="lg" loading={loading} className="w-full">
        {loading ? "Génération en cours..." : "Générer le brief SEO"}
      </Button>
    </form>
  );
}
