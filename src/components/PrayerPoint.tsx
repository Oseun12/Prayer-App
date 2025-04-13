
import { Prayer } from "../types";

interface PrayerPointProps {
  prayer: Prayer;
  className?: string; 
}

export default function PrayerPoint({ prayer, className = "" }: PrayerPointProps) {
  return (
    <div className={`p-4 ${className}`}>
      <p className="text-lg">{prayer.text}</p>
      {/* {prayer.verse && (
        <p className="text-sm opacity-80 mt-2">— {prayer.verse}</p>
      )} */}
    </div>
  );
}