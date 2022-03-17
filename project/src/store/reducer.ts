import {createReducer} from '@reduxjs/toolkit';
import {currentCity} from './action';
import {groupByCity} from '../helper/data-group';
import {Cities} from '../constant';
import {offers} from '../mock/offers';

const initialState = {
  currentCity: Cities.PARIS,
  groupCities: groupByCity(offers),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(currentCity, (state, action) => {
      state.currentCity = action.payload;
    });
});

export {reducer};
