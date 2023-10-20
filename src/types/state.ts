import { TFilm, TFilmDetail } from './film';
import { TPromoFilm } from './promo-film';
import { TComment } from './comment';
import { store } from '../store';
import { AuthorizationStatus, RequestStatus } from '../consts';

export type TUserProcess = {
  authorizationStatus: AuthorizationStatus;
  avatar: string;
  hasError: boolean;
}

export type TFilmsProcess = {
  films: TFilm[];
  activeGenre: string;
  isFilmsDataLoaded: boolean;
  hasError: boolean;
}

export type TFilmProcess = {
  film: TFilmDetail | null;
  isFilmLoaded: boolean;
}

export type TSimilarFilmsProcess = {
  similarFilms: TFilm [];
}

export type TFavoriteFilmsProcess = {
  favoriteFilms: TFilm[];
  hasChangeStatusError: boolean;
  hasLoadedError: boolean;
}

export type TCommentsProcess = {
  comments: TComment[];
  sendingCommentStatus: RequestStatus;
}

export type TPromoFilmProcess = {
  promoFilm: TPromoFilm | null;
}

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
