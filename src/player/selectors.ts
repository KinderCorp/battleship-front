import { createSelector } from '@reduxjs/toolkit';

import { PLAYER_NAME } from '@player/constants';
import type { PlayerState } from '@player/models';
import type { RootState } from '@core/models';

/**
 * Select global game state.
 *
 * @param {RootState} state Current state
 * @return {PlayerState}
 */
const selectPlayerState = (state: RootState): PlayerState => state[PLAYER_NAME];

export const selectPlayer = createSelector(selectPlayerState, (state: PlayerState) => state.player);
