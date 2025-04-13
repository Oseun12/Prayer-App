import mongoose from 'mongoose';

const BookmarkSchema = new mongoose.Schema({
  prayerId: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true
});

const Bookmark = mongoose.models.Bookmark || mongoose.model('Bookmark', BookmarkSchema);

export default Bookmark;