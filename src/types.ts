import { allPrayers } from "./lib/prayerData";

export type Prayer = {
    id: string;
    content: string;
    verse?: string;
  };

  export interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }

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

  