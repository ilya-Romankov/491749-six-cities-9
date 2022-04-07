import {createAsyncThunk} from '@reduxjs/toolkit';
import {dropToken, saveToken} from '../services/token';
import {api, store} from './index';
import {Comments, SendComment} from '../types/comment';
import {Hostel} from '../types/hostel';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {FavoriteData} from '../types/favorite-data';
import {errorHandle} from '../helper/error';
import {ApiRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../constant';
import {groupByCity} from '../helper/data-group';
import {
  comments,
  currentHostel,
  setError,
  groupHostels,
  nearbyHostels,
  favoritesHostel
} from './data-process/data-process';
import {emailUser, requireAuthorization} from './user-process/user-procces';

export const fetchHostelsAction = createAsyncThunk(
  'data/fetchHostels',
  async () => {
    try {
      const {data} = await api.get<Hostel[]>(ApiRoute.Hostels);
      store.dispatch(groupHostels(groupByCity(data)));
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
      store.dispatch(currentHostel(data));
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
      store.dispatch(comments(data));
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
      store.dispatch(nearbyHostels(groupByCity(data)));
    } catch (e) {
      errorHandle(e);
    }
  },
);

export const fetchFavoriteHostelsAction = createAsyncThunk(
  'data/fetchFavoriteHostels',
  async () => {
    try {
      const {data} = await api.get<Hostel[]>(ApiRoute.Favorite);
      store.dispatch(favoritesHostel(data));
    } catch (e) {
      errorHandle(e);
    }
  },
);

export const editStatusHostelsAction = createAsyncThunk(
  'data/editStatusHostels',
  async ({id, status}: FavoriteData) => {
    try {
      await api.post(`${ApiRoute.Favorite}/${id}/${status}`);
      store.dispatch(fetchHostelsAction());
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
      const {data} = await api.post<UserData>(AppRoute.Sign_In, {email, password});
      saveToken(data.token);
      store.dispatch(emailUser(data.email));
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


