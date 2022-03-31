import {createAction} from '@reduxjs/toolkit';
import {Hostel} from '../types/hostel';
import {AuthorizationStatus} from '../constant';

export const currentCity = createAction('mainScreen/currentCity', (city) => ({payload: city}));

export const currentSort = createAction('mainScreen/currentSort', (sort) => ({payload: sort}));

export const loadHostels = createAction<Hostel[]>('data/loadHostels');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string>('game/setError');
