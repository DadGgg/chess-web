import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import accountsSlice from './accountsSlice';
import gamesSlice from './gamesSlice';
import chessboardSlice from './chessboardSlice';
import Practice from '../pages/Practice';
import practiceSlice from './practiceSlice';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    account: accountsSlice.reducer,
    game: gamesSlice.reducer,
    chessboard: chessboardSlice.reducer,
    practice: practiceSlice.reducer,
  }
});

export type GetRootState = typeof store.getState;

export type RootState = ReturnType<GetRootState>;

export type RootDispatch = typeof store.dispatch;