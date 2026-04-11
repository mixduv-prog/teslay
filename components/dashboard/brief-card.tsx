"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge } from "../ui/badge";

interface BriefCardProps {
  id: string;
  keyword: string;
  language: string;
  intent: string;
  createdAt: string;
  onDelete?: (id: string) => void;
}

export function BriefCard({ id, keyword, language, intent, createdAt, onDelete }: BriefCardProps) {
  const [deleting, setDeleting] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const date = new Date(createdAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!confirming) {
      setConfirming(true);
      setTimeout(() => setConfirming(false), 3000);
      return;
    }
    setDeleting(true);
    try {
      const res = await fetch(`/api/briefs?id=${id}`, { method: "DELETE" });
      if (res.ok && onDelete) onDelete(id);
    } finally {
      setDeleting(false);
      setConfirming(false);
    }
  };

  return (
    <Link
      href={`/brief/${id}`}
      className="group relative block rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:shadow-md hover:border-neutral-300"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0 pr-8">
          <h3 className="truncate text-base font-semibold text-neutral-900 group-hover:text-green-600 transition-colors">
            {keyword}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <Badge>{language}</Badge>
            <Badge variant="green">{intent}</Badge>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-neutral-400">{date}</span>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className={`rounded-lg p-1.5 transition-colors ${
              confirming
                ? "bg-red-50 text-red-600"
                : "text-neutral-300 hover:bg-red-50 hover:text-red-600"
            }`}
            title={confirming ? "Cliquer à nouveau pour confirmer" : "Supprimer"}
          >
            {deleting ? (
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}
