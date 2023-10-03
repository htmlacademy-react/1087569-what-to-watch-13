import { useRef, useEffect } from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  isMuted?: boolean;
  isPlaying?: boolean;
  onPlayToogle?: () => void;
  onTimeUpdate?: (progress: number, currTime: number) => void;
  onLoadedMeta?: (duration: number) => void;
}

function VideoPlayer({src, poster, isMuted, isPlaying, onPlayToogle, onTimeUpdate, onLoadedMeta}: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current && onTimeUpdate) {
      const duration = videoRef.current.duration;
      const currentTime = videoRef.current.currentTime;
      const progress = (currentTime / duration) * 100;
      onTimeUpdate(progress, currentTime);
    }
  };

  const handleEnded = () => {
    if (videoRef.current && onPlayToogle && onTimeUpdate) {
      videoRef.current.pause();
      onTimeUpdate(0, 0);
      onPlayToogle();
    }
  };

  const handleMetaData = () => {
    if (videoRef.current && onLoadedMeta) {
      onLoadedMeta(videoRef.current.duration);
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
      onLoadedMetadata={handleMetaData}
      src={src}
      poster={poster}
      muted={isMuted}
      autoPlay
    >
    </video>
  );
}

export default VideoPlayer;
