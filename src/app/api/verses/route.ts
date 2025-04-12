import connectviaMongoose from "@/lib/mongodb";
import DailyVerse from "@/models/DailyVerse";


export default async function handler(req, res) {
  await connectviaMongoose();

  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const verse = await DailyVerse.findOne({ date: today });
    
    if (!verse) {
      // Fallback to a random verse if today's not found
      const randomVerse = await DailyVerse.aggregate([{ $sample: { size: 1 } }]);
      return res.status(200).json(randomVerse[0]);
    }
    
    res.status(200).json(verse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}