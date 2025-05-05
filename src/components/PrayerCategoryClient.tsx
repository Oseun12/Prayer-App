'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';
import BackButton from '@/components/BackButton';
import PrayerPoint from '@/components/PrayerPoint';
import { PiHandsPrayingLight } from 'react-icons/pi';
import { IoBookmarkOutline, IoShareSocialOutline } from 'react-icons/io5';
import { fetchUserBookmarks, toggleBookmark } from '@/lib/api/bookmark';
import { BsBookmarkCheckFill } from "react-icons/bs";
// import html2canvas from 'html2canvas';


interface Prayer {
  id: string;
  content: string;
  verse?: string;
  prayed?: boolean;
  categorySlug?: string;
}

interface PrayerCategoryClientProps {
  prayers: Prayer[];
  categoryTitle: string;
  gradientColors: string;
  accentColor: string;
  categoryIcon: React.ReactNode;
  slug: string;
}

export default function PrayerCategoryClient({
  prayers,
  categoryTitle,
  gradientColors,
  accentColor,
  categoryIcon,
  slug,
}: PrayerCategoryClientProps) {
  const { data: session } = useSession();
  const [bookmarkedPrayers, setBookmarkedPrayers] = useState<Set<string>>(new Set());
  const [prayedPrayers, setPrayedPrayers] = useState<Set<string>>(new Set());
  const [sharingPrayer, setSharingPrayer] = useState<Prayer | null>(null);
  // const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const prayerCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadBookmarks = async () => {
      try {
        // For anonymous users
        if (!session?.user?.id) {
          const anonymousId = localStorage.getItem("anonymousId");
          if (anonymousId) {
            const response = await fetch(`/api/bookmarks?anonymousId=${anonymousId}`);
            if (response.ok) {
              const bookmarks = await response.json();
              const ids = new Set<string>(
                bookmarks
                  .filter((b: { prayerId: string }) => b.prayerId.startsWith(`${slug}-`))
                  .map((b: { prayerId: string }) => b.prayerId)
              );
              setBookmarkedPrayers(ids);
            }
          }
          return;
        }
        
        // For authenticated users
        const bookmarks = await fetchUserBookmarks();
        const ids = new Set<string>(
          bookmarks
            .filter((b: { prayerId: string }) => b.prayerId.startsWith(`${slug}-`))
            .map((b: { prayerId: string }) => b.prayerId)
        );
        setBookmarkedPrayers(ids);
      } catch (error) {
        console.error('Failed to load bookmarks:', error);
      }
    };
    
    loadBookmarks();
  }, [session, slug]);

  useEffect(() => {
    const savedPrayed = localStorage.getItem('prayedPrayers');
    if (savedPrayed) {
      setPrayedPrayers(new Set(JSON.parse(savedPrayed)));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('prayedPrayers', JSON.stringify(Array.from(prayedPrayers)));
  }, [prayedPrayers]);

  const handleBookmark = async (prayerId: string) => {
    const uniquePrayerId = `${slug}-${prayerId}`;
    const anonymousId = localStorage.getItem("anonymousId") || 
      Math.random().toString(36).substring(2, 15);
    
    if (!session?.user?.id) {
      localStorage.setItem("anonymousId", anonymousId);
    }

    try {
      await toggleBookmark(uniquePrayerId, session?.user?.id ? undefined : anonymousId);
      setBookmarkedPrayers((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(uniquePrayerId)) {
          newSet.delete(uniquePrayerId);
        } else {
          newSet.add(uniquePrayerId);
        }
        return newSet;
      });
    } catch (error) {
      console.error("Bookmark error:", error);
    }
  };

  const handleMarkAsPrayed = async (prayerId: string) => {
    try {
      setPrayedPrayers(prev => {
        const newSet = new Set(prev);
        if (newSet.has(prayerId)) {
          newSet.delete(prayerId);
        } else {
          newSet.add(prayerId);
        }
        return newSet;
      });
      
    } catch (error) {
      console.error("Prayer marking error:", error);
      setPrayedPrayers((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(prayerId)) {
          newSet.delete(prayerId);
        } else {
          newSet.add(prayerId);
        }
        return newSet;
      });
    }
  };

  const handleSharePrayer = (prayer: Prayer) => {
    setSharingPrayer(prayer);
  };

  const handleCloseShareModal = () => {
    setSharingPrayer(null);
  };

  // const generatePrayerImage = async () => {
  //   if (!prayerCardRef.current || !sharingPrayer) return;
    
  //   setIsGeneratingImage(true);
  //   try {
  //     const canvas = await html2canvas(prayerCardRef.current, {
  //       backgroundColor: null,
  //       scale: 2,
  //       logging: false,
  //       useCORS: true,
  //     });
      
  //     canvas.toBlob((blob) => {
  //       if (blob) {
  //         const file = new File([blob], 'prayer.png', { type: 'image/png' });
  //         const data = {
  //           files: [file],
  //           title: `${categoryTitle} Prayer`,
  //           text: sharingPrayer.content,
  //         };
          
  //         if (navigator.canShare && navigator.canShare(data)) {
  //           navigator.share(data).catch(console.error);
  //         } else {
  //           // Fallback: Download the image
  //           const link = document.createElement('a');
  //           link.download = 'prayer.png';
  //           link.href = URL.createObjectURL(blob);
  //           link.click();
  //         }
  //       }
  //     }, 'image/png');
  //   } catch (error) {
  //     console.error('Error generating image:', error);
  //   } finally {
  //     setIsGeneratingImage(false);
  //   }
  // };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${gradientColors} text-gray-100`}>
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20 pointer-events-none"></div>

      {/* Header */}
      <header className="relative bg-gray-900/50 backdrop-blur-sm border-b border-gray-700/50">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <BackButton className={`${accentColor} hover:opacity-80 self-start`} />
            <div className={`w-16 h-16 rounded-full ${accentColor} bg-black/30 flex items-center justify-center text-2xl mb-4 shadow-lg`}>
              {categoryIcon}
            </div>
            <h1 className={`text-4xl font-bold ${accentColor} mb-2`}>{categoryTitle}</h1>
            <div className={`w-24 h-1 ${accentColor.replace('text', 'bg')} bg-opacity-50 rounded-full`}></div>
            <p className="text-gray-400 mt-2">{prayers.length} prayers</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {prayers.map((prayer, index) => (
            <div
              key={prayer.id}
              className={`group relative rounded-xl overflow-hidden transition-all duration-300 ${accentColor.replace('text', 'hover:shadow-lg')}`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Prayer card */}
              <div className={`relative bg-gray-900/60 backdrop-blur-sm p-6 border-l-4 ${accentColor.replace('text', 'border')}`}>
                <div className={`absolute inset-0 rounded-lg ${accentColor.replace('text', 'bg')} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <PrayerPoint prayer={prayer} className="text-gray-100 leading-relaxed" />

                <div className="flex justify-between items-end mt-3">
                  {prayer.verse && (
                    <div className={`text-sm ${accentColor} italic`}>
                      {prayer.verse}
                    </div>
                  )}

                  <div className={`flex gap-3 ${prayer.verse ? '' : 'ml-auto'}`}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleBookmark(prayer.id);
                    }}
                    className={`p-2 rounded-full ${accentColor.replace('text', 'bg')} bg-opacity-20 hover:bg-opacity-30 transition-colors ${
                      bookmarkedPrayers.has(prayer.id) ? 'bg-opacity-40' : ''
                    } relative z-10 cursor-pointer select-none`}
                    aria-label={bookmarkedPrayers.has(`${slug}-${prayer.id}`) ? 'Remove bookmark' : 'Bookmark this prayer'}
                  >
                    {bookmarkedPrayers.has(`${slug}-${prayer.id}`) ? (
                      <BsBookmarkCheckFill className={`text-lg ${accentColor}`} />
                    ) : (
                      <IoBookmarkOutline className="text-lg" />
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleMarkAsPrayed(prayer.id);
                    }}
                    className={`
                      p-2 rounded-full 
                      ${prayedPrayers.has(prayer.id) 
                        ? `${accentColor.replace('text', 'bg')} bg-opacity-40`
                        : `${accentColor.replace('text', 'bg')} bg-opacity-20 hover:bg-opacity-30`
                      } 
                      transition-colors
                      cursor-pointer
                      relative z-50
                      pointer-events-auto
                    `}
                    aria-label={prayedPrayers.has(prayer.id) ? 'Unmark as prayed' : 'Mark as prayed'}
                  >
                    <PiHandsPrayingLight className={`
                      text-lg 
                      ${prayedPrayers.has(prayer.id) ? accentColor : 'text-current'}
                      pointer-events-none
                    `} />
                  </button>

                  <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleSharePrayer(prayer);
                      }}
                      className={`p-2 rounded-full ${accentColor.replace('text', 'bg')} bg-opacity-20 hover:bg-opacity-30 transition-colors relative z-10 cursor-pointer select-none`}
                      aria-label="Share this prayer"
                    >
                      <IoShareSocialOutline className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Summary */}
        <div className={`mt-12 p-6 rounded-xl ${accentColor.replace('text', 'bg')} bg-opacity-10 border ${accentColor.replace('text', 'border')} border-opacity-30 backdrop-blur-sm`}>
          <div className="flex items-center justify-center gap-4">
            <span className="text-2xl">{categoryIcon}</span>
            <div>
              <h3 className={`font-medium ${accentColor}`}>{categoryTitle}</h3>
              <p className="text-sm text-gray-400">{prayers.length} prayers in this collection</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-white text-sm border-t border-gray-800/50">
        <p className="italic ">&ldquo;The prayer of a righteous person is powerful and effective.&rdquo; — James 5:16</p>
      </footer>

      {/* Decorative icon */}
      <div className={`fixed bottom-6 right-6 hidden lg:block text-3xl opacity-20 ${accentColor}`}>
        {categoryIcon}
      </div>

      {/* Share Prayer Modal */}
      {sharingPrayer && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative max-w-md w-full">
            {/* Close button */}
            <button
              onClick={handleCloseShareModal}
              className="absolute -top-3 -right-3 p-2 rounded-full bg-white hover:opacity-90 transition-opacity z-50 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Prayer Card */}
            <div 
              ref={prayerCardRef}
              className="relative rounded-lg overflow-hidden shadow-xl w-full h-[400px] flex flex-col p-6 text-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#ffffff",
                textShadow: "1px 1px 3px rgba(0,0,0,0.8)"
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Flexible spacer - pushes content to center */}
                <div className="flex-1 flex items-center justify-center">
                  {/* Prayer Text - now perfectly centered */}
                  <p className="text-2xl font-serif font-bold leading-relaxed px-4">
                    {sharingPrayer.content?.toUpperCase()}
                  </p>
                </div>
                
                {/* Verse and Footer - stays at bottom */}
                <div className="mt-auto">
                  <p className="text-lg font-bold font-serif mb-2">
                    {sharingPrayer.verse?.toUpperCase()}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="w-16 h-0.5 bg-white mx-auto mb-3"></div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span>Prayer Points</span>
                    <div className="w-0.5 h-4 bg-white"></div>
                    <span>{categoryTitle}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Share Button */}
            {/* <button
              onClick={generatePrayerImage}
              disabled={isGeneratingImage}
              className={`mt-6 w-full py-3 px-4 rounded-lg bg-white text-black hover:opacity-90 transition-all flex items-center justify-center gap-2 font-serif font-medium`}
            >
              {isGeneratingImage ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Image...
                </>
              ) : (
                <>
                  <IoShareSocialOutline className="text-xl" />
                  Share This Prayer
                </>
              )}
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}
