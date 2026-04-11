import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { generateBrief } from "@/lib/anthropic";
import { canGenerate, consumeCredit } from "@/lib/usage";
import { rateLimit } from "@/lib/rate-limit";

const generateSchema = z.object({
  keyword: z.string().min(2).max(200),
  language: z.string().max(50).optional(),
  tone: z.string().max(50).optional(),
  intent: z.string().max(50).optional(),
  wordCount: z.number().int().min(300).max(10000).optional(),
  competitors: z.string().max(2000).optional(),
  notes: z.string().max(2000).optional(),
});

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  // Rate limit: max 10 briefs per minute per user
  const rl = rateLimit(`generate:${session.user.id}`, {
    limit: 10,
    windowMs: 60 * 1000,
  });
  if (!rl.success) {
    return NextResponse.json(
      { error: "Trop de requêtes. Patientez quelques instants." },
      { status: 429 }
    );
  }

  const allowed = await canGenerate(session.user.id);
  if (!allowed) {
    return NextResponse.json(
      { error: "Vous avez atteint votre limite de briefs. Passez à un plan supérieur." },
      { status: 403 }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }

  const parsed = generateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides", details: parsed.error.issues },
      { status: 400 }
    );
  }

  const { keyword, language, tone, intent, wordCount, competitors, notes } = parsed.data;

  try {
    const output = await generateBrief({
      keyword,
      language: language || "Français",
      tone: tone || "Professionnel",
      intent: intent || "Informationnel",
      wordCount: wordCount || 1500,
      competitors,
      notes,
    });

    const brief = await prisma.brief.create({
      data: {
        userId: session.user.id,
        keyword,
        language: language || "Français",
        tone: tone || "Professionnel",
        intent: intent || "Informationnel",
        wordCount: wordCount || 1500,
        competitors,
        notes,
        output,
      },
    });

    await consumeCredit(session.user.id);

    return NextResponse.json(brief);
  } catch (error) {
    console.error("Generation error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la génération du brief. Réessayez dans quelques instants." },
      { status: 500 }
    );
  }
}
