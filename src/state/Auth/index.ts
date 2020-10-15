import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { AuthStateType } from './types';

const initialState: AuthStateType = {
  loading: false,
  data: undefined,
  updatedAt: undefined,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
      state.updatedAt = new Date().toString();
    },
    removeUser: (state) => {
      state = initialState;
    },
  },
});

export const { setUser, removeUser } = AuthSlice.actions;

export const selectors = {
  selectCurrentUser: (state: RootState) => state.auth.data,
};

export default AuthSlice;
