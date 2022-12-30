import { createSelector } from '@reduxjs/toolkit';

import type { GamePlayer, GameRoom, GameRoomSettings, GameSettings, GameState } from '@game/models';
import { GAME_NAME } from '@game/constants';
import type { GameView } from '@game/constants';
import { parseGameState } from '@game/helpers';
import type { RootState } from '@core/models';
import socket from '@socket/index';

/**
 * Select global game state.
 *
 * @param {RootState} state Current state
 * @return {GameState}
 */
const selectGameState = (state: RootState): GameState => parseGameState(state[GAME_NAME]);

export const selectGameSettings = createSelector(
  selectGameState,
  (state: GameState): GameSettings => state.settings,
);

export const selectGameView = createSelector(
  selectGameState,
  (state: GameState): GameView => state.view,
);

export const selectGameRoom = createSelector(
  selectGameState,
  (state: GameState): GameRoom => state.gameRoom,
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

export const selectGameRoomPlayerHost = createSelector(
  selectGameRoomPlayers,
  (state: GamePlayer[]): GamePlayer => state.find((player) => player.isHost) || ({} as GamePlayer),
);

export const selectGameRoomPlayerRival = createSelector(
  selectGameRoomPlayers,
  (state: GamePlayer[]): GamePlayer => state.find((player) => !player.isHost) || ({} as GamePlayer),
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
