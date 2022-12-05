/* eslint-disable jsdoc/require-returns */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import { GAME_NAME } from '@game/constants';
import gameReducer from '@game/reducer';
import { HOME_NAME } from '@home/constants';
import homeReducer from '@home/reducer';
import { PLAYER_NAME } from '@player/constants';
import playerReducer from '@player/reducer';
import type { RootState } from '@core/models';

export const rootReducer = combineReducers({
  [GAME_NAME]: gameReducer,
  [HOME_NAME]: homeReducer,
  [PLAYER_NAME]: playerReducer,
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
