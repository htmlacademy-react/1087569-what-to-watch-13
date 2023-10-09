import { NameSpace } from '../../consts';
import { TState } from '../../types/state';
import { TFilm } from '../../types/film';

export const getFavoriteFilms = (state: TState): TFilm[] => state[NameSpace.FavoriteFilms].favoriteFilms;
