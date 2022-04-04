import {createReducer} from '@reduxjs/toolkit';
import {currentCity, currentSort, loadHostels, requireAuthorization, setError, currentDataCity} from './action';
import {groupByCity} from '../helper/data-group';
import {Cities, SortKey, AuthorizationStatus, AllCity} from '../constant';

const initialState = {
  currentCity: Cities.PARIS,
  currentDataCity: AllCity.PARIS,
  currentSort: SortKey.POPULAR,
  groupCities: groupByCity([]),
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
    });
});

export {reducer};
