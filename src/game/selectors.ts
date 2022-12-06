import { createSelector } from '@reduxjs/toolkit';

import { GAME_NAME } from '@game/constants';
import type { GameState } from '@game/models';
import type { RootState } from '@core/models';

/**
 * Select global game state.
 *
 * @param {RootState} state Current state
 * @return {GameState}
 */
const selectGameState = (state: RootState): GameState => state[GAME_NAME];

export const selectGameSettings = createSelector(
  selectGameState,
  (state: GameState) => state.settings,
);

export const selectGameRoom = createSelector(selectGameState, (state: GameState) => state.gameRoom);
export const selectGameView = createSelector(selectGameState, (state: GameState) => state.view);
export const selectGameInstance = createSelector(
  selectGameState,
  (state: GameState) => state.gameRoom.instanceId || '',
);
