import mongoose from 'mongoose';

const BookmarkSchema = new mongoose.Schema({
  prayerId: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

const Bookmark = mongoose.models.Bookmark || mongoose.model('Bookmark', BookmarkSchema);

export default Bookmark;