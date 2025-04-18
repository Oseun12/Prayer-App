export const toggleBookmark = async (prayerId: string, anonymousId?: string) => {
  try {
    const response = await fetch("/api/bookmarks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prayerId, anonymousId }),
      credentials: "include",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to update bookmark");
    }
    return await response.json();
  } catch (error) {
    console.error("Bookmark error:", error);
    throw error;
  }
};

export const fetchUserBookmarks = async () => {
  try {
    const response = await fetch("/api/bookmarks", {
      credentials: "include",
    });
    
    if (!response.ok) {
      throw new Error("Failed to fetch bookmarks");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch bookmarks error:", error);
    throw error;
  }
};