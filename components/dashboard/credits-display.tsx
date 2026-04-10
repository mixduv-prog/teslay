"use client";

import { useSession } from "next-auth/react";
import { Badge } from "../ui/badge";

export function CreditsDisplay() {
  const { data: session } = useSession();

  if (!session?.user) return null;

  const plan = session.user.plan;
  const credits = session.user.credits;

  return (
    <div className="flex items-center gap-3">
      <Badge variant={plan === "PRO" ? "green" : plan === "STARTER" ? "green" : "default"}>
        {plan}
      </Badge>
      {plan === "FREE" && (
        <span className="text-sm text-neutral-500">
          {credits} brief{credits !== 1 ? "s" : ""} restant{credits !== 1 ? "s" : ""}
        </span>
      )}
      {plan === "PRO" && (
        <span className="text-sm text-neutral-500">Briefs illimités</span>
      )}
    </div>
  );
}
