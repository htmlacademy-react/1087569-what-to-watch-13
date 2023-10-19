import { NameSpace } from '../../consts';
import { TState } from '../../types/state';
import { TFilm } from '../../types/film';

export const getFavoriteFilms = (state: TState): TFilm[] => state[NameSpace.FavoriteFilms].favoriteFilms;
export const getChangeStatusError = (state: TState): boolean => state[NameSpace.FavoriteFilms].hasChangeStatusError;
export const getLoadedError = (state: TState): boolean => state[NameSpace.FavoriteFilms].hasLoadedError;
