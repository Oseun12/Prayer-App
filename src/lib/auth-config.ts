import GoogleProvider from "next-auth/providers/google";
import { DefaultSession } from "next-auth";

interface ExtendedSession extends DefaultSession {
  user: {
    id: string;
  } & DefaultSession["user"];
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session({ session, token }: { session: ExtendedSession; token: { sub?: string } }) {
      if (session.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
  },
};