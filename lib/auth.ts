import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const providers: NextAuthOptions["providers"] = [];

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    })
  );
}

export const authOptions: NextAuthOptions = {
  providers,
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, profile }) {
      // On first sign-in, store Google sub as our user identifier
      if (account && profile) {
        token.googleId = (profile as { sub?: string }).sub;
        token.email = profile.email;
        token.name = profile.name;
        token.picture = (profile as { picture?: string }).picture;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = (token.sub || token.googleId) as string;
        session.user.email = (token.email as string) || session.user.email;
        session.user.name = (token.name as string) || session.user.name;
        session.user.image = (token.picture as string) || session.user.image;

        // Try to load user data from DB, but don't fail auth if DB is down
        try {
          const { prisma } = await import("./prisma");
          if (session.user.email) {
            const dbUser = await prisma.user.upsert({
              where: { email: session.user.email },
              update: {
                name: session.user.name || null,
                image: session.user.image || null,
              },
              create: {
                email: session.user.email,
                name: session.user.name || null,
                image: session.user.image || null,
                emailVerified: new Date(),
              },
              select: { id: true, plan: true, credits: true },
            });
            session.user.id = dbUser.id;
            session.user.plan = dbUser.plan;
            session.user.credits = dbUser.credits;
          }
        } catch (error) {
          console.error("[auth] session DB error:", error);
          // Fallback: use Google ID, set default plan
          session.user.plan = "FREE";
          session.user.credits = 3;
        }
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  debug: false,
};
