import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { ENVIRONMENT } from '@utils/constants';
import appReducer, { AppStatePathName } from '@store/slices/appSlice';

export const store = configureStore({
  devTools: ENVIRONMENT.isDev,
  reducer: {
    [AppStatePathName]: appReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({});

    return middlewares;
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
