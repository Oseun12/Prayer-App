import { useEffect, useRef } from 'react';
import { Howl } from 'howler';

interface BackgroundMusicProps {
  isPlaying: boolean;
}

const BackgroundMusic = ({ isPlaying }: BackgroundMusicProps) => {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: ['/audio/background-music.mp3'],
      loop: true,
      volume: 0.3,
    });

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, []);

  useEffect(() => {
    if (!soundRef.current) return;

    if (isPlaying) {
      soundRef.current.play();
    } else {
      soundRef.current.pause();
    }
  }, [isPlaying]);

  return null;
};

export default BackgroundMusic;