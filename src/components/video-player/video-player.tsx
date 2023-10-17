import { useRef, useEffect } from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  isPlaying?: boolean;
  isFullScreen?: boolean;
  onPlayToogle?: () => void;
  onTimeUpdate?: (progress: number, currTime: number) => void;
  onLoadedMeta?: (duration: number) => void;
  onDropFullScr?:(value: boolean) => void;
}

function VideoPlayer({src, poster, isPlaying, isFullScreen, onPlayToogle, onTimeUpdate, onLoadedMeta, onDropFullScr}: VideoPlayerProps): JSX.Element {
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

    if (!isPlaying) {
      playerElement.play();
      return;
    }

    playerElement.pause();

  }, [isPlaying]);

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!playerElement || !onDropFullScr) {
      return;
    }

    if (isFullScreen) {
      playerElement.requestFullscreen();
    }

    return () => {
      onDropFullScr(false);
    };
  }, [isFullScreen, onDropFullScr]);

  return(
    <video
      className="player__video"
      ref={videoRef}
      onEnded={handleEnded}
      onTimeUpdate={handleTimeUpdate}
      onLoadedMetadata={handleMetaData}
      src={src}
      poster={poster}
      muted
      autoPlay
    >
    </video>
  );
}

export default VideoPlayer;
