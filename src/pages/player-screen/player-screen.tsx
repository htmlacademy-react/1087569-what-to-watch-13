import { Loader } from '../../components/loader/loader';
import VideoPlayer from '../../components/video-player/video-player';
import ExitPlayerButton from '../../components/exit-player-button/exit-player-button';
import PlayerControlsList from '../../components/player-controls-list/player-controls-list';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate, generatePath } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmAction } from '../../store/api-actions';
import { dropFilm } from '../../store/film-process/film-process.slice';
import { getFilm, getFilmLoadedStatus } from '../../store/film-process/film-process.selectors';
import { useEffect, useState } from 'react';
import { AppRoute } from '../../consts';

function PlayerScreen(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const film = useAppSelector(getFilm);
  const isFilmLoaded = useAppSelector(getFilmLoadedStatus);

  const handleExitButtonClick = () => {
    if (id) {
      navigate(generatePath(AppRoute.Film, {id: id}));
    }
  };

  const handlePlayButtonClick = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleTimeUpdate = (currentProgress: number, currTime: number) => {
    setProgress(currentProgress);
    setCurrentTime(currTime);
  };

  const handleLoadedMetaData = (currDuration: number) => {
    setDuration(currDuration);
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
    }

    return () => {
      dispatch(dropFilm());
    };
  },[id, dispatch]);

  return !isFilmLoaded ? <Loader /> : (
    <div className="player">
      <Helmet>
        <title>Просмотр</title>
      </Helmet>
      {
        film ?
          <VideoPlayer
            src={film.videoLink}
            poster={film.posterImage}
            isPlaying={isPlaying}
            onPlayToogle={handlePlayButtonClick}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMeta={handleLoadedMetaData}
          /> : ''
      }

      <ExitPlayerButton onClick={handleExitButtonClick}/>

      <PlayerControlsList
        onPlayButtonClick={handlePlayButtonClick}
        isPlaying={isPlaying}
        progress={progress}
        duration={duration}
        currentTime={currentTime}
      />
    </div>
  );
}

export default PlayerScreen;
