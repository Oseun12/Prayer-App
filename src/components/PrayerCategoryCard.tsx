import Link from 'next/link';

interface PrayerCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  prayerCount: number;
  verse: string;
}

export default function PrayerCategoryCard({ category }: { category: PrayerCategory }) {
  return (
    <Link href={`/prayers/${category.id}`} className="group">
      <div className={`h-full bg-gradient-to-br ${category.color} rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl relative`}>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Card content */}
        <div className="p-6 h-full flex flex-col">
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20">
            {category.icon}
          </div>
          
          {/* Title */}
          <h2 className="text-2xl font-bold text-white mb-2">{category.title}</h2>
          
          {/* Description */}
          <p className="text-white/80 mb-4">{category.description}</p>
          
          {/* Stats and verse */}
          <div className="mt-auto pt-4 border-t border-white/10">
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/70">
                {category.prayerCount}+ prayers
              </span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/80">
                {category.verse}
              </span>
            </div>
          </div>
          
          {/* Hover arrow */}
          <div className="absolute right-4 bottom- text-white/50 group-hover:text-white transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}