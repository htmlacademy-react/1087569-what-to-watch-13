import { TFilm } from '../../types/film';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../consts';

type MainCardProps = {
  film: TFilm;
}

function MainCard({film}: MainCardProps): JSX.Element {
  const {id, name, previewImage} = film;
  return (
    <article className="small-film-card catalog__films-card">
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
