import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface JournalEntry {
    id: number;
    content: string;
    date: string;
    isAnswered: boolean;
}

export default function Journal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const router = useRouter();

  useEffect(() => {
    const savedEntries = localStorage.getItem('prayerJournal');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const saveEntry = () => {
    if (!newEntry.trim()) return;
    
    const entry = {
      id: Date.now(),
      content: newEntry,
      date: new Date().toISOString(),
      isAnswered: false
    };
    
    const updatedEntries = [entry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('prayerJournal', JSON.stringify(updatedEntries));
    setNewEntry('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-black text-white p-6">
      <button 
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20"
      >
        ← Back
      </button>
      
      <h1 className="text-3xl font-bold mb-6">Prayer Journal</h1>
      
      <div className="mb-8">
        <textarea
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="Write your prayer or reflection here..."
          className="w-full p-4 bg-white/10 rounded-lg text-white placeholder-white/50"
          rows={5}
        />
        <button
          onClick={saveEntry}
          className="mt-2 px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          Save Entry
        </button>
      </div>
      
      <div className="space-y-4">
        {entries.map((entry) => (
          <div key={entry.id} className="p-4 bg-white/10 rounded-lg">
            <p className="whitespace-pre-line">{entry.content}</p>
            <div className="flex justify-between items-center mt-2 text-sm text-white/70">
              <span>{new Date(entry.date).toLocaleDateString()}</span>
              <button 
                onClick={() => {
                  const updated = entries.map(e => 
                    e.id === entry.id ? {...e, isAnswered: !e.isAnswered} : e
                  );
                  setEntries(updated);
                  localStorage.setItem('prayerJournal', JSON.stringify(updated));
                }}
                className={`px-3 py-1 rounded-full ${entry.isAnswered ? 'bg-green-600' : 'bg-white/20'}`}
              >
                {entry.isAnswered ? 'Answered' : 'Mark as Answered'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}