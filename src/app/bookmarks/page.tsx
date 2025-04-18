import { authOptions } from "@/lib/auth-config";
import { getServerSession } from "next-auth";

export default async function BookmarksPage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    return (
      <div className="p-4">
        <h2>My Bookmarks</h2>
        <p>Please log in to view your saved bookmarks</p>
      </div>
    );
  }

  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/bookmarks`, {
    next: { tags: ["bookmarks"] },
  });
  const bookmarks = await response.json();

  return (
    <div className="p-4">
      <h2>My Bookmarks</h2>
      {bookmarks}
    </div>
  );
}