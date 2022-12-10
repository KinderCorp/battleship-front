import { createSelector } from '@reduxjs/toolkit';

import type { GamePlayer, GameRoom, GameState } from '@game/models';
import { GAME_NAME } from '@game/constants';
import type { RootState } from '@core/models';
import socket from '@socket/index';

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
  selectGameRoom,
  (state: GameRoom) => state.instanceId || '',
);

export const selectGameRoomSettings = createSelector(
  selectGameRoom,
  (state: GameRoom) => state.settings || {},
);

export const selectGamePlayers = createSelector(
  selectGameRoom,
  (state: GameRoom) => state.players || [],
);

export const selectGamePlayerAdmin = createSelector(
  selectGamePlayers,
  (state: GamePlayer[]) => state.find((player) => player.isAdmin) || null,
);

// TODO: check for isAdmin player is not optional
export const selectGamePlayerRival = createSelector(
  selectGamePlayers,
  (state: GamePlayer[]) => state.find((player) => !player?.isAdmin) || null,
);

export const selectGameOtherPlayer = createSelector(
  selectGamePlayers,
  (state: GamePlayer[]) => state.find((player) => player?.socketId !== socket.id) || null,
);
