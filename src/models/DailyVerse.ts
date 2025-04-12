import mongoose from 'mongoose';

const DailyVerseSchema = new mongoose.Schema({
  verse: { type: String, required: true },
  reference: { type: String, required: true },
  date: { type: Date, required: true, unique: true }
});

const DailyVerse = mongoose.models.DailyVerse || mongoose.model('DailyVerse', DailyVerseSchema);

export default DailyVerse;