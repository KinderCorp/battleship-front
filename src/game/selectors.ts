import { createSelector } from '@reduxjs/toolkit';

import type { GameRoom, GameState } from '@game/models';
import { GAME_NAME } from '@game/constants';
import type { RootState } from '@core/models';

/**
 * Select global game state.
 *
 * @param {RootState} state Current state
 * @return {GameState}
 */
const selectGameState = (state: RootState) => state[GAME_NAME];

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
export const selectGamePlayerAdmin = createSelector(
  selectGameRoom,
  (state: Partial<GameRoom>) => state?.players?.find((player) => player.isAdmin) || null,
);
export const selectGamePlayerRival = createSelector(
  selectGameRoom,
  (state: Partial<GameRoom>) => state?.players?.find((player) => !player?.isAdmin) || null,
);
