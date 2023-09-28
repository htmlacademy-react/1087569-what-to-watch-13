import { createAction } from '@reduxjs/toolkit';
import { NameSpace, AppRoute } from '../consts';

export const redirectToRoute = createAction<AppRoute>(`${NameSpace.App}/redirectToRoute`);
