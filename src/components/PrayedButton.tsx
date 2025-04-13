'use client';
import { useState, useEffect } from 'react';
import { HandsPraying } from '@phosphor-icons/react';

export default function PrayedButton({ prayerId }: { prayerId: number }) {
  const [prayed, setPrayed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePrayed = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/prayed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prayerId, action: prayed ? 'unprayed' : 'prayed' })
      });

      if (response.ok) {
        setPrayed(!prayed);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Check initial state
  useEffect(() => {
    async function checkPrayed() {
      try {
        const res = await fetch(`/api/prayed?prayerId=${prayerId}`);
        const data = await res.json();
        setPrayed(data.prayed);
      } catch (error) {
        console.error('Failed to check prayed status:', error);
      }
    }
    checkPrayed();
  }, [prayerId]);

  return (
    <button
      onClick={handlePrayed}
      disabled={loading}
      className={`p-1 transition-colors ${prayed ? 'text-green-400' : 'text-gray-400 hover:text-green-400'}`}
      aria-label={prayed ? "Mark as not prayed" : "Mark as prayed"}
    >
      <HandsPraying className={`w-5 h-5 ${prayed ? 'fill-current' : ''}`} />
    </button>
  );
}