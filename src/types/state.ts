import { TFilm } from './film';
import { store } from '../store';

export type TFilmsProcess = {
  films: TFilm[];
  activeGenre: string;
}

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
