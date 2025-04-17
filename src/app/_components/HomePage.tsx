import PrayerCategoryCard from "../../components/PrayerCategoryCard";
import { FaCross, FaHandsHelping, FaHeart, FaDove, FaStar, FaPrayingHands, FaBible, FaPeace } from "react-icons/fa";
import { GiAngelWings, GiPrayer, GiHealing, GiSpellBook } from "react-icons/gi";
import { RiMentalHealthLine } from "react-icons/ri";
import { BsHeartPulse } from "react-icons/bs";
import { trackEvent } from "@/lib/gtag";
import { useState } from "react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryClick = (categoryId: string) => {
    trackEvent("Prayer Category", "Click", categoryId);
  };
  
  const prayerCategories = [
    {
      id: 'faith',
      slug: 'faith',
      title: 'Prayers of Faith',
      description: 'Strengthen your belief and trust in God',
      icon: <FaCross className="w-8 h-8" />,
      color: 'from-blue-600 to-blue-800',
      prayerCount: 127,
      verse: 'Hebrews 11:1'
    },
    {
      id: 'difficult-times',
      slug: 'difficult-times',
      title: 'Prayers in Hard Times',
      description: 'Find comfort and strength during trials',
      icon: <GiAngelWings className="w-8 h-8" />,
      color: 'from-purple-600 to-purple-800',
      prayerCount: 89,
      verse: 'Psalm 34:17'
    },
    {
      id: 'mercy',
      slug: 'mercy',
      title: 'Prayers for Mercy',
      description: 'Seek God\'s compassion and forgiveness',
      icon: <FaHeart className="w-8 h-8" />,
      color: 'from-rose-600 to-rose-800',
      prayerCount: 64,
      verse: 'Lamentations 3:22'
    },
    {
      id: 'help',
      slug: 'help',
      title: 'Prayers for Help',
      description: 'Ask for divine assistance in your needs',
      icon: <FaHandsHelping className="w-8 h-8" />,
      color: 'from-emerald-600 to-emerald-800',
      prayerCount: 72,
      verse: 'Psalm 121:1'
    },
    {
      id: 'deliverance',
      slug: 'deliverance',
      title: 'Deliverance Prayers',
      description: 'Freedom from bondage and oppression',
      icon: <FaDove className="w-8 h-8" />,
      color: 'from-amber-600 to-amber-800',
      prayerCount: 58,
      verse: 'Psalm 34:4'
    },
    {
      id: 'thanksgiving',
      slug: 'thanksgiving',
      title: 'Thanksgiving Prayers',
      description: 'Express gratitude for God\'s blessings',
      icon: <FaStar className="w-8 h-8" />,
      color: 'from-pink-600 to-pink-800',
      prayerCount: 43,
      verse: '1 Thessalonians 5:18'
    },
    {
      id: 'healing',
      slug: 'healing',
      title: 'Healing Prayers',
      description: 'Physical, emotional and spiritual restoration',
      icon: <GiHealing className="w-8 h-8" />,
      color: 'from-teal-600 to-teal-800',
      prayerCount: 56,
      verse: 'Jeremiah 17:14'
    },
    {
      id: 'protection',
      slug: 'protection',
      title: 'Protection Prayers',
      description: 'Divine covering and spiritual safety',
      icon: <FaPrayingHands className="w-8 h-8" />,
      color: 'from-indigo-600 to-indigo-800',
      prayerCount: 48,
      verse: 'Psalm 91:4'
    },
    {
      id: 'wisdom',
      slug: 'wisdom',
      title: 'Wisdom Prayers',
      description: 'Guidance and discernment in decisions',
      icon: <GiSpellBook className="w-8 h-8" />,
      color: 'from-violet-600 to-violet-800',
      prayerCount: 39,
      verse: 'James 1:5'
    },
    {
      id: 'peace',
      slug: 'peace',
      title: 'Peace Prayers',
      description: 'Calmness in the midst of storms',
      icon: <FaPeace className="w-8 h-8" />,
      color: 'from-cyan-600 to-cyan-800',
      prayerCount: 51,
      verse: 'Philippians 4:7'
    },
    {
      id: 'family',
      slug: 'family',
      title: 'Family Prayers',
      description: 'Blessings over your household',
      icon: <BsHeartPulse className="w-8 h-8" />,
      color: 'from-fuchsia-600 to-fuchsia-800',
      prayerCount: 67,
      verse: 'Joshua 24:15'
    },
    {
      id: 'forgiveness',
      slug: 'forgiveness',
      title: 'Forgiveness Prayers',
      description: 'Powerful prayers from God\'s Word',
      icon: <FaBible className="w-8 h-8" />,
      color: 'from-orange-600 to-orange-800',
      prayerCount: 82,
      verse: 'Hebrews 4:12'
    }
  ];

  const filteredCategories = prayerCategories.filter(category => 
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Animated Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-900 shadow-2xl">
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Divine <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Prayer</span> Collection
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Spiritual nourishment through powerful prayers for every season of life
          </p>
          

          <div className="mt-8 w-full mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search prayer categories "
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                value={searchTerm}
                onChange={handleSearch}
              />
              <svg
                className="absolute right-5 top-4 h-6 w-6 text-purple-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="mt-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:border-white/40 transition-all">
              <GiPrayer className="inline mr-3 text-purple-300 text-xl" />
              <span className="text-purple-100 font-medium">
                {prayerCategories.reduce((sum, cat) => sum + cat.prayerCount, 0)}+ Prayers Across {prayerCategories.length} Categories
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-screen-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <div 
              key={category.id} 
              onClick={() => handleCategoryClick(category.id)}
            >
              <PrayerCategoryCard category={category} />
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-purple-200 mb-2">No prayer categories found</h3>
            <p className="text-purple-100">Try searching for &ldquo;faith&rdquo;, &ldquo;healing&rdquo;, or &ldquo;protection&rdquo;</p>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-6 rounded-xl border border-blue-800/50">
            <div className="text-blue-300 text-3xl mb-4">
              <GiPrayer />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Daily Devotion</h3>
            <p className="text-blue-100">Start each day with guided prayer routines</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-6 rounded-xl border border-purple-800/50">
            <div className="text-purple-300 text-3xl mb-4">
              <FaBible />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Scripture-Based</h3>
            <p className="text-purple-100">Rooted in biblical truths and promises</p>
          </div>
          <div className="bg-gradient-to-br from-rose-900/50 to-rose-800/30 p-6 rounded-xl border border-rose-800/50">
            <div className="text-rose-300 text-3xl mb-4">
              <RiMentalHealthLine />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Spiritual Wellness</h3>
            <p className="text-rose-100">Nourish your soul and find inner peace</p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 text-9xl opacity-10 text-white">
            <GiPrayer />
          </div>
          <blockquote className="relative z-10 text-center max-w-3xl mx-auto">
            <p className="text-2xl italic text-white/90 leading-relaxed">
              &ldquo;I pray because I can&apos;t help myself. I pray because I&apos;m helpless. I pray because the need flows out of me all the time, waking and sleeping. It doesn&apos;t change God, it changes me.&rdquo;
            </p>
            <footer className="mt-6 text-purple-300 font-medium">— C.S. Lewis</footer>
          </blockquote>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 border-t border-white/10 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 mb-6">
            May the Lord bless you and keep you as you seek Him in prayer
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://your-profile-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              onClick={() => trackEvent("Footer", "Profile Click", "Developer Link")}
            >
              Developer Profile
            </a>
          </div>
          <div className="text-sm text-white/50">
            © {new Date().getFullYear()} Divine Prayer Collection. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}