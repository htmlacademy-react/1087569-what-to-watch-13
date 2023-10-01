import FormComment from '../../components/form-comment/form-comment';
import Header from '../../components/header/header';
import { Loader } from '../../components/loader/loader';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchFilmAction } from '../../store/api-actions';
import { dropFilm } from '../../store/film-process/film-process.slice';
import { getFilm, getFilmLoadedStatus } from '../../store/film-process/film-process.selectors';
import { useEffect } from 'react';

function AddReviewScreen(): JSX.Element {
  const {id = ''} = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const isFilmLoaded = useAppSelector(getFilmLoadedStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
    }

    return () => {
      dispatch(dropFilm());
    };
  }, [id, dispatch]);


  return !isFilmLoaded ? <Loader /> : (
    <>
      <Helmet>
        <title>Отзыв о фильме</title>
      </Helmet>
      {film ?
        <section className="film-card film-card--full">
          <div className="film-card__header">
            <div className="film-card__bg">
              <img src={film.backgroundImage} alt={film.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header isAuthorized isCommentPage filmId={film.id} filmName={film.name} />

            <div className="film-card__poster film-card__poster--small">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>
          </div>

          <FormComment filmId={film.id} />

        </section> : ''}
    </>
  );
}

export default AddReviewScreen;
