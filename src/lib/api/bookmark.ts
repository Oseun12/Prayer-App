// import { trackEvent } from '@/lib/gtag';

export const toggleBookmark = async (prayerId: string) => {
  try {
    const response = await fetch('/api/bookmarks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prayerId }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to update bookmark');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Bookmark error:', error);
    throw error;
  }
};

export const fetchUserBookmarks = async () => {
  const response = await fetch('/api/bookmarks');
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to fetch bookmarks');
  }
  return await response.json();
};