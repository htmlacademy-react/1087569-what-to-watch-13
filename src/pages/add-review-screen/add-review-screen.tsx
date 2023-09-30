import Logo from '../../components/logo/logo';
import FormComment from '../../components/form-comment/form-comment';
import { Loader } from '../../components/loader/loader';
import { Helmet } from 'react-helmet-async';
import { Link, generatePath, useParams } from 'react-router-dom';
import { AppRoute } from '../../consts';
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

            <header className="page-header">
              <Logo />

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link to={generatePath(AppRoute.Film, { id: film.id })} className="breadcrumbs__link">{film.name}</Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>

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

            <div className="film-card__poster film-card__poster--small">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>
          </div>

          <FormComment />

        </section> : ''}
    </>
  );
}

export default AddReviewScreen;
