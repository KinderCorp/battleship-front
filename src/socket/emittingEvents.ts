import { formatGameRoomData } from '@socket/helpers';
import type { GameSettings } from '@game/models';
import type { GuestPlayer } from '@player/models';
import socket from '@socket/index';
import { SOCKET_EVENTS_EMITTING } from '@socket/constants';

/**
 * Emitting event for create the game.
 *
 * @param {GuestPlayer} data Data
 */
export const emitCreateGame = ({ pseudo }: GuestPlayer) => {
  socket.emit(SOCKET_EVENTS_EMITTING.CREATE_GAME, { pseudo, socketId: socket.id });
};

/**
 * Emitting event for game settings.
 *
 * @param {GameSettings} data Data
 */
export const emitGameSettings = (data: GameSettings) => {
  socket.emit(SOCKET_EVENTS_EMITTING.GAME_SETTINGS, formatGameRoomData<GameSettings>(data));
};

/**
 * Emitting event for player joining a game.
 *
 * @param {string} instanceId Instance id
 * @param {GuestPlayer} data Data
 */
export const emitPlayerJoiningGame = (instanceId: string, { pseudo }: GuestPlayer) => {
  socket.emit(SOCKET_EVENTS_EMITTING.PLAYER_JOINING_GAME, {
    data: {
      pseudo,
      socketId: socket.id,
    },
    instanceId,
  });
};
