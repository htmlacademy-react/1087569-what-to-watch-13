import { createAction } from '@reduxjs/toolkit';
import { NameSpace, AppRoute } from '../consts';

export const redirectToRoute = createAction<typeof AppRoute>(`${NameSpace.App}/redirectToRoute`);
