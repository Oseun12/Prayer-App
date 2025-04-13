import BackButton from '@/components/BackButton';
import PrayerPoint from '@/components/PrayerPoint';
import { notFound } from 'next/navigation';
import { allPrayers, categoryTitles, categoryColors, accentColors, categoryIcons } from '@/lib/prayerData';
import { PageProps } from '@/types';

export async function generateStaticParams() {
  return Object.keys(allPrayers).map((slug) => ({
    slug,
  }));
}


export default async function PrayerCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  
  if (!slug || !allPrayers[slug as keyof typeof allPrayers]) {
    return notFound();
  }
  const currentPrayers = allPrayers[slug as keyof typeof allPrayers];
  const categoryTitle = categoryTitles[slug as keyof typeof categoryTitles];
  const gradientColors = categoryColors[slug as keyof typeof categoryColors];
  const accentColor = accentColors[slug as keyof typeof accentColors];
  const categoryIcon = categoryIcons[slug as keyof typeof categoryIcons];

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
            <p className="text-gray-400 mt-2">{currentPrayers.length} prayers</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {currentPrayers.map((prayer, index) => (
            <div 
              key={prayer.id}
              className={`group relative rounded-xl overflow-hidden transition-all duration-300 ${accentColor.replace('text', 'hover:shadow-lg')}`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Prayer card with gradient border */}
              <div className={`relative bg-gray-900/60 backdrop-blur-sm p-6 border-l-4 ${accentColor.replace('text', 'border')}`}>
                <div className={`absolute inset-0 rounded-lg ${accentColor.replace('text', 'bg')} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <PrayerPoint prayer={prayer} className="text-gray-100 leading-relaxed" />
                {prayer.verse && (
                  <div className={`mt-3 text-sm ${accentColor} italic`}>
                    {prayer.verse}
                  </div>
                )}
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
              <p className="text-sm text-gray-400">{currentPrayers.length} prayers in this collection</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800/50">
        <p className="italic">&ldquo;The prayer of a righteous person is powerful and effective.&rdquo; — James 5:16</p>
      </footer>

      {/* Decorative floating element */}
      <div className={`fixed bottom-6 right-6 hidden lg:block text-3xl opacity-20 ${accentColor}`}>
        {categoryIcon}
      </div>
    </div>
  );
}
