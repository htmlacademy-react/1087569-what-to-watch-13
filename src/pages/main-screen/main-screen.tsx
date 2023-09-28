import CardsList from '../../components/cards-list/cards-list';
import GenresList from '../../components/genres-list/genres-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import Footer from '../../components/footer/footer';
import ErrorScreen from '../error-screen/error-screen';
import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import { Loader } from '../../components/loader/loader';
import { Helmet } from 'react-helmet-async';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getFilms, getActiveGenre, getFilmsCount, getFilmsLoadedStatus, getErrorStatus } from '../../store/films-process/films-process.selectors';
import { getGenres, getFilmsByGenre } from '../../utils';
import { resetFilmsCount } from '../../store/films-process/films-process.slice';
import { useEffect } from 'react';

function MainScreen(): JSX.Element {
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
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <PromoFilmCard />
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
