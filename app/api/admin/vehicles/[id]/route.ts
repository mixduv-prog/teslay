import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { getPool } from "@/lib/db";
import { COLUMNS, normalize } from "../route";

// PUT : modifier un véhicule.
export async function PUT(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  const { id } = await ctx.params;

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }

  const pool = getPool();
  if (!pool) return NextResponse.json({ error: "Base MySQL non configurée" }, { status: 503 });

  try {
    const data = normalize({ ...body, id });
    const cols = COLUMNS.filter((c) => c !== "id");
    const setClause = cols.map((c) => `\`${c}\` = ?`).join(", ");
    const values = cols.map((c) => data[c]);
    await pool.query(`UPDATE vehicles SET ${setClause} WHERE id = ?`, [...values, id]);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Échec mise à jour", detail: String(e) }, { status: 500 });
  }
}

// DELETE : supprimer un véhicule.
export async function DELETE(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  const { id } = await ctx.params;

  const pool = getPool();
  if (!pool) return NextResponse.json({ error: "Base MySQL non configurée" }, { status: 503 });

  try {
    await pool.query("DELETE FROM vehicles WHERE id = ?", [id]);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Échec suppression", detail: String(e) }, { status: 500 });
  }
}
