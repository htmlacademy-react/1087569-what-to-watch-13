import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { TPromoFilm } from '../../types/promo-film';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { TFilm, TFilmDetail } from '../../types/film';
import { TComment } from '../../types/comment';

type AppScreenProps = {
  films: TFilm[];
  favoriteFilms: TFilm[];
  detailFilms: TFilmDetail[];
  similarFilms: TFilm[];
  promoFilm: TPromoFilm;
  comments: TComment[];
}

function App({films, favoriteFilms, detailFilms, similarFilms, promoFilm, comments}: AppScreenProps): JSX.Element {
  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <AddReviewScreen films={detailFilms} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<FilmScreen similarFilms={similarFilms} detailFilms={detailFilms} comments={comments}/>}
          />
          <Route
            path={AppRoute.SignIn}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Main}
            element={<MainScreen films={films} promoFilm={promoFilm}/>}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <MyListScreen favoriteFilms={favoriteFilms} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Player}
            element={<PlayerScreen films={detailFilms} />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
