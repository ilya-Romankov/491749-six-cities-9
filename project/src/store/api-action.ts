import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {loadHostels, requireAuthorization, setError} from './action';
import {Hostel} from '../types/hostel';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {saveToken} from '../services/token';
import {AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../constant';
import {errorHandle} from '../helper/error';


export const fetchHostelsAction = createAsyncThunk(
  'data/fetchHostels',
  async () => {
    try {
      const {data} = await api.get<Hostel[]>('/hotels');
      store.dispatch(loadHostels(data));
    } catch (e) {
      errorHandle(e);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(AppRoute.Sign_In);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (e) {
      errorHandle(e);
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(AppRoute.Sign_In, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (e) {
      errorHandle(e);
    }
  },
);

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


