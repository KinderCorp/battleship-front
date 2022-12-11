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
  (state: GameRoom): GamePlayer[] => state.players || [],
);

export const selectGamePlayerAdmin = createSelector(
  selectGamePlayers,
  (state: GamePlayer[]): GamePlayer =>
    state.find((player) => player?.isAdmin) || ({} as GamePlayer),
);

export const selectGamePlayerRival = createSelector(
  selectGamePlayers,
  (state: GamePlayer[]): GamePlayer =>
    state.find((player) => !player?.isAdmin) || ({} as GamePlayer),
);

export const selectGamePlayer = createSelector(
  selectGamePlayers,
  (state: GamePlayer[]): GamePlayer =>
    state.find((player) => player?.socketId === socket.id) || ({} as GamePlayer),
);

export const selectGameOtherPlayer = createSelector(
  selectGamePlayers,
  (state: GamePlayer[]): GamePlayer =>
    state.find((player) => player?.socketId !== socket.id) || ({} as GamePlayer),
);
