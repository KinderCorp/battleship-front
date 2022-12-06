import type { GameInstance } from '@game/models';
import { setInstanceId } from '@game/reducer';
import store from '@core/store';

/**
 * Listening event when game is created.
 *
 * @param {GameInstance} payload Payload
 * @return {void}
 */
export const listeningGameCreated = (payload: GameInstance): void => {
  store.dispatch(setInstanceId(payload.instanceId));
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
