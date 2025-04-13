import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import User from '@/models/User';
import connectViaMongoose from '@/lib/mongodb';
import PrayerStat from '@/models/PrayerStat';

export async function POST(req: Request) {
  await connectViaMongoose();
  const session = await getServerSession();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { prayerId, action } = await req.json();
  const user = await User.findOne({ email: session.user.email });

  if (action === 'prayed') {
    await PrayerStat.findOneAndUpdate(
      { prayerId, userId: user._id },
      { $set: { prayed: true } },
      { upsert: true, new: true }
    );
  } else {
    await PrayerStat.deleteOne({ prayerId, userId: user._id });
  }

  const prayerCount = await PrayerStat.countDocuments({ prayerId });

  return NextResponse.json({ success: true, prayerCount });
}

export async function GET(request: Request) {
  await connectViaMongoose();
  const { searchParams } = new URL(request.url);
  const prayerId = Number(searchParams.get('prayerId'));
  
  const session = await getServerSession();
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await User.findOne({ email: session.user.email });
  const prayerStat = await PrayerStat.findOne({ prayerId, userId: user._id });

  return NextResponse.json({ prayed: !!prayerStat });
}