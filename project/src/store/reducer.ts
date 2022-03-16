import {createReducer} from '@reduxjs/toolkit';
import {currentCity} from './action';
import {Cities} from '../constant';

const initialState = {
  currentCity: Cities.PARIS,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(currentCity, (state, action) => {
      state.currentCity = action.payload;
    });
});

export {reducer};
