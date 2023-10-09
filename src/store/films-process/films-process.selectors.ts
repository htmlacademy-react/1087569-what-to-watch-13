import { NameSpace } from '../../consts';
import { TState } from '../../types/state';
import { TFilm } from '../../types/film';

export const getFilms = (state: TState): TFilm[] => state[NameSpace.Films].films;
export const getActiveGenre = (state: TState): string => state[NameSpace.Films].activeGenre;
export const getFilmsLoadedStatus = (state: TState): boolean => state[NameSpace.Films].isFilmsDataLoaded;
export const getErrorStatus = (state: TState): boolean => state[NameSpace.Films].hasError;
