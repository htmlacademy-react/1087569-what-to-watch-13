import { fetchPromoFilmAction } from '../api-actions';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { TPromoFilmProcess } from '../../types/state';

const initialState: TPromoFilmProcess = {
  promoFilm: null
};

export const promoFilmProcess = createSlice({
  name: NameSpace.PromoFilm,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      });
  }
});
