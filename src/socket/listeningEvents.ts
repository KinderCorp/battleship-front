import { setGamePlayers, setInstanceId } from '@game/reducer';
import type { GameInstance } from '@game/models';
import { selectPlayer } from '@player/selectors';
import socket from '@socket/index';
import store from '@core/store';

/**
 * Listening event when game is created.
 *
 * @param {GameInstance} payload Payload
 * @return {void}
 */
export const listeningGameCreated = (payload: GameInstance): void => {
  store.dispatch(setInstanceId(payload.instanceId));

  const player = selectPlayer(store.getState());
  if (player) {
    store.dispatch(setGamePlayers([{ isAdmin: true, pseudo: player.pseudo, socketId: socket.id }]));
  }
};

/**
 * Listening event when player joined.
 *
 * @param {GameInstance} payload Payload
 * @return {void}
 */
export const listeningPlayerJoined = (payload: GameInstance): void => {
  store.dispatch(setInstanceId(payload.instanceId));
};
