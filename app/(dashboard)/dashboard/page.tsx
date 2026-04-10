"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BriefCard } from "@/components/dashboard/brief-card";
import { CreditsDisplay } from "@/components/dashboard/credits-display";

interface Brief {
  id: string;
  keyword: string;
  language: string;
  intent: string;
  createdAt: string;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [briefs, setBriefs] = useState<Brief[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/briefs")
        .then((res) => res.json())
        .then((data) => {
          setBriefs(data.briefs || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [status]);

  if (status === "loading" || loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl text-neutral-900">
            Bonjour{session?.user?.name ? `, ${session.user.name}` : ""} !
          </h1>
          <div className="mt-2">
            <CreditsDisplay />
          </div>
        </div>
        <Link href="/new">
          <Button>
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Nouveau brief
          </Button>
        </Link>
      </div>

      {briefs.length === 0 ? (
        <div className="mt-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100">
            <svg className="h-8 w-8 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <h3 className="mt-4 text-base font-medium text-neutral-900">Aucun brief</h3>
          <p className="mt-1 text-sm text-neutral-500">
            Créez votre premier brief SEO en quelques secondes.
          </p>
          <div className="mt-6">
            <Link href="/new">
              <Button>Créer mon premier brief</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-8 space-y-3">
          {briefs.map((brief) => (
            <BriefCard
              key={brief.id}
              id={brief.id}
              keyword={brief.keyword}
              language={brief.language}
              intent={brief.intent}
              createdAt={brief.createdAt}
            />
          ))}
        </div>
      )}
    </div>
  );
}
