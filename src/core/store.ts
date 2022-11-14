/* eslint-disable jsdoc/require-returns */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import * as homeConstants from '@home/constants';
import homeReducer from '@home/reducer';
import type { RootState } from '@core/models';

export const rootReducer = combineReducers({
  [homeConstants.NAME]: homeReducer,
});

/**
 * Setup store.
 *
 * @param {PreloadedState<RootState>} preloadedState Preloaded store
 */
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    preloadedState,
    reducer: rootReducer,
  });
};

const store = setupStore();

export default store;
