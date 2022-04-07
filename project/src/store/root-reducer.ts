import {combineReducers} from '@reduxjs/toolkit';
import {dataProcess} from './data-process/data-process';
import {userProcess} from './user-process/user-procces';
import {cityProcess} from './city-process/city-process';
import {NameSpace} from '../constant';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.City]: cityProcess.reducer,
});
