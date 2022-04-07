import {createSlice} from '@reduxjs/toolkit';
import {AllCity, Cities, NameSpace, SortKey} from '../../constant';

const initialState = {
  currentCity: Cities.PARIS,
  currentDataCity: AllCity.PARIS,
  currentSort: SortKey.POPULAR,
};

export const cityProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    currentCity: (state, action) => {
      state.currentCity = action.payload;
    },
    currentDataCity: (state, action) => {
      state.currentDataCity = action.payload;
    },
    currentSort: (state, action) => {
      state.currentSort = action.payload;
    },
  },
});

export const {currentCity, currentSort, currentDataCity} = cityProcess.actions;
