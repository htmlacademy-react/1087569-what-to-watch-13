import { NameSpace } from '../../consts';
import { TState } from '../../types/state';
import { TFilm } from '../../types/film';

export const getSimilarFilms = (state: TState): TFilm[] => state[NameSpace.SimilarFilms].similarFilms;
