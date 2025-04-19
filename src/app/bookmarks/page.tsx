import { authOptions } from "@/lib/auth-config";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';

interface Bookmark {
  id: string;
  title: string;
  url: string;
}

export default async function BookmarksPage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) {
    redirect('/login');
  }

  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/bookmarks`, {
    next: { tags: ["bookmarks"] },
  });
  const bookmarks: Bookmark[] = await response.json();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Bookmarks</h1>
        <div className="flex items-center gap-2">
          <img 
            src={session.user.image || ''} 
            alt="Profile" 
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">{session.user.name}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bookmarks.length > 0 ? (
          bookmarks.map((bookmark) => (
            <div key={bookmark.id} className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg">{bookmark.title}</h3>
              <a href={bookmark.url} className="text-blue-600 text-sm truncate block" target="_blank">
                {bookmark.url}
              </a>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12">
            <p className="text-gray-500">You haven&apos;t saved any bookmarks yet</p>
          </div>
        )}
      </div>
    </div>
  );
}