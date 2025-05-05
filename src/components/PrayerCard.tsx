'use client';

import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

interface PrayerCardProps {
  prayer: {
    id: string;
    content: string;
    verse?: string;
  };
  accentColor: string;
  categoryTitle: string;
  categoryIcon: React.ReactNode;
}

export default function PrayerCard({ prayer, accentColor, categoryTitle, categoryIcon }: PrayerCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleShare = async () => {
    if (!cardRef.current) return;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2, 
        logging: false,
        useCORS: true,
      });
      
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], 'prayer.png', { type: 'image/png' });
          const data = {
            files: [file],
            title: `${categoryTitle} Prayer`,
            text: prayer.content,
          };
          
          if (navigator.canShare && navigator.canShare(data)) {
            navigator.share(data).catch(console.error);
          } else {
            const link = document.createElement('a');
            link.download = 'prayer.png';
            link.href = URL.createObjectURL(blob);
            link.click();
          }
        }
      }, 'image/png');
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* The actual card design */}
      <div 
        ref={cardRef}
        className="w-full max-w-md bg-gray-900 rounded-xl p-8 shadow-2xl relative overflow-hidden"
        style={{
          aspectRatio: '1/1.91' 
        }}
      >
        {/* Background gradient */}
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            background: `linear-gradient(135deg, ${accentColor.replace('text-', '')} 0%, #000 100%)`
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-full ${accentColor} bg-black/30`}>
              {categoryIcon}
            </div>
            <h3 className={`text-xl font-bold ${accentColor}`}>{categoryTitle}</h3>
          </div>
          
          {/* Prayer text */}
          <div className="flex-1 flex items-center">
            <p className="text-white text-lg leading-relaxed text-center">
              {prayer.content}
            </p>
          </div>
          
          {/* Verse */}
          {prayer.verse && (
            <div className={`mt-6 text-sm italic text-center ${accentColor}`}>
              {prayer.verse}
            </div>
          )}
          
          {/* Footer */}
          <div className="mt-8 text-center text-xs text-white/50">
            Shared via Prayer App
          </div>
        </div>
      </div>
      
      {/* Share button */}
      <button
        onClick={handleShare}
        disabled={isGenerating}
        className={`px-6 py-3 rounded-full ${accentColor.replace('text', 'bg')} font-medium hover:opacity-90 transition-opacity`}
      >
        {isGenerating ? 'Generating...' : 'Share Prayer'}
      </button>
    </div>
  );
}