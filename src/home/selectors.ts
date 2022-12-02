import { createSelector } from '@reduxjs/toolkit';

import { HOME_NAME } from '@home/constants';
import type { HomeState } from '@home/models';
import type { RootState } from '@core/models';

/**
 * Select global home state.
 *
 * @param {RootState} state Current state
 * @return {HomeState}
 */
const selectHomeState = (state: RootState): HomeState => state[HOME_NAME];

export const selectHomeValue = createSelector(selectHomeState, (state: HomeState) => state.value);
export const selectHomeHelloWorld = createSelector(
  selectHomeState,
  (state: HomeState) => state.helloWorld,
);
