import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, DEFAULT_GENRE, DEFAULT_FILMS_COUNT } from '../../consts';
import { TFilmsProcess } from '../../types/state';
import { films } from '../../mocks/films';

const initialState: TFilmsProcess = {
  films: films,
  filmsCount: DEFAULT_FILMS_COUNT,
  activeGenre: DEFAULT_GENRE
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    setActiveGenre: (state, action) => {
      state.activeGenre = action.payload as string;
    },
    changeFilmsCount: (state) => {
      state.filmsCount += DEFAULT_FILMS_COUNT;
    },
    resetFilmsCount: (state) => {
      state.filmsCount = DEFAULT_FILMS_COUNT;
    }
  },
  extraReducers: {}
});

export const {setActiveGenre, changeFilmsCount, resetFilmsCount} = filmsProcess.actions;
