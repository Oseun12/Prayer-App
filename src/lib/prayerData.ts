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
import anxietyPrayers from '@/data/prayers/anxietyPrayers';
import blessingsPrayers from '@/data/prayers/blessingPrayers';
import businessPrayers from '@/data/prayers/businessPrayers';
import childrenPrayers from '@/data/prayers/childrenPrayers';
import clarityPrayers from '@/data/prayers/clarityPrayer';
import destinyPrayers from '@/data/prayers/destinyPrayers';
import divineConnectionPrayers from '@/data/prayers/divineConnectionPrayers';
import divineHealthPrayers from '@/data/prayers/divineHealth';
import elevationPrayers from '@/data/prayers/elevationPrayers';
import examSuccessPrayers from '@/data/prayers/examSuccessPrayers';
import favorPrayers from '@/data/prayers/favorPrayers';
import financialPrayers from '@/data/prayers/financialPrayers';
import fruitfulnessPrayers from '@/data/prayers/fruitfulnessPrayers';
import guidancePrayers from '@/data/prayers/guidancePrayers';
import jobPrayers from '@/data/prayers/jobPrayers';
import joyPrayers from '@/data/prayers/joyPrayer';
import maritalSettlementPrayers from '@/data/prayers/maritalSettlementPrayers';
import morningPrayers from '@/data/prayers/morningPrayers';
import nightRestPrayersPrayers from '@/data/prayers/nightRestPrayers';
import promotionPrayers from '@/data/prayers/promotionPrayers';
import restorationPrayers from '@/data/prayers/restorationPrayer';
import spiritualWarfarePrayers from '@/data/prayers/spiritualWalfarePrayers';
import strengthPrayers from '@/data/prayers/strengthPrayers';
import travelPrayers from '@/data/prayers/travelPrayers';

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
    'forgiveness': forgivenessPrayers,
    'anxiety': anxietyPrayers,
    'blessing': blessingsPrayers,
    'business': businessPrayers,
    'children': childrenPrayers,
    'clarity': clarityPrayers,
    'destiny': destinyPrayers,
    'divine-connection': divineConnectionPrayers,
    'divine-health': divineHealthPrayers,
    'elevation': elevationPrayers,
    'exam-success': examSuccessPrayers,
    'favor': favorPrayers,
    'financial-breakthrough': financialPrayers,
    'fruitfulness': fruitfulnessPrayers,
    'guidance': guidancePrayers,
    'job': jobPrayers,
    'joy': joyPrayers,
    'marriage': maritalSettlementPrayers,
    'morning': morningPrayers,
    'night-rest': nightRestPrayersPrayers,
    'promotion': promotionPrayers,
    'restoration': restorationPrayers,
    'spiritual-warfare': spiritualWarfarePrayers,
    'strength': strengthPrayers,
    'travel': travelPrayers,
  } as const;

  export type PrayerSlug = keyof typeof allPrayers;

  export function isValidSlug(slug: string): slug is PrayerSlug {
    return slug in allPrayers;
  }
  
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
    'forgiveness': 'Forgiveness Prayers',
    'anxiety': "Anxiety Prayers",
    'blessing': 'Prayers for Blessing',
    'business': 'Business Prayers',
    'children': 'Prayers for Children',
    'clarity': 'Clarity Prayers',
    'destiny': 'Destiny Prayers',
    'divine-connection': 'Divine Connection Prayers',
    'divine-health': 'Divine Health Prayers',
    'elevation': 'Elevation Prayers',
    'exam-success': 'Examination Success Prayers',
    'favor': 'Prayers for Favor',
    'financial-breakthrough': 'Breakthrough Prayers',
    'fruitfulness': 'Fruitfulness Prayers',
    'guidance': 'Guidance Prayers',
    'job': 'Job Opportunities Prayers',
    'joy': 'Abundant Joy Prayers',
    'marriage': 'Marital Settlement Prayers',
    'morning': 'Morning Prayers',
    'night-rest': 'Night Prayers',
    'promotion': 'Promotion Prayers',
    'restoration': 'Restoration Prayers',
    'spiritual-warfare': 'Spiritual Warfare Prayers',
    'strength': 'Power and Strength Prayers',
    'travel': 'Mercy Journies Prayers',
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
    'forgiveness': 'from-yellow-900 to-amber-900',
    'anxiety': 'from-cyan-900 to-cyan-400',
    'blessing': 'from-green-400 to-green-600',
    'business': 'from-yellow-900 to-yellow-600',
    'children': 'from-pink-500 to-pink-900',
    'clarity': "from-slate-700 to-slate-600",
    'destiny': 'from-violet-900 to-violet-500',
    'divine-connection': 'from-cyan-900 to-cyan-500',
    'divine-health': 'from-green-900 to-green-500',
    'elevation': 'from-blue-900 to-blue-600',
    'exam-success': 'from-orange-900 to-orange-700',
    'favor': 'from-fuchsia-900 to-pink-900',
    'financial-breakthrough': 'from-amber-600 to-amber-900',
    'fruitfulness': 'from-lime-900 to-lime-600',
    'guidance': 'from-indigo-900 to-indigo-600',
    'job': 'from-amber-900 to-amber-600',
    'joy': 'from-yellow-400 to-yellow-600',
    'marriage': 'from-rose-900 to-rose-600',
    'morning': 'from-yellow-200 to-yellow-400',
    'night-rest': 'from-slate-900 to-slate-600',
    'promotion': 'from-lime-600 to-lime-800',
    'restoration': 'from-pink-700 to-pink-500',
    'spiritual-warfare': 'from-red-800 to-red-700',
    'strength': 'from-rose-900 to-rose-700',
    'travel': 'from-sky-900 to-sky-700',
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
    'forgiveness': 'text-yellow-300',
    'anxiety': 'text-white',
    'blessing': 'text-yellow-300',
    'business': 'text-cyan-300',
    'children': 'text-fuchsia-300',
    'clarity': 'text-slate-400',
    'destiny': 'text-sky-400',
    'divine-connection': 'text-emerald-300',
    'divine-health': 'text-yellow-400',
    'elevation': 'text-neutral-400',
    'exam-success': 'text-orange-500',
    'favor': 'text-fuchsia-300',
    'financial-breakthrough': 'text-amber-200',
    'fruitfulness': 'text-lime-400',
    'guidance': 'text-indigo-400',
    'job': 'text-amber-400',
    'joy': 'text-yellow-100',
    'marriage': 'text-rose-300',
    'morning': 'text-yellow-200',
    'night-rest': 'text-slate-400',
    'promotion': 'text-lime-400',
    'restoration': 'text-pink-400',
    'spiritual-warfare': 'text-red-300',
    'strength': 'text-rose-300',
    'travel': 'text-sky-400',
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
    'forgiveness': '📖',
    'anxiety': '🕯️',
    'blessing': '🌟',
    'business': '💰',
    'children': '👶',
    'clarity': '💡',
    'destiny': '🌟',
    'divine-connection': '🔗',
    'divine-health': '✝️',
    'elevation': '🚀',
    'exam-success': '🏆',
    'favor': '🙏',
    'financial-breakthrough': '💰',
    'fruitfulness': '🌳',
    'guidance': '🔦',
    'job': '💼',
    'joy': '😊',
    'marriage': '💍',
    'morning': '🌅',
    'night-rest': '🛌',
    'promotion': '🎯',
    'restoration': '🔄',
    'spiritual-warfare': '⚔️',
    'strength': '💪',
    'travel': '✈️',
  };

  
