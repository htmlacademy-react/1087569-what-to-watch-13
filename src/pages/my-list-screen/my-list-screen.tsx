import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import CardsList from '../../components/cards-list/cards-list';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/favorite-process/favorite-process.selectors';

function MyListScreen(): JSX.Element {
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const favoriteFilmsCount = favoriteFilms.length;

  return (
    <div className="user-page">
      <Helmet>
        <title>Мои фильмы</title>
      </Helmet>
      <Header isAuthorized isMyList favoriteFilmsCount={favoriteFilmsCount}/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CardsList films={favoriteFilms}/>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
