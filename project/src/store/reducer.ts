import {createReducer} from '@reduxjs/toolkit';
import {currentCity, currentSort} from './action';
import {groupByCity} from '../helper/data-group';
import {Cities, SortKey} from '../constant';
import {offers} from '../mock/offers';

const initialState = {
  currentCity: Cities.PARIS,
  currentSort: SortKey.POPULAR,
  groupCities: groupByCity(offers),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(currentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(currentSort, (state, action) => {
      state.currentSort = action.payload;
    });
});

export {reducer};
