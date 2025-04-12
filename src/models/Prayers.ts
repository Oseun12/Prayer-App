import mongoose from 'mongoose';

const PrayerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true }, 
  tags: [String],
  isDeclaration: { type: Boolean, default: false },
  isAffirmation: { type: Boolean, default: false },
  audioUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Prayer = mongoose.models.Prayer || mongoose.model('Prayer', PrayerSchema);

export default Prayer;