import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { normalize } from "../route";

// PUT : modifier un véhicule.
export async function PUT(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  const { id } = await ctx.params;
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }

  try {
    const { prisma } = await import("@/lib/prisma");
    const data = normalize({ ...body, id });
    const { id: _omit, ...update } = data;
    void _omit;
    const updated = await prisma.vehicle.update({ where: { id }, data: update });
    return NextResponse.json({ vehicle: updated });
  } catch (e) {
    return NextResponse.json({ error: "Échec mise à jour", detail: String(e) }, { status: 500 });
  }
}

// DELETE : supprimer un véhicule.
export async function DELETE(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  const { id } = await ctx.params;
  try {
    const { prisma } = await import("@/lib/prisma");
    await prisma.vehicle.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Échec suppression", detail: String(e) }, { status: 500 });
  }
}
