"use client";

import { useState } from "react";
import { Button } from "../ui/button";

interface BriefOutputProps {
  content: string;
  keyword: string;
}

export function BriefOutput({ content, keyword }: BriefOutputProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-neutral-900">Brief généré</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={copyToClipboard}>
            {copied ? "Copié !" : "Copier"}
          </Button>
          <Button variant="outline" size="sm" onClick={downloadMarkdown}>
            Export .md
          </Button>
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
