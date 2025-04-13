// app/prayers/[category]/page.tsx
import BackButton from '@/components/BackButton';
import PrayerPoint from '@/components/PrayerPoint';
import deliverancePrayers from '@/data/prayers/deliverance';
import difficultTimesPrayers from '@/data/prayers/difficult-times';
import faithPrayers from '@/data/prayers/faith';
import familyPrayers from '@/data/prayers/family-prayer';
import healingPrayers from '@/data/prayers/healing-prayer';
import helpPrayers from '@/data/prayers/help-prayers';
import mercyPrayers from '@/data/prayers/mercy-prayers';
import peacePrayers from '@/data/prayers/peace-prayer';
import protectionPrayers from '@/data/prayers/protection-prayer';
import thanksgivingPrayers from '@/data/prayers/thanksgiving-prayer';
import wisdomPrayers from '@/data/prayers/wisdom-prayer';
import forgivenessPrayers from '@/data/prayers/forgiveness-prayer';

const allPrayers = {
  'faith': faithPrayers,
  'difficult-times': difficultTimesPrayers,
  'deliverance': deliverancePrayers,
  'mercy': mercyPrayers,
  'help': helpPrayers,
  'thanksgiving': thanksgivingPrayers,
  'healing': healingPrayers,
  'protection': protectionPrayers,
  'wisdom': wisdomPrayers,
  'peace': peacePrayers,
  'family': familyPrayers,
  'forgiveness': forgivenessPrayers
};

const categoryTitles = {
  'faith': 'Prayers of Faith',
  'difficult-times': 'Prayers in Difficult Times',
  'deliverance': 'Prayers for Deliverance',
  'mercy': 'Prayers for Mercy',
  'help': 'Prayers for Help',
  'thanksgiving': 'Thanksgiving Prayers',
  'healing': 'Healing Prayers',
  'protection': 'Protection Prayers',
  'wisdom': 'Wisdom Prayers',
  'peace': 'Peace Prayers',
  'family': 'Family Prayers',
  'forgiveness': 'Forgiveness Prayers'
};

const categoryColors = {
  'faith': 'from-blue-900 to-indigo-900',
  'difficult-times': 'from-purple-900 to-violet-900',
  'deliverance': 'from-rose-900 to-red-900',
  'mercy': 'from-pink-900 to-rose-900',
  'help': 'from-emerald-900 to-teal-900',
  'thanksgiving': 'from-amber-900 to-orange-900',
  'healing': 'from-green-900 to-emerald-900',
  'protection': 'from-indigo-900 to-blue-900',
  'wisdom': 'from-violet-900 to-purple-900',
  'peace': 'from-cyan-900 to-sky-900',
  'family': 'from-fuchsia-900 to-pink-900',
  'forgiveness': 'from-yellow-900 to-amber-900'
};

const accentColors = {
  'faith': 'text-blue-300',
  'difficult-times': 'text-purple-300',
  'deliverance': 'text-rose-300',
  'mercy': 'text-pink-300',
  'help': 'text-emerald-300',
  'thanksgiving': 'text-amber-300',
  'healing': 'text-green-300',
  'protection': 'text-indigo-300',
  'wisdom': 'text-violet-300',
  'peace': 'text-cyan-300',
  'family': 'text-fuchsia-300',
  'forgiveness': 'text-yellow-300'
};

const categoryIcons = {
  'faith': '✨',
  'difficult-times': '🕯️',
  'deliverance': '⚔️',
  'mercy': '💖',
  'help': '🤲',
  'thanksgiving': '🌟',
  'healing': '🌿',
  'protection': '🛡️',
  'wisdom': '📚',
  'peace': '☮️',
  'family': '👨‍👩‍👧‍👦',
  'forgiveness': '📖'
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
  const category = params.category;
  const currentPrayers = allPrayers[category as keyof typeof allPrayers] || [];
  const categoryTitle = categoryTitles[category as keyof typeof categoryTitles] || 'Prayers';
  const gradientColors = categoryColors[category as keyof typeof categoryColors] || 'from-gray-900 to-black';
  const accentColor = accentColors[category as keyof typeof accentColors] || 'text-gray-300';
  const categoryIcon = categoryIcons[category as keyof typeof categoryIcons] || '🙏';

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