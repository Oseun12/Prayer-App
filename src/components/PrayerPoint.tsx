
import { Prayer } from "../types";

interface PrayerPointProps {
  prayer: Prayer;
  className?: string; 
}

export default function PrayerPoint({ prayer, className = "" }: PrayerPointProps) {
  return (
    <div className={`p-4 ${className}`}>
      <p className="text-lg">{prayer.content}</p>
    </div>
  );
}