'use client';
import { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';

export default function BookmarkButton({ prayerId }: { prayerId: number }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleBookmark = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/bookmarks', {
        method: bookmarked ? 'DELETE' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prayerId })
      });

      if (response.ok) {
        setBookmarked(!bookmarked);
      } else {
        console.error('Failed to update bookmark');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function checkBookmark() {
      try {
        const res = await fetch('/api/bookmarks');
        const data = await res.json();
        setBookmarked(data.some((b: { prayerId: number }) => b.prayerId === prayerId));
      } catch (error) {
        console.error('Failed to fetch bookmarks:', error);
      }
    }
    checkBookmark();
  }, [prayerId]);

  return (
    <button
      onClick={toggleBookmark}
      disabled={loading}
      className="p-1 transition-colors hover:text-yellow-400"
      aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      {bookmarked ? (
        <BookmarkCheck className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ) : (
        <Bookmark className="w-5 h-5 text-gray-400" />
      )}
    </button>
  );
}