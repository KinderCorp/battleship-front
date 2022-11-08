import type { AppStore, RootState } from './models';
import { combineReducers, configureStore, type PreloadedState } from '@reduxjs/toolkit';

import * as home from '@home/index';

// const store = configureStore({
//   reducer: {
//     [home.NAME]: home.reducer,
//   },
// });

export const rootReducer = combineReducers({
  [home.NAME]: home.reducer,
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
