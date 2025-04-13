'use client';
import { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useSession } from 'next-auth/react';



export default function BookmarkButton({ prayerId }: { prayerId: number }) {
  const { data: session } = useSession();
  const [bookmarked, setBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchBookmarks = async () => {
    if (!session) return;
    
    try {
      const res = await fetch('/api/bookmarks');
      if (!res.ok) throw new Error('Failed to fetch bookmarks');
      
      const data = await res.json();
      setBookmarked(data.some((b: { prayerId: number }) => b.prayerId === prayerId));
    } catch (error) {
      console.error('Bookmark check error:', error);
    }
  };

  const toggleBookmark = async () => {
    console.log('Toggling bookmark for prayerId:', prayerId); 
    console.log('Current bookmarked state:', bookmarked); 
    
    setLoading(true);
    try {
      const method = bookmarked ? 'DELETE' : 'POST';
      console.log('Sending', method, 'request'); 
      
      const response = await fetch('/api/bookmarks', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prayerId }),
        credentials: 'include' 
      });
  
      console.log('Response status:', response.status); 
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData); 
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Success:', data); 
      setBookmarked(!bookmarked);
    } catch (error) {
      console.error('Bookmark toggle error:', error); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, [prayerId, session]);

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