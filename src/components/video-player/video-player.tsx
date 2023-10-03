import { useRef, useEffect } from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  isMuted?: boolean;
  isPlaying?: boolean;
  onPlayToogle?: () => void;
  onTimeUpdate?: (progress: number) => void;
}

function VideoPlayer({src, poster, isMuted, isPlaying, onPlayToogle, onTimeUpdate}: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current && onTimeUpdate) {
      const duration = videoRef.current.duration;
      const currentTime = videoRef.current.currentTime;
      const progress = (currentTime / duration) * 100;
      onTimeUpdate(progress);
    }
  };

  const handleEnded = () => {
    if (videoRef.current && onPlayToogle && onTimeUpdate) {
      videoRef.current.pause();
      onTimeUpdate(0);
      onPlayToogle();
    }
  };

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!playerElement) {
      return;
    }

    if (isPlaying) {
      playerElement.play();
      return;
    }

    playerElement.pause();

  }, [isPlaying]);


  return(
    <video
      className="player__video"
      ref={videoRef}
      onEnded={handleEnded}
      onTimeUpdate={handleTimeUpdate}
      src={src}
      poster={poster}
      muted={isMuted}
      autoPlay
    >
    </video>
  );
}

export default VideoPlayer;
