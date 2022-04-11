import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@store';
import { AppStatePathName } from '@store/slices/appSlice';

export const selectApp = (state: RootState) => state[AppStatePathName];

export const appSelector = createSelector(selectApp, (app) => app);

export const isAppLoadedSelector = createSelector(selectApp, (app) => app.isLoaded);

export const isAppLoadingSelector = createSelector(selectApp, (app) => app.isLoading);
