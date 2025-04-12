import Link from 'next/link';

interface PrayerCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  prayerCount: number;
}

export default function PrayerCategoryCard({ category }: { category: PrayerCategory }) {
  return (
    <Link href={`/prayers/${category.id}`}>
      <div className={`${category.color} rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-xl`}>
        <div className="p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
          <p className="mb-4 opacity-90">{category.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm opacity-80">
              {category.prayerCount}+ prayers
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}