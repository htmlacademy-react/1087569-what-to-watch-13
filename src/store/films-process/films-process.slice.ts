import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, DEFAULT_GENRE, DEFAULT_FILMS_COUNT } from '../../consts';
import { TFilmsProcess } from '../../types/state';
import { fetchFilmsAction, fetchFavoritesAction, addFavoriteAction, deleteFavoriteAction } from '../api-actions';

const initialState: TFilmsProcess = {
  films: [],
  filmsCount: DEFAULT_FILMS_COUNT,
  activeGenre: DEFAULT_GENRE,
  isFilmsDataLoaded: false,
  hasError: false,
  favoriteFilms: []
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
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      })
      .addCase(addFavoriteAction.fulfilled, (state, action) => {
        const updateFilmId = action.payload.id;
        const updateFilm = state.films.find((film) => film.id === updateFilmId);
        if (updateFilm) {
          state.favoriteFilms.push(updateFilm);
        }
      })
      .addCase(deleteFavoriteAction.fulfilled, (state, action) => {
        const updateFilm = action.payload;
        state.favoriteFilms = state.favoriteFilms.filter((offer) => offer.id !== updateFilm.id);
      });
  }
});

export const {setActiveGenre, changeFilmsCount, resetFilmsCount} = filmsProcess.actions;
