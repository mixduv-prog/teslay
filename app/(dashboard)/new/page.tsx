"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { BriefForm } from "@/components/brief/brief-form";

export default function NewBriefPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-2xl text-neutral-900">Nouveau brief SEO</h1>
        <p className="mt-2 text-sm text-neutral-500">
          Renseignez les informations ci-dessous pour générer votre brief.
        </p>
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl border border-neutral-200 bg-white p-8">
          <BriefForm />
        </div>
      </div>
    </div>
  );
}
