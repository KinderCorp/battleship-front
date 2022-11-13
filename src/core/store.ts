import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import * as homeConstants from '@home/constants';
import type { AppStore, RootState } from '@core/models';
import homeReducer from '@home/reducer';

export const rootReducer = combineReducers({
  [homeConstants.NAME]: homeReducer,
});

/**
 * Setup store.
 *
 * @param {PreloadedState<RootState>} preloadedState Preloaded store
 * @return {AppStore}
 */
const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    preloadedState,
    reducer: rootReducer,
  });
};

export default setupStore;
