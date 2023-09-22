import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { filmsProcess } from './films-process/films-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsProcess.reducer
});
