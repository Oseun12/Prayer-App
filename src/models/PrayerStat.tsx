import mongoose from 'mongoose';

const PrayerStatSchema = new mongoose.Schema({
  prayerId: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  prayed: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.PrayerStat || mongoose.model('PrayerStat', PrayerStatSchema);