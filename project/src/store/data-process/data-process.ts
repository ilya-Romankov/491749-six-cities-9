import {createSlice} from '@reduxjs/toolkit';
import {emptyHostel, NameSpace} from '../../constant';
import {groupByCity} from '../../helper/data-group';

const initialState = {
  comments: [],
  currentHostel: emptyHostel,
  groupCities: groupByCity([]),
  nearbyHostels:  groupByCity([]),
  isDataLoaded: false,
  favoritesHostel: [],
  setError: '',
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    comments: (state, action) => {
      state.comments = action.payload;
    },
    currentHostel: (state, action) => {
      state.currentHostel = action.payload;
    },
    groupHostels: (state, action) => {
      state.groupCities = action.payload;
      state.isDataLoaded = true;
    },
    nearbyHostels: (state, action) => {
      state.nearbyHostels = action.payload;
    },
    setError: (state, action) => {
      state.setError = action.payload;
    },
    favoritesHostel: (state, action) => {
      state.favoritesHostel = action.payload;
    },
  },
});

export const {comments, nearbyHostels, groupHostels, currentHostel, setError, favoritesHostel} = dataProcess.actions;
