import { allPrayers } from "./lib/prayerData";

export type Prayer = {
    id: number;
    text: string;
    verse?: string;
  };

export type Bookmarks = {
  id: string;
  prayerId: number;
  userId: string;
  createdAt: string;
};

  type PrayerSlug = keyof typeof allPrayers;

  declare module 'next' {
    interface PageProps {
      params: { slug: string } | { slug: PrayerSlug };
    }
  }