import { createSelector } from '@reduxjs/toolkit';

import { GAME_EXTENDED_SETTINGS, GAME_NAME, GAME_SETTINGS } from '@game/constants';
import type {
  GameExtendedSettings,
  GamePlayer,
  GameRoom,
  GameSettings,
  GameState,
  GameView,
} from '@game/models';
import type { RootState } from '@core/models';
import socket from '@socket/index';

/**
 * Select global game state.
 *
 * @param {RootState} state Current state
 * @return {GameState}
 */
const selectGameState = (state: RootState): GameState | Partial<GameState> =>
  state[GAME_NAME] || ({} as GameState);

export const selectGameSettings = createSelector(
  selectGameState,
  (state: GameState | Partial<GameState>): GameSettings | Partial<GameSettings> =>
    state.settings || GAME_SETTINGS,
);

export const selectGameView = createSelector(
  selectGameState,
  (state: GameState | Partial<GameState>): GameView | Partial<GameView> => state.view || 'settings',
);

export const selectGameRoom = createSelector(
  selectGameState,
  (state: GameState | Partial<GameState>): GameRoom | Partial<GameRoom> =>
    state.gameRoom || ({} as GameRoom),
);

export const selectGameInstance = createSelector(
  selectGameRoom,
  (state: GameRoom | Partial<GameRoom>): string => state.instanceId || '',
);

export const selectGameRoomSettings = createSelector(
  selectGameRoom,
  (state: GameRoom | Partial<GameRoom>): GameExtendedSettings | Partial<GameExtendedSettings> =>
    state.settings || GAME_EXTENDED_SETTINGS,
);

export const selectGameRoomSettingsAuthorizedFleet = createSelector(
  selectGameRoomSettings,
  (
    state: GameExtendedSettings | Partial<GameExtendedSettings>,
  ): GameExtendedSettings['authorisedFleet'] =>
    state.authorisedFleet || GAME_EXTENDED_SETTINGS.authorisedFleet,
);

export const selectGameRoomSettingsBoardDimensions = createSelector(
  selectGameRoomSettings,
  (
    state: GameExtendedSettings | Partial<GameExtendedSettings>,
  ): GameExtendedSettings['boardDimensions'] =>
    state.boardDimensions || GAME_EXTENDED_SETTINGS.boardDimensions,
);

export const selectGameRoomSettingsHasBoatsSafetyZone = createSelector(
  selectGameRoomSettings,
  (
    state: GameExtendedSettings | Partial<GameExtendedSettings>,
  ): GameExtendedSettings['hasBoatsSafetyZone'] =>
    state.hasBoatsSafetyZone || GAME_EXTENDED_SETTINGS.hasBoatsSafetyZone,
);

export const selectGamePlayers = createSelector(
  selectGameRoom,
  (state: GameRoom | Partial<GameRoom>): GamePlayer[] => state.players || ([] as GamePlayer[]),
);

export const selectGamePlayerAdmin = createSelector(
  selectGamePlayers,
  (state: GamePlayer[]): GamePlayer | Partial<GamePlayer> =>
    state.find((player) => player?.isAdmin) || ({} as GamePlayer),
);

export const selectGamePlayerRival = createSelector(
  selectGamePlayers,
  (state: GamePlayer[]): GamePlayer | Partial<GamePlayer> =>
    state.find((player) => !player?.isAdmin) || ({} as GamePlayer),
);

export const selectGamePlayer = createSelector(
  selectGamePlayers,
  (state: GamePlayer[]): GamePlayer | Partial<GamePlayer> =>
    state.find((player) => player?.socketId === socket.id) || ({} as GamePlayer),
);

export const selectGameOtherPlayer = createSelector(
  selectGamePlayers,
  (state: GamePlayer[]): GamePlayer | Partial<GamePlayer> =>
    state.find((player) => player?.socketId !== socket.id) || ({} as GamePlayer),
);
