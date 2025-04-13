import { allPrayers } from "./lib/prayerData";

export type Prayer = {
    id: number;
    text: string;
    verse?: string;
  };

export type PrayerSlug = keyof typeof allPrayers;

export interface PageProps {
  params: {
    slug: PrayerSlug;
  };
}


declare module 'next' {
  interface PageProps {
    params: Record<string, string | string[]>;
  }
}