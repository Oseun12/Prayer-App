import { allPrayers } from "./lib/prayerData";
import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

export type Prayer = {
    id: string;
    content: string;
    verse?: string;
  };

  // export interface User {
  //   id: string;
  //   name?: string | null;
  //   email?: string | null;
  //   image?: string | null;
  // }

  export interface Bookmark {
    prayerId: string;
    userId: string;
    createdAt?: Date;
  }

  type PrayerSlug = keyof typeof allPrayers;

  declare module 'next' {
    interface PageProps {
      params: { slug: string } | { slug: PrayerSlug };
    }
  }

  declare module "next-auth" {
    interface Session extends DefaultSession {
      user: {
        id: string;
      } & DefaultSession["user"];
    }
  
    interface User extends DefaultUser {
      id: string;
    }
  }
  
  declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
      id: string;
    }
  }