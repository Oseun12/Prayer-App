import { allPrayers } from "./lib/prayerData";

export type Prayer = {
    id: number;
    text: string;
    verse?: string;
  };

  type PrayerSlug = keyof typeof allPrayers;

  declare module 'next' {
    interface PageProps {
      params: { slug: string } | { slug: PrayerSlug };
    }
  }

  