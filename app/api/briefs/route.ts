import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    const brief = await prisma.brief.findFirst({
      where: { id, userId: session.user.id },
    });
    if (!brief) {
      return NextResponse.json({ error: "Brief introuvable" }, { status: 404 });
    }
    return NextResponse.json({ brief });
  }

  const briefs = await prisma.brief.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      keyword: true,
      language: true,
      intent: true,
      createdAt: true,
    },
  });

  return NextResponse.json({ briefs });
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID requis" }, { status: 400 });
  }

  const brief = await prisma.brief.findFirst({
    where: { id, userId: session.user.id },
  });

  if (!brief) {
    return NextResponse.json({ error: "Brief introuvable" }, { status: 404 });
  }

  await prisma.brief.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
