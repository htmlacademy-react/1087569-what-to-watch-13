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
import { useEffect } from 'react';
import { AppRoute } from '../../consts';

function PlayerScreen(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const film = useAppSelector(getFilm);
  const isFilmLoaded = useAppSelector(getFilmLoadedStatus);

  const handleExitButtonClick = () => {
    if (id) {
      navigate(generatePath(AppRoute.Film, {id: id}));
    }
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
      {film ? <VideoPlayer src={film.videoLink} poster={film.posterImage} /> : ''}

      <ExitPlayerButton onClick={handleExitButtonClick}/>

      <PlayerControlsList />
    </div>
  );
}

export default PlayerScreen;
