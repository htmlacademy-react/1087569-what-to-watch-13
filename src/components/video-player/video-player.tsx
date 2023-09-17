import { useRef, useState, useEffect } from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  isMuted?: boolean;
}

function VideoPlayer({src, poster, isMuted}: VideoPlayerProps): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleDataLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const playerElement = videoRef.current;

    if (!isLoaded || !playerElement) {
      return;
    }

    playerElement.addEventListener('loadeddata', handleDataLoaded);

    return () => {
      playerElement.removeEventListener('loadeddata', handleDataLoaded);
    };
  }, [isLoaded]);

  return(
    <video className="player__video" ref={videoRef} src={src} poster={poster} muted={isMuted} autoPlay></video>
  );
}

export default VideoPlayer;
