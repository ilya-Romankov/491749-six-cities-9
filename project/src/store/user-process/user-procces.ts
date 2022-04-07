import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace} from '../../constant';

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  emailUser: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    emailUser: (state, action) => {
      state.emailUser = action.payload;
    },
  },
});

export const {requireAuthorization, emailUser} = userProcess.actions;
