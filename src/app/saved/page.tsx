import { getServerSession } from 'next-auth';
import User from '@/models/User';
import Bookmark from '@/models/Bookmark';
import { allPrayers } from '@/lib/prayerData';
import connectViaMongoose from '@/lib/mongodb';
import PrayerPoint from '@/components/PrayerPoint';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { SignInButton, SignOutButton } from '@/components/AuthButton';

export default async function SavedPrayersPage() {
  try {
    await connectViaMongoose();
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return (
        <div className="container mx-auto py-8 text-center space-y-4">
          <h1 className="text-2xl font-bold">Please sign in to view saved prayers</h1>
          <div className="flex justify-center">
            <SignInButton />
          </div>
        </div>
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return (
        <div className="container mx-auto py-8 text-center">
          <h1 className="text-2xl font-bold">User not found</h1>
          <SignOutButton />
        </div>
      );
    }

    const bookmarks = await Bookmark.find({ userId: user._id });
    const savedPrayers = bookmarks
      .map((bookmark) => allPrayers[bookmark.prayerId as keyof typeof allPrayers])
      .filter(Boolean)
      .flat();

    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Your Saved Prayers</h1>
          <SignOutButton />
        </div>
        
        {savedPrayers.length > 0 ? (
          <div className="space-y-6">
            {savedPrayers.map((prayer) => (
              <PrayerPoint key={prayer.id} prayer={prayer} />
            ))}
          </div>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-gray-500">You haven&apos;t saved any prayers yet.</p>
            <p>Browse prayers and click the bookmark icon to save them here.</p>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Saved prayers page error:', error);
    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-2xl font-bold text-red-500">Error loading saved prayers</h1>
        <p className="text-gray-500">Please try again later</p>
      </div>
    );
  }
}