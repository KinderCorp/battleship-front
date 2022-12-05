import type { GameRoom } from '@game/models';
import { setInstanceId } from '@game/reducer';
import store from '@core/store';

/**
 * Listening event when game is created.
 *
 * @param {GameRoom} payload Payload
 * @return {void}
 */
export const listeningGameCreated = (payload: GameRoom): void => {
  store.dispatch(setInstanceId(payload.instanceId));
};
