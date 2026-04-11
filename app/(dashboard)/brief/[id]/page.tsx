"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BriefOutput } from "@/components/brief/brief-output";

interface BriefData {
  id: string;
  keyword: string;
  language: string;
  tone: string;
  intent: string;
  wordCount: number;
  competitors: string | null;
  notes: string | null;
  output: string;
  createdAt: string;
}

export default function BriefPage() {
  const { status } = useSession();
  const router = useRouter();
  const params = useParams();
  const [brief, setBrief] = useState<BriefData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated" && params.id) {
      fetch(`/api/briefs?id=${params.id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Brief introuvable");
          return res.json();
        })
        .then((data) => {
          setBrief(data.brief);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [status, params.id]);

  if (status === "loading" || loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent" />
      </div>
    );
  }

  if (error || !brief) {
    return (
      <div className="text-center py-20">
        <p className="text-neutral-500">{error || "Brief introuvable"}</p>
        <Link href="/dashboard" className="mt-4 inline-block">
          <Button variant="outline">Retour au dashboard</Button>
        </Link>
      </div>
    );
  }

  const date = new Date(brief.createdAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Retour
        </Link>
        <div className="mt-4 flex items-start justify-between">
          <div>
            <h1 className="font-serif text-2xl text-neutral-900">{brief.keyword}</h1>
            <div className="mt-2 flex items-center gap-2">
              <Badge>{brief.language}</Badge>
              <Badge variant="green">{brief.intent}</Badge>
              <Badge>{brief.tone}</Badge>
              <span className="text-xs text-neutral-400">{date}</span>
            </div>
          </div>
        </div>
      </div>
      <BriefOutput id={brief.id} content={brief.output} keyword={brief.keyword} />
    </div>
  );
}
