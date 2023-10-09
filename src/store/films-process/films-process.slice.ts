import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, DEFAULT_GENRE } from '../../consts';
import { TFilmsProcess } from '../../types/state';
import { fetchFilmsAction } from '../api-actions';

const initialState: TFilmsProcess = {
  films: [],
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

export const {setActiveGenre} = filmsProcess.actions;
