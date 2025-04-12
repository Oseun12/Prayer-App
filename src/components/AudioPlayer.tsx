import { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

interface AudioPlayerProps {
  audioUrl: string;
}

export default function AudioPlayer({ audioUrl }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    if (audioUrl) {
      soundRef.current = new Howl({
        src: [audioUrl],
        volume: isMuted ? 0 : volume,
        onend: () => setIsPlaying(false)
      });

      return () => {
        if (soundRef.current) {
          soundRef.current.unload();
        }
      };
    }
  }, [audioUrl]);

  const togglePlay = () => {
    if (!soundRef.current) return;

    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (soundRef.current) {
      soundRef.current.volume(newVolume);
    }
  };

  const toggleMute = () => {
    if (soundRef.current) {
      soundRef.current.volume(isMuted ? volume : 0);
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="flex items-center space-x-4 bg-white/10 p-3 rounded-lg">
      <button 
        onClick={togglePlay}
        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      
      <div className="flex items-center space-x-2">
        <button onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24"
          aria-label="Volume control"
        />
      </div>
    </div>
  );
}