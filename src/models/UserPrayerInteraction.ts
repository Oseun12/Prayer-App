import mongoose, { Document, Schema } from 'mongoose';

export interface IUserPrayerInteraction extends Document {
  userId: string;
  prayerId: string;
  isBookmarked: boolean;
  isPrayed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserPrayerInteractionSchema = new Schema<IUserPrayerInteraction>({
  userId: { type: String, required: true, index: true },
  prayerId: { type: String, required: true, index: true },
  isBookmarked: { type: Boolean, default: false },
  isPrayed: { type: Boolean, default: false },
}, {
  timestamps: true,
});

// Compound index for faster queries
UserPrayerInteractionSchema.index({ userId: 1, prayerId: 1 }, { unique: true });

export default mongoose.models.UserPrayerInteraction || 
       mongoose.model<IUserPrayerInteraction>('UserPrayerInteraction', UserPrayerInteractionSchema);