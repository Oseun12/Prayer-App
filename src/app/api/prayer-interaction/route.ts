// app/api/prayer-interactions/route.ts
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import connectViaMongoose from '@/lib/mongodb';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import UserPrayerInteraction, { IUserPrayerInteraction } from '@/models/UserPrayerInteraction';

export async function POST(request: Request) {
  await connectViaMongoose();
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { prayerId, action } = await request.json();

  if (!prayerId || !action) {
    return NextResponse.json({ error: 'Missing prayerId or action' }, { status: 400 });
  }

  try {
    let update: Partial<IUserPrayerInteraction> = {};
    
    if (action === 'bookmark') {
      update.isBookmarked = true;
    } else if (action === 'unbookmark') {
      update.isBookmarked = false;
    } else if (action === 'prayed') {
      update.isPrayed = true;
    } else if (action === 'unprayed') {
      update.isPrayed = false;
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    const interaction = await UserPrayerInteraction.findOneAndUpdate(
      { userId: session.user.email, prayerId },
      update,
      { upsert: true, new: true }
    );

    return NextResponse.json(interaction);
  } catch (error) {
    console.error('Error updating prayer interaction:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  await connectViaMongoose();
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const prayerId = searchParams.get('prayerId');

  try {
    if (prayerId) {
      // Get single interaction status
      const interaction = await UserPrayerInteraction.findOne({ 
        userId: session.user.email, 
        prayerId 
      });
      return NextResponse.json(interaction || { 
        isBookmarked: false, 
        isPrayed: false 
      });
    } else {
      // Get all bookmarked prayers for the user
      const interactions = await UserPrayerInteraction.find({ 
        userId: session.user.email, 
        isBookmarked: true 
      });
      return NextResponse.json(interactions);
    }
  } catch (error) {
    console.error('Error fetching prayer interactions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}