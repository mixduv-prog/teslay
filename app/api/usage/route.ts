import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getRemainingCredits } from "@/lib/usage";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const remaining = await getRemainingCredits(session.user.id);

  return NextResponse.json({
    plan: session.user.plan,
    remaining,
    unlimited: remaining === -1,
  });
}
