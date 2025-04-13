import { getServerSession } from 'next-auth';
import User from '@/models/User';
import Bookmark from '@/models/Bookmark';
import { allPrayers } from '@/lib/prayerData';
import connectViaMongoose from '@/lib/mongodb';
import PrayerPoint from '@/components/PrayerPoint';

export default async function SavedPrayersPage() {
  await connectViaMongoose();
  const session = await getServerSession();
  
  if (!session?.user?.email) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-2xl font-bold">Please sign in to view saved prayers</h1>
      </div>
    );
  }

  const user = await User.findOne({ email: session.user.email });
  const bookmarks = await Bookmark.find({ userId: user._id });

  // Get full prayer details for each bookmark
  const savedPrayers = bookmarks
    .map((bookmark) => allPrayers[bookmark.prayerId as keyof typeof allPrayers])
    .filter(Boolean)
    .flat();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Your Saved Prayers</h1>
      {savedPrayers.length > 0 ? (
        <div className="space-y-4">
          {savedPrayers.map((prayer) => (
            <PrayerPoint key={prayer.id} prayer={prayer} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">You haven&apos;t saved any prayers yet.</p>
      )}
    </div>
  );
}