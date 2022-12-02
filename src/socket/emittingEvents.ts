import type { GameSettings } from '@game/models';
import socket from '@socket/index';
import { SOCKET_EVENTS_EMITTING } from '@socket/constants';

/**
 * Emitting event for game settings.
 *
 * @param {GameSettings} payload Payload
 */
export const emitGameSettings = (payload: GameSettings) => {
  socket.emit(SOCKET_EVENTS_EMITTING.GAME_SETTINGS, payload);
};
/**

 * Emitting event for start the game.
 */
export const emitStartGame = () => {
  socket.emit(SOCKET_EVENTS_EMITTING.START_GAME);
};
