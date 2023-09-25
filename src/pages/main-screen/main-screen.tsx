import CardsList from '../../components/cards-list/cards-list';
import Logo from '../../components/logo/logo';
import GenresList from '../../components/genres-list/genres-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import Footer from '../../components/footer/footer';
import ErrorScreen from '../error-screen/error-screen';
import { Loader } from '../../components/loader/loader';
import { Helmet } from 'react-helmet-async';
import { TPromoFilm } from '../../types/promo-film';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getFilms, getActiveGenre, getFilmsCount, getFilmsLoadedStatus, getErrorStatus } from '../../store/films-process/films-process.selectors';
import { getGenres, getFilmsByGenre } from '../../utils';
import { resetFilmsCount } from '../../store/films-process/films-process.slice';
import { useEffect } from 'react';

type MainPageProps = {
  promoFilm: TPromoFilm;
}

function MainScreen({promoFilm}: MainPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isFilmsLoadedStatus = useAppSelector(getFilmsLoadedStatus);
  const hasError = useAppSelector(getErrorStatus);
  const activeGenre = useAppSelector(getActiveGenre);
  const films = useAppSelector(getFilms);
  const filmsCount = useAppSelector(getFilmsCount);
  const genres = getGenres(films);
  const filmsByGenre = getFilmsByGenre(films, activeGenre);

  useEffect(() => {
    dispatch(resetFilmsCount());
  }, [dispatch]);

  if (!isFilmsLoadedStatus) {
    return <Loader />;
  }

  if(hasError) {
    return <ErrorScreen />;
  }

  return (
    <>
      <section className="film-card">
        <Helmet>
          <title>Главная страница</title>
        </Helmet>
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.dateRelease}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres} activeGenre={activeGenre} />

          <CardsList films={filmsByGenre} />

          {filmsCount < filmsByGenre.length && <ShowMoreButton />}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
