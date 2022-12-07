import { addGamePlayer, setInstanceId, setView } from '@game/reducer';
import type { GameInstance, GamePlayer, GameRoomData } from '@game/models';
import { PATHS } from '@core/constants';
import { selectPlayer } from '@player/selectors';
import socket from '@socket/index';
import store from '@core/store';
import UrlHelpers from '@helpers/UrlHelpers';

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
    store.dispatch(addGamePlayer({ isAdmin: true, pseudo: player.pseudo, socketId: socket.id }));
  }

  UrlHelpers.changeLocation(`${PATHS.GAME}/${payload.instanceId}`);
};

/**
 * Listening event when player joined.
 *
 * @param {GameRoomData<GamePlayer>} payload Payload
 * @return {void}
 */
export const listeningPlayerJoined = (payload: GameRoomData<GamePlayer>): void => {
  store.dispatch(addGamePlayer(payload.data));
};

/**
 * Listening event for start placing boats.
 *
 * @return {void}
 */
export const listeningStartPlacingBoats = (): void => {
  store.dispatch(setView('boats_placement'));
};
