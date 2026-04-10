import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { generateBrief } from "@/lib/anthropic";
import { canGenerate, consumeCredit } from "@/lib/usage";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const allowed = await canGenerate(session.user.id);
  if (!allowed) {
    return NextResponse.json(
      { error: "Vous avez atteint votre limite de briefs. Passez à un plan supérieur." },
      { status: 403 }
    );
  }

  const body = await req.json();
  const { keyword, language, tone, intent, wordCount, competitors, notes } = body;

  if (!keyword) {
    return NextResponse.json({ error: "Le mot-clé est requis" }, { status: 400 });
  }

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
      { error: "Erreur lors de la génération du brief" },
      { status: 500 }
    );
  }
}
