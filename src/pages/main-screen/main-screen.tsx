import Footer from '../../components/footer/footer';
import ErrorScreen from '../error-screen/error-screen';
import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import Catalog from '../../components/catalog/catalog';
import { Loader } from '../../components/loader/loader';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getFilmsLoadedStatus, getErrorStatus } from '../../store/films-process/films-process.selectors';

function MainScreen(): JSX.Element {
  const isFilmsLoadedStatus = useAppSelector(getFilmsLoadedStatus);
  const hasError = useAppSelector(getErrorStatus);

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
        <Catalog />
        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
