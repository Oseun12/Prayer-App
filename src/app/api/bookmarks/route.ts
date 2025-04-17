import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/User';
import Bookmark from '@/models/Bookmark';
import connectViaMongoose from '@/lib/mongodb';
import { authOptions } from '../auth/[...nextauth]/route';
import { BookmarkRequest } from '@/types';

// interface BookmarkRequest {
//   prayerId: number;
// }
// Helper function to handle DB connection and auth
async function initBookmarkRequest() {
  await connectViaMongoose();
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    throw new Error('Unauthorized');
  }

  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    throw new Error('User not found');
  }

  return { user };
}

interface BookmarkResponse {
  _id: string;
  userId: string;
  prayerId: number;
  createdAt?: string;
  updatedAt?: string;
}

export async function GET() {
  // console.log('Received GET request to /api/bookmarks');
  try {
    const { user } = await initBookmarkRequest();
    // console.log('Fetching bookmarks for user:', user.email);

    const bookmarks = await Bookmark.find({ userId: user._id }).lean();
    const responseData: BookmarkResponse[] = bookmarks.map(bookmark => ({
      _id: bookmark._id.toString(),
      userId: bookmark.userId.toString(),
      prayerId: bookmark.prayerId,
      ...(bookmark.createdAt && { createdAt: bookmark.createdAt.toISOString() }),
      ...(bookmark.updatedAt && { updatedAt: bookmark.updatedAt.toISOString() })
    }));

    // console.log(`Found ${responseData.length} bookmarks`);
    return NextResponse.json(responseData);
  } catch (error) {
    console.error('GET error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch bookmarks';
    return NextResponse.json(
      { error: errorMessage },
      { status: errorMessage === 'Unauthorized' ? 401 : 500 }
    );
  }
}

export async function POST(req: Request) {
  console.log('Received POST request to /api/bookmarks');
  try {
    const { user } = await initBookmarkRequest();
    const { prayerId } = await req.json();
    console.log('Creating bookmark for:', { userId: user._id, prayerId });

    const existing = await Bookmark.findOne({ userId: user._id, prayerId });
    if (existing) {
      console.log('Bookmark already exists');
      return NextResponse.json({ message: 'Already bookmarked' }, { status: 200 });
    }

    const bookmark = new Bookmark({ userId: user._id, prayerId });
    await bookmark.save();
    console.log('Bookmark created:', bookmark);
    
    return NextResponse.json(bookmark);
  } catch (error) {
    console.error('POST error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Failed to create bookmark';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}



// DELETE a bookmark
export async function DELETE(req: NextRequest) {
  console.log('Received DELETE request to /api/bookmarks');
  try {
    const { user } = await initBookmarkRequest();
    const { prayerId } = (await req.json()) as BookmarkRequest;
    
    if (typeof prayerId !== 'number') {
      throw new Error('Invalid prayerId');
    }

    console.log('Deleting bookmark for:', { userId: user._id, prayerId });

    const result = await Bookmark.deleteOne({ 
      userId: user._id, 
      prayerId 
    });

    if (result.deletedCount === 0) {
      // console.log('Bookmark not found');
      return NextResponse.json(
        { message: 'Bookmark not found' },
        { status: 404 }
      );
    }

    console.log('Bookmark deleted successfully');
    return NextResponse.json(
      { message: 'Bookmark removed' },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Failed to delete bookmark';
    return NextResponse.json(
      { error: errorMessage },
      { status: errorMessage === 'Unauthorized' ? 401 : 500 }
    );
  }
}