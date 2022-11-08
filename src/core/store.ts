import type { AppStore, RootState } from './models';
import { combineReducers, configureStore, type PreloadedState } from '@reduxjs/toolkit';

import * as homeConstants from '@home/constants';
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
    preloadedState,
    reducer: rootReducer,
  });
};

export default setupStore;
