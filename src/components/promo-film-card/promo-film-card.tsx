import Header from '../header/header';
import FilmButtonsList from '../film-buttons-list/film-buttons-list';
import { getPromoFilm } from '../../store/promo-film-process/promo-film-process.selectors';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { fetchPromoFilmAction } from '../../store/api-actions';
import { AuthorizationStatus } from '../../consts';

function PromoFilmCard(): JSX.Element {
  const dispatch = useAppDispatch();
  const promoFilm = useAppSelector(getPromoFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  useEffect(() => {
    dispatch(fetchPromoFilmAction());
  }, [dispatch]);

  return (
    <section className="film-card">

      <div className="film-card__bg">
        {
          promoFilm && isAuthorized ?
            <img src={promoFilm.backgroundImage} alt={promoFilm.name} /> :
            <img src="img/bg-header.jpg" />
        }
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header isAuthorized={isAuthorized} isPromo />
      { promoFilm && isAuthorized &&
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm.genre}</span>
              <span className="film-card__year">{promoFilm.released}</span>
            </p>

            <FilmButtonsList id={promoFilm.id} isAuthorized={isAuthorized}/>
          </div>
        </div>
      </div>}
    </section>
  );
}

export default PromoFilmCard;
