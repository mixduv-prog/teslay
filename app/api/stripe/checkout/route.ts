import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getStripe, PLANS } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const body = await req.json();
    const plan = body.plan as string;

    if (!plan || (plan !== "STARTER" && plan !== "PRO")) {
      return NextResponse.json({ error: "Plan invalide" }, { status: 400 });
    }

    const planKey = plan as "STARTER" | "PRO";
    const planConfig = PLANS[planKey];
    if (!("priceId" in planConfig) || !planConfig.priceId) {
      return NextResponse.json(
        { error: `Price ID manquant pour ${planKey}. Vérifiez STRIPE_${planKey}_PRICE_ID.` },
        { status: 500 }
      );
    }

    // Upsert user to ensure they exist
    const user = await prisma.user.upsert({
      where: { email: session.user.email },
      update: {},
      create: {
        email: session.user.email,
        name: session.user.name || null,
        image: session.user.image || null,
        emailVerified: new Date(),
      },
    });

    let customerId = user.stripeCustomerId;
    if (!customerId) {
      const customer = await getStripe().customers.create({
        email: user.email,
        metadata: { userId: user.id },
      });
      customerId = customer.id;
      await prisma.user.update({
        where: { id: user.id },
        data: { stripeCustomerId: customerId },
      });
    }

    const origin = req.headers.get("origin") || process.env.NEXTAUTH_URL || "https://getbreefy.com";

    const checkoutSession = await getStripe().checkout.sessions.create({
      customer: customerId,
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: planConfig.priceId, quantity: 1 }],
      success_url: `${origin}/billing?success=true`,
      cancel_url: `${origin}/billing?canceled=true`,
      metadata: { userId: user.id, plan: planKey },
    });

    if (!checkoutSession.url) {
      return NextResponse.json(
        { error: "Stripe n'a pas retourné d'URL de checkout" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("[api/stripe/checkout] error:", error);
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json(
      { error: `Erreur Stripe : ${message}` },
      { status: 500 }
    );
  }
}
