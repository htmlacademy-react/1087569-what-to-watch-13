import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import CardsList from '../../components/cards-list/cards-list';
import ErrorScreen from '../error-screen/error-screen';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms, getLoadedError } from '../../store/favorite-process/favorite-process.selectors';

function MyListScreen(): JSX.Element {
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const favoriteFilmsCount = favoriteFilms.length;
  const hasError = useAppSelector(getLoadedError);

  return (
    <div className="user-page">
      <Helmet>
        <title>Мои фильмы</title>
      </Helmet>
      <Header isAuthorized isMyList favoriteFilmsCount={favoriteFilmsCount}/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {hasError && <ErrorScreen isMyList/>}
        <CardsList films={favoriteFilms} filmsCount={favoriteFilmsCount} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
