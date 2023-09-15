import { TFilm } from '../../types/film';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { MouseEvent } from 'react';

type MainCardProps = {
  film: TFilm;
  onMouseEnterHandler: (event: MouseEvent<HTMLElement>) => void;
  onMouseLeaveHandler: () => void;
}

function MainCard({film, onMouseEnterHandler, onMouseLeaveHandler}: MainCardProps): JSX.Element {
  const {id, name, previewImage} = film;
  return (
    <article
      className="small-film-card catalog__films-card"
      data-id={id}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.Film, {id: id})}>{name}</Link>
      </h3>
    </article>
  );
}

export default MainCard;
