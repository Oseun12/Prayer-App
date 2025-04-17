import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import Bookmark from '@/models/Bookmark';
import connectViaMongoose from '@/lib/mongodb';
import { authOptions } from '@/lib/auth-config';

export async function GET() {
  await connectViaMongoose();
  
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const bookmarks = await Bookmark.find({ userId: session.user.id });
    return NextResponse.json(bookmarks);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch bookmarks', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  await connectViaMongoose();
  
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const { prayerId } = await request.json();
    
    if (!prayerId) {
      return NextResponse.json(
        { error: 'prayerId is required' },
        { status: 400 }
      );
    }

    const userId = session.user.id;
    const existing = await Bookmark.findOne({ prayerId, userId });

    if (existing) {
      await Bookmark.deleteOne({ _id: existing._id });
      return NextResponse.json({ removed: true });
    } else {
      const bookmark = await Bookmark.create({ prayerId, userId });
      return NextResponse.json(bookmark, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update bookmark', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}