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
    <div className={`min-h-screen bg-gradient-to-br ${gradientColors} text-gray-100`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/cross-pattern.svg')] bg-repeat opacity-20"></div>
      </div>

      <header className="relative z-10">
        <div className="max-w-7xl mx-auto pt-12 pb-16 px-4 sm:px-6 lg:px-8 relative">
          <BackButton className="text-white hover:text-gray-300 transition-colors" />
          <div className="flex flex-col items-center justify-center space-y-6 mt-8">
            <div className={`w-20 h-20 rounded-full ${accentColor} bg-black bg-opacity-40 flex items-center justify-center text-3xl shadow-lg`}>
              {categoryIcon}
            </div>
            <h1 className={`text-5xl font-bold text-center font-serif ${accentColor}`}>
              {categoryTitle}
            </h1>
            <div className={`w-32 h-1 bg-gradient-to-r from-transparent ${accentColor.replace('text', 'via')} to-transparent opacity-60`}></div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-2xl mx-auto pb-20 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {currentPrayers.map((prayer, index) => (
            <div 
              key={prayer.id}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`absolute -inset-0.5 rounded-xl ${accentColor.replace('text', 'bg')} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300`}></div>
              <PrayerPoint 
                prayer={prayer} 
                className={`relative bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-opacity-50 transition-all duration-300 ${accentColor.replace('text', 'hover:border')}`}
              />
            </div>
          ))}
        </div>
      </main>

      <footer className="relative z-10 py-8 text-center text-gray-400 text-sm">
        <p className="italic">&ldquo;The prayer of a righteous person is powerful and effective.&rdquo; — James 5:16</p>
      </footer>

      <div className="fixed bottom-10 right-10 hidden lg:block">
        <div className={`text-4xl opacity-30 ${accentColor}`}>📿</div>
      </div>
    </div>
  );
}