import { createSelector } from '@reduxjs/toolkit';

import type {
  GamePlayer,
  GameRoom,
  GameRoomSettings,
  GameSettings,
  GameState,
  GameView,
} from '@game/models';
import { parseGameRoom, parseGameSettings } from '@game/helpers';
import { GAME_NAME } from '@game/constants';
import type { RootState } from '@core/models';
import socket from '@socket/index';

/**
 * Select global game state.
 *
 * @param {RootState} state Current state
 * @return {GameState}
 */
const selectGameState = (state: RootState): GameState => state[GAME_NAME] || ({} as GameState);

export const selectGameSettings = createSelector(
  selectGameState,
  (state: GameState): GameSettings => parseGameSettings(state.settings),
);

export const selectGameView = createSelector(
  selectGameState,
  (state: GameState): GameView => state.view || 'settings',
);

export const selectGameRoom = createSelector(
  selectGameState,
  (state: GameState): GameRoom => parseGameRoom(state.gameRoom),
);

export const selectGameRoomInstanceId = createSelector(
  selectGameRoom,
  (state: GameRoom): string => state.instanceId,
);

export const selectGameRoomSettings = createSelector(
  selectGameRoom,
  (state: GameRoom): GameRoomSettings => state.settings,
);

export const selectGameRoomPlayers = createSelector(
  selectGameRoom,
  (state: GameRoom): GamePlayer[] => state.players,
);

export const selectGameRoomPlayerAdmin = createSelector(
  selectGameRoomPlayers,
  (state: GamePlayer[]): GamePlayer => state.find((player) => player.isAdmin) || ({} as GamePlayer),
);

export const selectGameRoomPlayerRival = createSelector(
  selectGameRoomPlayers,
  (state: GamePlayer[]): GamePlayer =>
    state.find((player) => !player.isAdmin) || ({} as GamePlayer),
);

export const selectGameRoomPlayer = createSelector(
  selectGameRoomPlayers,
  (state: GamePlayer[]): GamePlayer =>
    state.find((player) => player.socketId === socket.id) || ({} as GamePlayer),
);

export const selectGameRoomOtherPlayer = createSelector(
  selectGameRoomPlayers,
  (state: GamePlayer[]): GamePlayer =>
    state.find((player) => player.socketId !== socket.id) || ({} as GamePlayer),
);
