'use client'

import { useState, useEffect } from 'react';
import Head from 'next/head';
import BackgroundMusic from '@/components/BackgroundMusic';
import PrayerCard from '@/components/PrayerCard';

interface Prayer {
  _id: string;
  title: string;
  content: string;
  category: string;
  audioUrl?: string;
  isDeclaration?: boolean;
  isAffirmation?: boolean;
  tags?: string[];
} 

interface Verse {
  verse: string;
  reference: string;
  date?: string;
}

export default function HomePage() {
  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [verse, setVerse] = useState<Verse | null>(null);
  const [activeTab, setActiveTab] = useState('morning');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState({
    prayers: false,
    verse: false
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(prev => ({...prev, prayers: true}));
        setError(null);
        
        const prayersRes = await fetch(`/api/prayers?category=${activeTab}`);
        if (!prayersRes.ok) throw new Error('Failed to fetch prayers');
        const prayersData = await prayersRes.json();
        setPrayers(prayersData);

        const verseRes = await fetch('/api/verses');
        if (!verseRes.ok) throw new Error('Failed to fetch verse');
        const verseData = await verseRes.json();
        setVerse(verseData);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(prev => ({...prev, prayers: false}));
      }
    };

    fetchData();
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white">
      <Head>
        <title>Divine Prayers - Daily Spiritual Nourishment</title>
        <meta name="description" content="Access prayers, declarations and affirmations for your daily spiritual growth" />
      </Head>

      <BackgroundMusic isPlaying={isMusicPlaying} />

      <main className="container mx-auto px-4 py-8">
        {/* Floating Header */}
        <header className="mb-8 text-center relative">
          <div className="absolute -top-6 left-0 right-0 h-16 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-xl"></div>
          <h1 className="text-4xl font-bold mb-2 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Divine Prayers
          </h1>
          <p className="text-white/70 relative z-10">Nourish your spirit with daily prayers and declarations</p>
        </header>

        {/* Verse of the Day - Enhanced */}
        {verse && (
          <div className="relative bg-white/5 p-6 rounded-xl mb-8 text-center backdrop-blur-sm border border-white/10 shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-xl font-semibold mb-2 text-purple-200">Verse of the Day</h2>
              <p className="italic mb-4 text-lg text-white/90">&ldquo;{verse.verse}&rdquo;</p>
              <p className="text-purple-300 font-medium">{verse.reference}</p>
              {verse.date && (
                <p className="text-xs mt-2 text-white/50">
                  {new Date(verse.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Prayer Categories - Enhanced */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white/5 rounded-xl p-1 backdrop-blur-sm border border-white/10 shadow">
            {['morning', 'afternoon', 'night', 'declaration', 'affirmation'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg capitalize transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                    : 'hover:bg-white/10 text-white/80'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Music Toggle - Enhanced */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsMusicPlaying(!isMusicPlaying)}
            className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
              isMusicPlaying 
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' 
                : 'bg-white/10 hover:bg-white/20 text-white/80'
            }`}
          >
            <span className="relative flex h-3 w-3">
              {isMusicPlaying && (
                <>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </>
              )}
            </span>
            {isMusicPlaying ? 'Music Playing' : 'Play Background Music'}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-2xl mx-auto bg-red-500/20 border border-red-500/50 text-red-200 p-4 rounded-lg mb-8">
            {error}
          </div>
        )}

        {/* Loading State */}
        {isLoading.prayers && (
          <div className="max-w-2xl mx-auto flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        )}

        {/* Prayers List - Enhanced */}
        <div className="max-w-2xl mx-auto space-y-6">
          {!isLoading.prayers && prayers.length === 0 && (
            <div className="text-center py-12 text-white/60">
              <p className="text-xl mb-2">No prayers found for this category</p>
              <p className="text-sm">Check back later or try another category</p>
            </div>
          )}

          {prayers.map((prayer) => (
            <PrayerCard key={prayer._id} prayer={prayer} />
          ))}
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="text-center py-6 text-white/50 text-sm relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent -z-10"></div>
        <p>© {new Date().getFullYear()} Divine Prayers. All rights reserved.</p>
        <p className="mt-1 text-xs text-white/30">Version 1.0.0</p>
      </footer>
    </div>
  );
}