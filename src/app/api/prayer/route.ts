import connectviaMongoose from "@/lib/mongodb";
import Prayer from "@/models/Prayers";


export default async function handler(req, res) {
  await connectviaMongoose();

  try {
    const { category, type, limit } = req.query;
    let query = {};
    
    if (category) query.category = category;
    if (type === 'declaration') query.isDeclaration = true;
    if (type === 'affirmation') query.isAffirmation = true;

    const prayers = await Prayer.find(query).limit(parseInt(limit) || 0);
    res.status(200).json(prayers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}