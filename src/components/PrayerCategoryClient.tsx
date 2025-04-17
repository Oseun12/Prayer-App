'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import BackButton from '@/components/BackButton';
import PrayerPoint from '@/components/PrayerPoint';
import { PiHandsPrayingLight } from 'react-icons/pi';
import { IoBookmarkOutline } from 'react-icons/io5';
import { fetchUserBookmarks, toggleBookmark } from '@/lib/api/bookmark';

interface Prayer {
  id: string;
  content: string;
  verse?: string;
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
}: PrayerCategoryClientProps) {
  const { data: session } = useSession();
  const [bookmarkedPrayers, setBookmarkedPrayers] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadBookmarks = async () => {
      if (!session?.user?.id) {
        setBookmarkedPrayers(new Set());
        return;
      }

      try {
        const bookmarks = await fetchUserBookmarks();
        const ids = new Set<string>(bookmarks.map((b: { prayerId: string }) => b.prayerId));
        setBookmarkedPrayers(ids);
      } catch (error) {
        console.error('Failed to load bookmarks:', error);
      }
    };
    
    loadBookmarks();
  }, [session]);

  const handleBookmark = async (prayerId: string) => {
    if (!session?.user?.id) {
      console.error('User not authenticated');
      return;
    }

    try {
      await toggleBookmark(prayerId);
      setBookmarkedPrayers((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(prayerId)) {
          newSet.delete(prayerId);
        } else {
          newSet.add(prayerId);
        }
        return newSet;
      });
    } catch (error) {
      console.error('Bookmark error:', error);
    }
  };

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
                      onClick={() => handleBookmark(prayer.id)}
                      className={`p-2 rounded-full ${accentColor.replace('text', 'bg')} bg-opacity-20 hover:bg-opacity-30 transition-colors ${
                        bookmarkedPrayers.has(prayer.id) ? 'bg-opacity-40' : ''
                      }`}
                      disabled={!session?.user?.id}
                      aria-label={bookmarkedPrayers.has(prayer.id) ? 'Remove bookmark' : 'Bookmark this prayer'}
                    >
                      <IoBookmarkOutline className={`text-lg ${bookmarkedPrayers.has(prayer.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      className={`p-2 rounded-full ${accentColor.replace('text', 'bg')} bg-opacity-20 hover:bg-opacity-30 transition-colors`}
                      aria-label="Mark as prayed"
                    >
                      <PiHandsPrayingLight className="text-lg" />
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
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800/50">
        <p className="italic">&ldquo;The prayer of a righteous person is powerful and effective.&rdquo; — James 5:16</p>
      </footer>

      {/* Decorative icon */}
      <div className={`fixed bottom-6 right-6 hidden lg:block text-3xl opacity-20 ${accentColor}`}>
        {categoryIcon}
      </div>
    </div>
  );
}














































// 'use client';

// import { useState, useEffect } from 'react';
// import { useSession } from 'next-auth/react';
// import BackButton from '@/components/BackButton';
// import PrayerPoint from '@/components/PrayerPoint';
// import { PiHandsPrayingLight } from 'react-icons/pi';
// import { IoBookmarkOutline } from 'react-icons/io5';
// import { fetchUserBookmarks, toggleBookmark } from '@/lib/api/bookmark';

// interface Prayer {
//   id: string;
//   conten: string;
//   verse?: string;
// }

// interface PrayerCategoryClientProps {
//   prayers: Prayer[];
//   categoryTitle: string;
//   gradientColors: string;
//   accentColor: string;
//   categoryIcon: React.ReactNode;
//   slug: string;
// }

// export default function PrayerCategoryClient({
//   prayers,
//   categoryTitle,
//   gradientColors,
//   accentColor,
//   categoryIcon,
//   slug
// }: PrayerCategoryClientProps) {
//   const { data: session } = useSession();
//   const [bookmarkedPrayers, setBookmarkedPrayers] = useState<Set<string>>(new Set());
//   const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

//   useEffect(() => {
//     const loadBookmarks = async () => {
//       if (session?.user?.id) {
//         try {
//           const bookmarks = await fetchUserBookmarks(session.user.id);
//           const ids = new Set(bookmarks.map((b: { prayerId: string }) => b.prayerId));
//           setBookmarkedPrayers(ids);
//         } catch (error) {
//           console.error('Failed to load bookmarks:', error);
//         }
//       }
//     };
//     loadBookmarks();
//   }, [session]);

//   const handleBookmark = async (prayerId: string) => {
//     if (!session?.user?.id) return;
    
//     setLoadingStates(prev => ({ ...prev, [prayerId]: true }));
//     try {
//       await toggleBookmark(prayerId, session.user.id);
//       setBookmarkedPrayers(prev => {
//         const newSet = new Set(prev);
//         newSet.has(prayerId) ? newSet.delete(prayerId) : newSet.add(prayerId);
//         return newSet;
//       });
//     } catch (error) {
//       console.error('Bookmark error:', error);
//     } finally {
//       setLoadingStates(prev => ({ ...prev, [prayerId]: false }));
//     }
//   };

//   return (
//     <div className={`min-h-screen bg-gradient-to-b ${gradientColors} text-gray-100`}>
//       {/* Gradient overlay */}
//       <div className="fixed inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20 pointer-events-none"></div>

//       {/* Header */}
//       <header className="relative bg-gray-900/50 backdrop-blur-sm border-b border-gray-700/50">
//         <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//           <div className="flex flex-col items-center text-center">
//             <BackButton className={`${accentColor} hover:opacity-80 self-start`} />
//             <div className={`w-16 h-16 rounded-full ${accentColor} bg-black/30 flex items-center justify-center text-2xl mb-4 shadow-lg`}>
//               {categoryIcon}
//             </div>
//             <h1 className={`text-4xl font-bold ${accentColor} mb-2`}>{categoryTitle}</h1>
//             <div className={`w-24 h-1 ${accentColor.replace('text', 'bg')} bg-opacity-50 rounded-full`}></div>
//             <p className="text-gray-400 mt-2">{prayers.length} prayers</p>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="relative max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
//         <div className="space-y-6">
//           {prayers.map((prayer, index) => (
//             <div 
//               key={prayer.id}
//               className={`group relative rounded-xl overflow-hidden transition-all duration-300 ${accentColor.replace('text', 'hover:shadow-lg')}`}
//               data-aos="fade-up"
//               data-aos-delay={index * 50}
//             >
//               {/* Prayer card with gradient border */}
//               <div className={`relative bg-gray-900/60 backdrop-blur-sm p-6 border-l-4 ${accentColor.replace('text', 'border')}`}>
//                 <div className={`absolute inset-0 rounded-lg ${accentColor.replace('text', 'bg')} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
//                 <PrayerPoint prayer={prayer} className="text-gray-100 leading-relaxed" />
                
//                 <div className="flex justify-between items-end mt-3">
//                   {prayer.verse && (
//                     <div className={`text-sm ${accentColor} italic`}>
//                       {prayer.verse}
//                     </div>
//                   )}
                  
//                   <div className={`flex gap-3 ${prayer.verse ? '' : 'ml-auto'}`}>
//                     <button 
//                       onClick={() => handleBookmark(prayer.id)}
//                       className={`p-2 rounded-full ${accentColor.replace('text', 'bg')} bg-opacity-20 hover:bg-opacity-30 transition-colors ${
//                         bookmarkedPrayers.has(prayer.id) ? 'bg-opacity-40' : ''
//                       }`}
//                       disabled={loadingStates[prayer.id]}
//                       aria-label={bookmarkedPrayers.has(prayer.id) ? 'Remove bookmark' : 'Bookmark this prayer'}
//                     >
//                       <IoBookmarkOutline className={`text-lg ${
//                         bookmarkedPrayers.has(prayer.id) ? 'fill-current' : ''
//                       }`} />
//                     </button>
//                     <button 
//                       className={`p-2 rounded-full ${accentColor.replace('text', 'bg')} bg-opacity-20 hover:bg-opacity-30 transition-colors`}
//                       aria-label="Mark as prayed"
//                     >
//                       <PiHandsPrayingLight className="text-lg" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Category Summary */}
//         <div className={`mt-12 p-6 rounded-xl ${accentColor.replace('text', 'bg')} bg-opacity-10 border ${accentColor.replace('text', 'border')} border-opacity-30 backdrop-blur-sm`}>
//           <div className="flex items-center justify-center gap-4">
//             <span className="text-2xl">{categoryIcon}</span>
//             <div>
//               <h3 className={`font-medium ${accentColor}`}>{categoryTitle}</h3>
//               <p className="text-sm text-gray-400">{prayers.length} prayers in this collection</p>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800/50">
//         <p className="italic">&ldquo;The prayer of a righteous person is powerful and effective.&rdquo; — James 5:16</p>
//       </footer>

//       {/* Decorative floating element */}
//       <div className={`fixed bottom-6 right-6 hidden lg:block text-3xl opacity-20 ${accentColor}`}>
//         {categoryIcon}
//       </div>
//     </div>
//   );
// }