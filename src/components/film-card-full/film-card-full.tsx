import TabsList from '../tabs-list/tabs-list';
import Header from '../header/header';
import FilmButtonsList from '../film-buttons-list/film-buttons-list';
import { AuthorizationStatus } from '../../consts';
import { TFilmDetail } from '../../types/film';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { getComments } from '../../store/comments-process/comments.process.selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchCommentsAction } from '../../store/api-actions';

type FilmCardFullProps = {
  film: TFilmDetail;
}

function FilmCardFull({film}: FilmCardFullProps): JSX.Element {
  const {id, name, posterImage, backgroundImage, genre, released} = film;
  const dispatch = useAppDispatch();
  const comments = useAppSelector(getComments);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  useEffect(() => {
    dispatch(fetchCommentsAction(id));
  }, [id, dispatch]);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header isAuthorized={isAuthorized}/>

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <FilmButtonsList id={id} isAuthorized={isAuthorized}/>
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
          </div>

          <TabsList film={film} comments={comments} />

        </div>
      </div>
    </section>
  );
}

export default FilmCardFull;
