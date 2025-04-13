'use client';
import { useState } from 'react';

export default function TestButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 p-4 bg-blue-600 text-white rounded-lg shadow-lg">
      <button 
        onClick={() => {
          console.log('TEST BUTTON CLICKED!');
          setClicked(true);
          setTimeout(() => setClicked(false), 1000);
        }}
        className="px-4 py-2 bg-white text-blue-600 rounded"
      >
        {clicked ? 'Clicked!' : 'Test Click Me'}
      </button>
      <p className="mt-2 text-sm">If this logs but bookmark doesn&apos;t, the issue is in your button implementation</p>
    </div>
  );
}