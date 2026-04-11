"use client";

import { useState } from "react";
import { Button } from "../ui/button";

interface BriefOutputProps {
  id?: string;
  content: string;
  keyword: string;
}

export function BriefOutput({ id, content, keyword }: BriefOutputProps) {
  const [copied, setCopied] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyShareLink = async () => {
    if (!id) return;
    const url = `${window.location.origin}/b/${id}`;
    await navigator.clipboard.writeText(url);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  };

  const downloadMarkdown = () => {
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `brief-seo-${keyword.toLowerCase().replace(/\s+/g, "-")}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-lg font-semibold text-neutral-900">Brief généré</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={copyToClipboard}>
            {copied ? "Copié !" : "Copier"}
          </Button>
          <Button variant="outline" size="sm" onClick={downloadMarkdown}>
            Export .md
          </Button>
          {id && (
            <Button variant="outline" size="sm" onClick={copyShareLink}>
              <svg className="mr-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              {shareCopied ? "Lien copié !" : "Partager"}
            </Button>
          )}
        </div>
      </div>
      <div className="rounded-xl border border-neutral-200 bg-white p-8">
        <div className="prose prose-neutral prose-sm max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-neutral-700">
            {content}
          </pre>
        </div>
      </div>
    </div>
  );
}
