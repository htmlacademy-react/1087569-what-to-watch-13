import Footer from '../../components/footer/footer';
import ErrorScreen from '../error-screen/error-screen';
import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import Catalog from '../../components/catalog/catalog';
import { Loader } from '../../components/loader/loader';
import { Helmet } from 'react-helmet-async';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getFilmsLoadedStatus, getErrorStatus } from '../../store/films-process/films-process.selectors';
import { resetFilmsCount } from '../../store/films-process/films-process.slice';
import { useEffect } from 'react';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const isFilmsLoadedStatus = useAppSelector(getFilmsLoadedStatus);
  const hasError = useAppSelector(getErrorStatus);

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
        <Catalog />
        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
