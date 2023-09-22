import { NameSpace } from '../../consts';
import { TState } from '../../types/state';
import { TFilm } from '../../types/film';

export const getFilms = (state: TState): TFilm[] => state[NameSpace.Films].films;
export const getActiveGenre = (state: TState): string => state[NameSpace.Films].activeGenre;
