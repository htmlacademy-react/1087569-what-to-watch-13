import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, DEFAULT_GENRE } from '../../consts';
import { TFilmsProcess } from '../../types/state';
import { films } from '../../mocks/films';

const initialState: TFilmsProcess = {
  films: films,
  activeGenre: DEFAULT_GENRE
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    setActiveGenre: (state, action) => {
      state.activeGenre = action.payload as string;
    }
  },
  extraReducers: {}
});

export const {setActiveGenre} = filmsProcess.actions;
