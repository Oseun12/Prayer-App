import mongoose, { Document } from 'mongoose';

interface IBookmark extends Document {
  prayerId: string;
  userId: string;
  createdAt: Date;
}

const BookmarkSchema = new mongoose.Schema({
  prayerId: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

BookmarkSchema.index({ prayerId: 1, userId: 1 }, { unique: true });

export default mongoose.models.Bookmark || 
       mongoose.model<IBookmark>('Bookmark', BookmarkSchema);