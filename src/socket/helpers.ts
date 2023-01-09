import type { ApiGameRoomData } from '@api/models';
import type { GameRoom } from '@game/models';
import { selectGameRoomInstanceId } from '@game/selectors';
import store from '@core/store';

/**
 * Format game room data.
 *
 * @param {any} data Data
 * @param {GameRoom['instanceId']} instanceId Instance id
 * @return {ApiGameRoomData}
 */
export const formatGameRoomData = <T>(
  data: T,
  instanceId: GameRoom['instanceId'] = selectGameRoomInstanceId(store.getState()),
): ApiGameRoomData<T> => ({
  data,
  instanceId,
});
