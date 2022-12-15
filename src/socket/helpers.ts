import type { GameRoom, GameRoomData } from '@game/models';
import { selectGameInstance } from '@game/selectors';
import store from '@core/store';

/**
 * Format game room data.
 *
 * @param {any} data Data
 * @param {GameRoom['instanceId']} instanceId Instance id
 * @return {GameRoomData}
 */
export const formatGameRoomData = <T>(
  data: any,
  instanceId: GameRoom['instanceId'] = selectGameInstance(store.getState()),
): GameRoomData<T> => ({
  data,
  instanceId,
});
