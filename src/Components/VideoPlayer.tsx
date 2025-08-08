// components/VideoPlayer.tsx
import  { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import video from '../assets/Dunamis Kings Video.mp4';

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
      <video
        ref={videoRef}
        className="w-full h-auto"
        src={video}
        //poster={videoImage} // Optional poster image
      ></video>

      {/* Overlay with centered button */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="bg-white p-4 rounded-full shadow-lg hover:bg-white transition"
          >
            <Play className="w-8 h-8 text-black" />
          </button>
        </div>
      )}

      {/* Show pause button when playing */}
      {isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute bottom-4 left-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition"
        >
          <Pause className="w-6 h-6 text-black" />
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
