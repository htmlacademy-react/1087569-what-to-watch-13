import { NameSpace } from '../../consts';
import { TState } from '../../types/state';
import { TFilm } from '../../types/film';
import { getGenres } from '../../utils';
import { createSelector } from '@reduxjs/toolkit';

export const getFilms = (state: TState): TFilm[] => state[NameSpace.Films].films;
export const getActiveGenre = (state: TState): string => state[NameSpace.Films].activeGenre;
export const getFilmsLoadedStatus = (state: TState): boolean => state[NameSpace.Films].isFilmsDataLoaded;
export const getErrorStatus = (state: TState): boolean => state[NameSpace.Films].hasError;
export const getUnicGenres = createSelector(
  getFilms,
  (films) => getGenres(films)
);
