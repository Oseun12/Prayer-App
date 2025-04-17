import { allPrayers, categoryTitles, categoryColors, accentColors, categoryIcons } from '@/lib/prayerData';
import { notFound } from 'next/navigation';
import PrayerCategoryClient from '@/components/PrayerCategoryClient';

export async function generateStaticParams() {
  return Object.keys(allPrayers).map((slug) => ({ slug }));
}

export default async function PrayerCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;  
  
  if (!(slug in allPrayers)) {
    return notFound();
  }

  const currentPrayers = allPrayers[slug as keyof typeof allPrayers].map((prayer) => ({
    id: String(prayer.id), 
    content: prayer.text,  
    verse: prayer.verse,
  }));
  
  const categoryTitle = categoryTitles[slug as keyof typeof categoryTitles];
  const gradientColors = categoryColors[slug as keyof typeof categoryColors];
  const accentColor = accentColors[slug as keyof typeof accentColors];
  const categoryIcon = categoryIcons[slug as keyof typeof categoryIcons];

  return (
    <PrayerCategoryClient 
      prayers={currentPrayers}
      categoryTitle={categoryTitle}
      gradientColors={gradientColors}
      accentColor={accentColor}
      categoryIcon={categoryIcon}
      slug={slug}
    />
  );
}