"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function SettingsPage() {
  const { data: session, status } = useSession();
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
        <h1 className="font-serif text-2xl text-neutral-900">Paramètres</h1>
        <p className="mt-2 text-sm text-neutral-500">Gérez votre compte et vos préférences.</p>
      </div>

      <div className="space-y-6">
        <Card>
          <h2 className="text-base font-semibold text-neutral-900">Informations du compte</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-500">Email</label>
              <p className="mt-1 text-sm text-neutral-900">{session?.user?.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-500">Nom</label>
              <p className="mt-1 text-sm text-neutral-900">{session?.user?.name || "Non renseigné"}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-500">Plan actuel</label>
              <p className="mt-1 text-sm text-neutral-900">{session?.user?.plan}</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-base font-semibold text-neutral-900">Utilisation</h2>
          <div className="mt-4">
            {session?.user?.plan === "FREE" && (
              <p className="text-sm text-neutral-600">
                Il vous reste <strong>{session.user.credits}</strong> brief{session.user.credits !== 1 ? "s" : ""} gratuit{session.user.credits !== 1 ? "s" : ""}.
              </p>
            )}
            {session?.user?.plan === "PRO" && (
              <p className="text-sm text-neutral-600">
                Vous disposez de briefs illimités avec votre plan Pro.
              </p>
            )}
            {session?.user?.plan === "STARTER" && (
              <p className="text-sm text-neutral-600">
                Vous disposez de 50 briefs par mois avec votre plan Starter.
              </p>
            )}
          </div>
        </Card>

        <Card>
          <h2 className="text-base font-semibold text-red-600">Zone dangereuse</h2>
          <p className="mt-2 text-sm text-neutral-500">
            La suppression de votre compte est irréversible. Tous vos briefs seront supprimés.
          </p>
          <button className="mt-4 rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
            Supprimer mon compte
          </button>
        </Card>
      </div>
    </div>
  );
}
