import { fetchFavoritesAction, addFavoriteAction, deleteFavoriteAction } from '../api-actions';
import { NameSpace } from '../../consts';
import { TFavoriteFilmsProcess } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TFavoriteFilmsProcess = {
  favoriteFilms: [],
  hasChangeStatusError: false,
  hasLoadedError: false
};

export const favoriteProcess = createSlice({
  name: NameSpace.FavoriteFilms,
  initialState,
  reducers: {
    dropChangeStatusError: (state) => {
      state.hasChangeStatusError = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.hasLoadedError = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.favoriteFilms = [];
        state.hasLoadedError = true;
      })
      .addCase(addFavoriteAction.fulfilled, (state, action) => {
        const {genre, id, name, previewImage, previewVideoLink} = action.payload;

        state.favoriteFilms.push({genre, id, name, previewImage, previewVideoLink});
        state.hasChangeStatusError = false;
      })
      .addCase(addFavoriteAction.rejected, (state) => {
        state.hasChangeStatusError = true;
      })
      .addCase(deleteFavoriteAction.fulfilled, (state, action) => {
        const updateFilm = action.payload;
        state.favoriteFilms = state.favoriteFilms.filter((offer) => offer.id !== updateFilm.id);
        state.hasChangeStatusError = false;
      })
      .addCase(deleteFavoriteAction.rejected, (state) => {
        state.hasChangeStatusError = true;
      });
  }
});

export const {dropChangeStatusError} = favoriteProcess.actions;
