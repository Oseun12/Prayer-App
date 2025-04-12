import PrayerCategoryCard from "../../components/PrayerCategoryCard";

export default function HomePage() {
  const prayerCategories = [
    {
      id: 'faith',
      title: 'Prayers of Faith',
      description: 'Strengthen your belief and trust in God',
      color: 'bg-blue-500',
      prayerCount: 127
    },
    {
      id: 'difficult-times',
      title: 'Prayers in Difficult Times',
      description: 'Find comfort and strength during trials',
      color: 'bg-purple-500',
      prayerCount: 89
    },
    {
      id: 'mercy',
      title: 'Prayers for Mercy',
      description: 'Seek God\'s compassion and forgiveness',
      color: 'bg-red-500',
      prayerCount: 64
    },
    {
      id: 'help',
      title: 'Prayers for Help',
      description: 'Ask for divine assistance in your needs',
      color: 'bg-green-500',
      prayerCount: 72
    },
    {
      id: 'deliverance',
      title: 'Prayers for Deliverance',
      description: 'Freedom from bondage and oppression',
      color: 'bg-yellow-500',
      prayerCount: 58
    },
    {
      id: 'thanksgiving',
      title: 'Prayers of Thanksgiving',
      description: 'Express gratitude for God\'s blessings',
      color: 'bg-pink-500',
      prayerCount: 43
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Divine Prayer Collection
          </h1>
          <p className="mt-2 text-lg text-gray-600 text-center">
            Find the perfect prayer for every situation
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prayerCategories.map((category) => (
            <PrayerCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </main>
    </div>
  );
}