import { NameSpace } from '../../consts';
import { TState } from '../../types/state';
import { TFilmDetail } from '../../types/film';

export const getFilm = (state: TState):TFilmDetail | null => state[NameSpace.Film].film;
export const getFilmLoadedStatus = (state: TState): boolean => state[NameSpace.Film].isFilmLoaded;
