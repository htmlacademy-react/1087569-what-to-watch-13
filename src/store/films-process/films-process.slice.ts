import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, DEFAULT_GENRE, DEFAULT_FILMS_COUNT } from '../../consts';
import { TFilmsProcess } from '../../types/state';
import { fetchFilmsAction } from '../api-actions';

const initialState: TFilmsProcess = {
  films: [],
  filmsCount: DEFAULT_FILMS_COUNT,
  activeGenre: DEFAULT_GENRE,
  isFilmsDataLoaded: false,
  hasError: false
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
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoaded = false;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsDataLoaded = true;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isFilmsDataLoaded = false;
        state.hasError = true;
      });
  }
});

export const {setActiveGenre, changeFilmsCount, resetFilmsCount} = filmsProcess.actions;
