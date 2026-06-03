import { cookies } from "next/headers";
import crypto from "crypto";

export const ADMIN_COOKIE = "ve_admin";

/** Jeton dérivé du mot de passe admin (jamais le mot de passe en clair en cookie). */
export function adminToken(password: string): string {
  const secret = process.env.NEXTAUTH_SECRET || "ve-fallback-secret";
  return crypto.createHmac("sha256", secret).update(password).digest("hex");
}

function expectedToken(): string | null {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return null;
  return adminToken(pw);
}

/** Vérifie la requête en lisant le cookie (à utiliser dans les routes/admin). */
export async function isAdmin(): Promise<boolean> {
  const expected = expectedToken();
  if (!expected) return false;
  const store = await cookies();
  return store.get(ADMIN_COOKIE)?.value === expected;
}

/** Le mot de passe fourni est-il correct ? (comparaison à temps constant) */
export function checkPassword(password: string): boolean {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return false;
  const a = Buffer.from(password);
  const b = Buffer.from(pw);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
