import Link from "next/link";
import { Badge } from "../ui/badge";

interface BriefCardProps {
  id: string;
  keyword: string;
  language: string;
  intent: string;
  createdAt: string;
}

export function BriefCard({ id, keyword, language, intent, createdAt }: BriefCardProps) {
  const date = new Date(createdAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      href={`/brief/${id}`}
      className="group block rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:shadow-md hover:border-neutral-300"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="truncate text-base font-semibold text-neutral-900 group-hover:text-green-600 transition-colors">
            {keyword}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <Badge>{language}</Badge>
            <Badge variant="green">{intent}</Badge>
          </div>
        </div>
        <span className="ml-4 flex-shrink-0 text-xs text-neutral-400">{date}</span>
      </div>
    </Link>
  );
}
