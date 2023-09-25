import { createAsyncThunk } from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import { TFilm } from '../types/film';
import { TAppDispatch, TState } from '../types/state';
import { NameSpace, APIRoute } from '../consts';

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
