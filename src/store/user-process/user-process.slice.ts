import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../consts';
import { TUserProcess } from '../../types/state';
import { loginAction, logoutAction, checkAuthAction } from '../api-actions';

const initialState: TUserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  avatar: ''
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, actions) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.avatar = actions.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, actions) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.avatar = actions.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
