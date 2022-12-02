import type { GameSettings } from '@game/models';
import socket from '@socket/index';
import { SOCKET_EVENTS } from '@socket/constants';

/**
 * Emitting when settings game is updating.
 *
 * @param {any} payload Payload
 */
export const updateSettingsEmitting = (payload: GameSettings) => {
  socket.emit(SOCKET_EVENTS.UPDATE_SETTINGS, payload);
};
