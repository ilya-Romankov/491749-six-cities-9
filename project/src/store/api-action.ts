import {createAsyncThunk} from '@reduxjs/toolkit';
import {dropToken, saveToken} from '../services/token';
import {api, store} from './index';
import {
  loadComments,
  loadCurrentHostels,
  loadHostels,
  loadNearbyHostels,
  requireAuthorization,
  setError
} from './action';
import {Comments, SendComment} from '../types/comment';
import {Hostel} from '../types/hostel';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {errorHandle} from '../helper/error';
import {ApiRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../constant';

export const fetchHostelsAction = createAsyncThunk(
  'data/fetchHostels',
  async () => {
    try {
      const {data} = await api.get<Hostel[]>(ApiRoute.Hostels);
      store.dispatch(loadHostels(data));
    } catch (e) {
      errorHandle(e);
    }
  },
);

export const fetchCurrentHostelAction = createAsyncThunk(
  'data/fetchCurrentHostel',
  async (id: number) => {
    try {
      const {data} = await api.get<Hostel>(`${ApiRoute.Hostels}/${id}`);
      store.dispatch(loadCurrentHostels(data));
    } catch (e) {
      errorHandle(e);
    }
  },
);

export const fetchCommentAction = createAsyncThunk(
  'data/fetchComment',
  async (id: number) => {
    try {
      const {data} = await api.get<Comments>(`${ApiRoute.Comments}/${id}`);
      store.dispatch(loadComments(data));
    } catch (e) {
      errorHandle(e);
    }
  },
);

export const fetchNearbyHostelsAction = createAsyncThunk(
  'data/fetchNearbyHostels',
  async (id: number) => {
    try {
      const {data} = await api.get<Hostel[]>(`${ApiRoute.Hostels}/${id}/nearby`);
      store.dispatch(loadNearbyHostels(data));
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

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(ApiRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
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

export const commentAction = createAsyncThunk(
  'user/comment',
  async ({comment, rating, id}: SendComment) => {
    try {
      await api.post<UserData>(`${ApiRoute.Comments}/${id}`, {comment, rating});
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


