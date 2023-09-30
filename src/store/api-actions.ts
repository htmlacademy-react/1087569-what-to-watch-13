import { createAsyncThunk } from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import { TFilm, TFilmDetail } from '../types/film';
import { TPromoFilm } from '../types/promo-film';
import { TComment, TCommentData } from '../types/comment';
import { TAppDispatch, TState } from '../types/state';
import { TAuthData } from '../types/auth-data';
import { TUserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';
import { redirectToRoute } from './actions';
import { NameSpace, APIRoute, AppRoute } from '../consts';

export const fetchFilmsAction = createAsyncThunk<TFilm[], undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Films}/fetch`,
  async(_arg, {extra: api}) => {
    const {data} = await api.get<TFilm[]>(APIRoute.Films);

    return data;
  }
);

export const fetchSimilarFilmsAction = createAsyncThunk<TFilm[], TFilmDetail['id'], {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.SimilarFilms}/fetch`,
  async (filmId, {extra: api}) => {
    const {data} = await api.get<TFilm[]>(`${APIRoute.Films}/${filmId}/similar`);

    return data;
  }
);

export const fetchFilmAction = createAsyncThunk<TFilmDetail, TFilmDetail['id'], {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Film}/fetch`,
  async (filmId, {extra: api}) => {
    const {data} = await api.get<TFilmDetail>(`${APIRoute.Films}/${filmId}`);

    return data;
  }
);

export const fetchPromoFilmAction = createAsyncThunk<TPromoFilm, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.PromoFilm}/fetch`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TPromoFilm>(APIRoute.Promo);

    return data;
  }
);

export const fetchCommentsAction = createAsyncThunk<TComment[], TFilmDetail['id'], {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Comments}/fetch`,
  async (filmId, {extra: api}) => {
    const {data} = await api.get<TComment[]>(`${APIRoute.Comments}/${filmId}`);

    return data;
  }
);

export const postCommentAction = createAsyncThunk<TComment, {commentData: TCommentData; filmId: TFilmDetail['id']}, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Comments}/add`,
  async ({commentData, filmId}, {extra: api}) => {
    const {data} = await api.post<TComment>(`${APIRoute.Comments}/${filmId}`, commentData);

    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  }
);

export const loginAction = createAsyncThunk<void, TAuthData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/login`,
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<TUserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/logout`,
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
