import { createAsyncThunk } from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import { TFilm } from '../types/film';
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
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TFilm[]>(APIRoute.Films);

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
