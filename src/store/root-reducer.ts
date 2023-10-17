import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { filmsProcess } from './films-process/films-process.slice';
import { userProcess } from './user-process/user-process.slice';
import { promoFilmProcess } from './promo-film-process/promo-film-process.slice';
import { filmProcess } from './film-process/film-process.slice';
import { similarFilmsProcess } from './similar-films-process/similar-films-process.slice';
import { commentsProcess } from './comments-process/comments-process.slice';
import { favoriteProcess } from './favorite-process/favorite-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsProcess.reducer,
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.FavoriteFilms]: favoriteProcess.reducer,
  [NameSpace.PromoFilm]: promoFilmProcess.reducer,
  [NameSpace.SimilarFilms]: similarFilmsProcess.reducer,
  [NameSpace.Comments]: commentsProcess.reducer,
  [NameSpace.User]: userProcess.reducer
});
