import { TFilm } from '../../types/film';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute, TIMER_VIDEO } from '../../consts';
import { MouseEvent, useEffect, useState, memo } from 'react';
import VideoPlayer from '../video-player/video-player';

type MainCardProps = {
  film: TFilm;
  onMouseEnterHandler: (event: MouseEvent<HTMLElement>) => void;
  onMouseLeaveHandler: () => void;
  isActive?: boolean;
}

function MainCard({film, onMouseEnterHandler, onMouseLeaveHandler, isActive}: MainCardProps): JSX.Element {
  const {id, name, previewImage, previewVideoLink} = film;
  const [activePlayer, setActivePlayer] = useState<boolean>(false);

  useEffect(() => {
    if(!isActive) {
      return;
    }

    const timer = setTimeout(() => setActivePlayer(true), TIMER_VIDEO);

    return () => {
      clearTimeout(timer);
      setActivePlayer(false);
    };
  }, [isActive]);

  return (
    <article
      className="small-film-card catalog__films-card"
      data-id={id}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <Link to={generatePath(AppRoute.Film, { id: id })}>
        <div className="small-film-card__image">
          {activePlayer ? <VideoPlayer src={previewVideoLink} poster={previewImage} isMuted isPlaying /> :
            <img src={previewImage} alt={name} width="280" height="175" />}
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.Film, { id: id })}>{name}</Link>
      </h3>
    </article>
  );
}

export default memo(MainCard);
