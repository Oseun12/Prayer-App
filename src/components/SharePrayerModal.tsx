// 'use client';

// import { useState } from 'react';
import PrayerCard from './PrayerCard';

interface SharePrayerModalProps {
  prayer: {
    id: string;
    content: string;
    verse?: string;
  };
  accentColor: string;
  categoryTitle: string;
  categoryIcon: React.ReactNode;
  onClose: () => void;
}

export default function SharePrayerModal({
  prayer,
  accentColor,
  categoryTitle,
  categoryIcon,
  onClose,
}: SharePrayerModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="relative bg-gray-900 rounded-xl max-w-2xl w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white"
        >
          ✕
        </button>
        
        <h3 className={`text-xl font-bold mb-6 ${accentColor}`}>
          Share this Prayer
        </h3>
        
        <PrayerCard 
          prayer={prayer}
          accentColor={accentColor}
          categoryTitle={categoryTitle}
          categoryIcon={categoryIcon}
        />
      </div>
    </div>
  );
}