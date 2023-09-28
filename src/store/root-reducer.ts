import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { filmsProcess } from './films-process/films-process.slice';
import { userProcess } from './user-process/user-process.slice';
import { promoFilmProcess } from './promo-film-process/promo-film-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsProcess.reducer,
  [NameSpace.PromoFilm]: promoFilmProcess.reducer,
  [NameSpace.User]: userProcess.reducer
});
