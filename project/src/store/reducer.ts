import {createReducer} from '@reduxjs/toolkit';
import {
  currentCity,
  currentSort,
  loadHostels,
  requireAuthorization,
  setError,
  currentDataCity,
  loadCurrentHostels,
  loadComments, loadNearbyHostels
} from './action';
import {groupByCity} from '../helper/data-group';
import {Cities, SortKey, AuthorizationStatus, AllCity, emptyHostel} from '../constant';

const initialState = {
  currentCity: Cities.PARIS,
  currentDataCity: AllCity.PARIS,
  currentHostel: emptyHostel,
  currentSort: SortKey.POPULAR,
  groupCities: groupByCity([]),
  nearbyHostels: groupByCity([]),
  comments: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(currentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(currentSort, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(loadHostels, (state, action) => {
      state.groupCities = groupByCity(action.payload);
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(currentDataCity, (state, action) => {
      state.currentDataCity = action.payload;
    })
    .addCase(loadCurrentHostels, (state, action) => {
      state.currentHostel = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadNearbyHostels, (state, action) => {
      state.nearbyHostels = groupByCity(action.payload);
    });
});

export {reducer};
