import { createSelector } from '@reduxjs/toolkit';

import { GAME_EXTENDED_SETTINGS, GAME_NAME } from '@game/constants';
import type { GameExtendedSettings, GamePlayer, GameRoom, GameState } from '@game/models';
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

export const selectGameView = createSelector(selectGameState, (state: GameState) => state.view);

export const selectGameRoom = createSelector(
  selectGameState,
  (state: GameState): GameRoom => state.gameRoom || {},
);

export const selectGameInstance = createSelector(
  selectGameRoom,
  (state: GameRoom) => state.instanceId || '',
);

export const selectGameRoomSettings = createSelector(
  selectGameRoom,
  (state: GameRoom): GameExtendedSettings => state.settings || GAME_EXTENDED_SETTINGS,
);

export const selectGamePlayers = createSelector(
  selectGameRoom,
  (state: GameRoom) => state.players || [],
);

export const selectGamePlayerAdmin = createSelector(
  selectGamePlayers,
  (state: GamePlayer[]) => state.find((player) => player?.isAdmin) || null,
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
