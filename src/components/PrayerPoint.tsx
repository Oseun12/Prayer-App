interface Prayer {
    id: number;
    text: string;
  }
  
  export default function PrayerPoint({ prayer }: { prayer: Prayer }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
            <span className="text-indigo-600">✝</span>
          </div>
          <p className="text-gray-700 text-lg">{prayer.text}</p>
        </div>
      </div>
    );
  }