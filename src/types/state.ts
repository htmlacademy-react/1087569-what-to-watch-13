import { TFilm } from './film';
import { TPromoFilm } from './promo-film';
import { store } from '../store';
import { AuthorizationStatus } from '../consts';

export type TUserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type TFilmsProcess = {
  films: TFilm[];
  filmsCount: number;
  activeGenre: string;
  isFilmsDataLoaded: boolean;
  hasError: boolean;
}

export type TPromoFilmProcess = {
  promoFilm: TPromoFilm | null;
}

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
