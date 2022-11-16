import { createSelector } from '@reduxjs/toolkit';

import * as homeConstants from '@home/constants';
import type { HomeState } from '@home/models';
import type { RootState } from '@core/models';

/**
 * Select global home state.
 *
 * @param {RootState} state Current state
 * @return {HomeState}
 */
export const selectHomeState = (state: RootState): HomeState => state[homeConstants.NAME];

export const selectHomeValue = createSelector(selectHomeState, (state: HomeState) => state.value);
export const selectHomeHelloWorld = createSelector(
  selectHomeState,
  (state: HomeState) => state.helloWorld,
);
