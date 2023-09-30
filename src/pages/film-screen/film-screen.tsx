import Footer from '../../components/footer/footer';
import CardsList from '../../components/cards-list/cards-list';
import { Loader } from '../../components/loader/loader';
import FilmCardFull from '../../components/film-card-full/film-card-full';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilm, getFilmLoadedStatus } from '../../store/film-process/film-process.selectors';
import { fetchFilmAction } from '../../store/api-actions';
import { dropFilm } from '../../store/film-process/film-process.slice';
import { fetchSimilarFilmsAction } from '../../store/api-actions';
import { getSimilarFilms } from '../../store/similar-films-process/similar-films-process.selectors';
import { clearSimilarFilms } from '../../store/similar-films-process/similar-films-process.slice';
import { useEffect } from 'react';

function FilmScreen(): JSX.Element {
  const {id = ''} = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms);
  const isFilmLoaded = useAppSelector(getFilmLoadedStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
      dispatch(fetchSimilarFilmsAction(id));
    }

    return () => {
      dispatch(dropFilm());
      dispatch(clearSimilarFilms());
    };
  },[id, dispatch]);

  return !isFilmLoaded ? <Loader /> : (
    <>
      <Helmet>
        <title>Страница фильма</title>
      </Helmet>
      {film ? <FilmCardFull film={film}/> : ''}
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <CardsList films={similarFilms}/>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmScreen;
