import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Auth';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
