import { createSlice } from '@reduxjs/toolkit';
import { TFilmProcess } from '../../types/state';
import { NameSpace } from '../../consts';
import { fetchFilmAction } from '../api-actions';

const initialState: TFilmProcess = {
  film: null,
  isFilmLoaded: false
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    dropFilm: (state) => {
      state.film = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmLoaded = true;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmLoaded = true;
      });
  }
});

export const {dropFilm} = filmProcess.actions;
