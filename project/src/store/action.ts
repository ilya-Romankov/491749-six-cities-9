import {createAction} from '@reduxjs/toolkit';

export const currentCity = createAction('mainScreen/currentCity', (city) => ({payload: city}));

export const currentSort = createAction('mainScreen/currentSort', (sort) => ({payload: sort}));
