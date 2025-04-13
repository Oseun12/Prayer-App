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

export const allPrayers = {
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
  
  export const categoryTitles = {
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
  
  export const categoryColors = {
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
  
  export const accentColors = {
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
  
  export const categoryIcons = {
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

  
export type PrayerSlug = keyof typeof allPrayers;

export function isValidSlug(slug: string): slug is PrayerSlug {
  return slug in allPrayers;
}