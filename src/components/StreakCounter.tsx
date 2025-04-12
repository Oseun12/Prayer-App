import { useState, useEffect } from 'react';

export default function StreakCounter() {
  const [streak, setStreak] = useState<number>(0);
  const [lastPrayerDate, setLastPrayerDate] = useState<Date | null>(null);

  useEffect(() => {
    const savedStreak = localStorage.getItem('prayerStreak');
    const savedDate = localStorage.getItem('lastPrayerDate');
    
    if (savedStreak) setStreak(parseInt(savedStreak));
    if (savedDate) setLastPrayerDate(new Date(savedDate));
  }, []);

  const updateStreak = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    let newStreak = streak;
    
    if (!lastPrayerDate) {
      newStreak = 1;
    } else {
      const lastDate = new Date(lastPrayerDate);
      lastDate.setHours(0, 0, 0, 0);
      
      if (lastDate.getTime() === today.getTime()) {
        return; // Already prayed today
      } else if (lastDate.getTime() === yesterday.getTime()) {
        newStreak += 1;
      } else {
        newStreak = 1; // Reset streak
      }
    }
    
    setStreak(newStreak);
    setLastPrayerDate(new Date());
    localStorage.setItem('prayerStreak', newStreak.toString());
    localStorage.setItem('lastPrayerDate', new Date().toISOString());
  };

  return (
    <div className="bg-white/10 p-4 rounded-lg text-center mb-6">
      <h3 className="text-lg font-semibold mb-2">Prayer Streak</h3>
      <p className="text-4xl font-bold">{streak} days</p>
      <button
        onClick={updateStreak}
        className="mt-4 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 text-sm"
      >
        I Prayed Today
      </button>
    </div>
  );
}