import mongoose from "mongoose";
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

export interface Bookmark {
  userId: mongoose.Types.ObjectId;
  prayerId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BookmarkRequest {
  prayerId: number;
}

  type PrayerSlug = keyof typeof allPrayers;

  declare module 'next' {
    interface PageProps {
      params: { slug: string } | { slug: PrayerSlug };
    }
  }