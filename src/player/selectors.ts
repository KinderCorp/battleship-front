import { createSelector } from '@reduxjs/toolkit';

import type { GuestPlayer, LoggedPlayer, PlayerState } from '@player/models';
import { PLAYER_NAME } from '@player/constants';
import type { RootState } from '@core/models';

/**
 * Select global game state.
 *
 * @param {RootState} state Current state
 * @return {PlayerState}
 */
const selectPlayerState = (state: RootState): PlayerState => state[PLAYER_NAME];

export const selectPlayer = createSelector(
  selectPlayerState,
  (state: PlayerState): Partial<GuestPlayer | LoggedPlayer> => state.player,
);
