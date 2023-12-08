import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import accountsSlice from './side-effects/accountsSlice';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    account: accountsSlice.reducer
  }
});

export type GetRootState = typeof store.getState;

export type RootState = ReturnType<GetRootState>;

export type RootDispatch = typeof store.dispatch;