import type { GameSettings } from '@game/models';
import socket from '@socket/index';
import { SOCKET_EVENTS } from '@socket/constants';

/**
 * Emitting event for settings game.
 *
 * @param {GameSettings} payload Payload
 */
export const gameSettingsEvents = (payload: GameSettings) => {
  socket.emit(SOCKET_EVENTS.SETTINGS, payload);
};

/**
 * Emitting event for start the game.
 */
export const gameStartEvents = () => {
  socket.emit(SOCKET_EVENTS.START_GAME);
};
