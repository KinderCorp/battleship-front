import * as home from '@home/index';
import { createSelector } from '@reduxjs/toolkit';
import type { HomeState } from '@home/models';
import type { RootState } from '@core/models';

/**
 * Select home state.
 *
 * @param {RootState} state Current state
 * @return {HomeState}
 */
export const selectHomeState = (state: RootState): HomeState => state[home.NAME];

export const selectHomeValue = createSelector(selectHomeState, (state: HomeState) => state.value);
