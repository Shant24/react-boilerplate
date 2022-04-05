import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../';
import { AppStatePathName } from '../slices/appSlice';

export const selectApp = (state: RootState) => state[AppStatePathName];

export const appSelector = createSelector(selectApp, (app) => app);

export const isAppLoadedSelector = createSelector(selectApp, (app) => app.isLoaded);

export const isAppLoadingSelector = createSelector(selectApp, (app) => app.isLoading);
