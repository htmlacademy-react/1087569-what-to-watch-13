import { createSlice } from '@reduxjs/toolkit';
import { fetchSimilarFilmsAction } from '../api-actions';
import { NameSpace } from '../../consts';
import { TSimilarFilmsProcess } from '../../types/state';

const initialState: TSimilarFilmsProcess = {
  similarFilms: []
};

export const similarFilmsProcess = createSlice({
  name: NameSpace.SimilarFilms,
  initialState,
  reducers: {
    clearSimilarFilms: (state) => {
      state.similarFilms = [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      });
  }
});

export const {clearSimilarFilms} = similarFilmsProcess.actions;
