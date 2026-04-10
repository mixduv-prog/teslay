import { prisma } from "./prisma";

export async function canGenerate(userId: string): Promise<boolean> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return false;

  if (user.plan === "FREE") return user.credits > 0;
  if (user.plan === "STARTER") {
    const monthStart = new Date();
    monthStart.setDate(1);
    monthStart.setHours(0, 0, 0, 0);
    const count = await prisma.brief.count({
      where: { userId, createdAt: { gte: monthStart } },
    });
    return count < 50;
  }
  return true; // PRO = illimité
}

export async function consumeCredit(userId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.plan === "FREE") {
    await prisma.user.update({
      where: { id: userId },
      data: { credits: { decrement: 1 } },
    });
  }
}

export async function getRemainingCredits(userId: string): Promise<number> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return 0;

  if (user.plan === "FREE") return user.credits;
  if (user.plan === "STARTER") {
    const monthStart = new Date();
    monthStart.setDate(1);
    monthStart.setHours(0, 0, 0, 0);
    const count = await prisma.brief.count({
      where: { userId, createdAt: { gte: monthStart } },
    });
    return Math.max(0, 50 - count);
  }
  return -1; // PRO = illimité
}
