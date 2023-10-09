import { fetchFavoritesAction, addFavoriteAction, deleteFavoriteAction } from '../api-actions';
import { NameSpace } from '../../consts';
import { TFavoriteFilmsProcess } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TFavoriteFilmsProcess = {
  favoriteFilms: []
};

export const favoriteProcess = createSlice({
  name: NameSpace.FavoriteFilms,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      })
      .addCase(addFavoriteAction.fulfilled, (state, action) => {
        const {genre, id, name, previewImage, previewVideoLink} = action.payload;

        state.favoriteFilms.push({genre, id, name, previewImage, previewVideoLink});
      })
      .addCase(deleteFavoriteAction.fulfilled, (state, action) => {
        const updateFilm = action.payload;
        state.favoriteFilms = state.favoriteFilms.filter((offer) => offer.id !== updateFilm.id);
      });
  }
});

