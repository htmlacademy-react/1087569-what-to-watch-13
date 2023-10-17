import { TFilmDetail } from '../../types/film';
import { getRatingLevel } from '../../utils';

type FilmOverviewProps = {
  film: TFilmDetail;
}

function FilmOverview({film}: FilmOverviewProps): JSX.Element {
  const {rating, scoresCount, description, director, starring} = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring: {starring.join(', ')}
            {starring.length > 4 ? ' and other' : ''}
          </strong>
        </p>
      </div>
    </>
  );
}

export default FilmOverview;
