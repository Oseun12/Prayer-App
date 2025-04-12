// app/prayers/[category]/page.tsx
import BackButton from '@/components/BackButton';
import PrayerPoint from '@/components/PrayerPoint';

// Define your prayer data
const allPrayers = {
  'faith': [
    { id: 1, text: "Lord, increase my faith when doubts arise in my heart." },
    { id: 2, text: "Help me to trust in Your promises even when I don't see immediate results." },
  ],
  'difficult-times': [
    { id: 1, text: "Father, be my refuge and strength in this challenging season." },
    { id: 2, text: "Give me peace that surpasses understanding during this trial." },
  ],
  'deliverance': [
    { id: 1, text: "Lord, deliver me from every form of bondage in my life." },
    { id: 2, text: "Break every chain holding me back from my destiny." },
  ]
};

const categoryTitles = {
  'faith': 'Prayers of Faith',
  'difficult-times': 'Prayers in Difficult Times',
  'deliverance': 'Prayers for Deliverance'
};

export async function generateStaticParams() {
  return Object.keys(allPrayers).map((category) => ({
    category,
  }));
}

interface PageProps {
  params: {
    category: string;
  };
}

export default function PrayerCategoryPage({ params }: PageProps) {
  // Get the current category from params
  const category = params.category;
  
  // Get prayers for the current category
  const currentPrayers = allPrayers[category as keyof typeof allPrayers] || [];
  const categoryTitle = categoryTitles[category as keyof typeof categoryTitles] || 'Prayers';

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 relative">
          <BackButton />
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            {categoryTitle}
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {currentPrayers.map((prayer) => (
            <PrayerPoint key={prayer.id} prayer={prayer} />
          ))}
        </div>
      </main>
    </div>
  );
}