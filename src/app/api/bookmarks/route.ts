import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import User from '@/models/User';
import Bookmark from '@/models/Bookmark';
import connectViaMongoose from '@/lib/mongodb';

export async function POST(req: Request) {
  await connectViaMongoose();
  const session = await getServerSession();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { prayerId } = await req.json();
  const user = await User.findOne({ email: session.user.email });

  const existingBookmark = await Bookmark.findOne({ 
    prayerId, 
    userId: user._id 
  });

  if (existingBookmark) {
    return NextResponse.json(existingBookmark);
  }

  const bookmark = await Bookmark.create({
    prayerId,
    userId: user._id
  });

  return NextResponse.json(bookmark);
}

export async function DELETE(req: Request) {
  await connectViaMongoose();
  const session = await getServerSession();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { prayerId } = await req.json();
  const user = await User.findOne({ email: session.user.email });

  await Bookmark.deleteOne({ 
    prayerId, 
    userId: user._id 
  });

  return NextResponse.json({ success: true });
}

export async function GET() {
  await connectViaMongoose();
  const session = await getServerSession();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await User.findOne({ email: session.user.email });
  const bookmarks = await Bookmark.find({ userId: user._id });

  return NextResponse.json(bookmarks);
}