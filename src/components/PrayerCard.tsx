import { motion } from 'framer-motion';
import AudioPlayer from './AudioPlayer';

interface PrayerCardProps {
  prayer: {
    _id: string;
    title: string;
    content: string;
    category: string;
    audioUrl?: string;
    isDeclaration?: boolean;
    isAffirmation?: boolean;
  };
}

export default function PrayerCard({ prayer }: PrayerCardProps) {
  return (
    <motion.div 
      className="relative bg-white/5 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{prayer.title}</h3>
          <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/80 capitalize">
            {prayer.category}
          </span>
        </div>
        
        <p className="text-white/90 mb-6 whitespace-pre-line leading-relaxed">
          {prayer.content}
        </p>
        
        {prayer.audioUrl && (
          <div className="mt-4">
            <AudioPlayer audioUrl={prayer.audioUrl} />
          </div>
        )}
        
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
          <div className="flex space-x-2">
            {prayer.isDeclaration && (
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded-full text-blue-300">
                Declaration
              </span>
            )}
            {prayer.isAffirmation && (
              <span className="text-xs px-2 py-1 bg-purple-500/20 rounded-full text-purple-300">
                Affirmation
              </span>
            )}
          </div>
          
          <div className="flex space-x-2">
            <button className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-white transition">
              Share
            </button>
            <button className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-white transition">
              Save
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}