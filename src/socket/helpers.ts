import type { GameRoomData } from '@game/models';
import store from '@core/store';

/**
 * Format game room data.
 *
 * @param {any} data Data
 * @return {GameRoomData}
 */
export const formatGameRoomData = <T>(data: any): GameRoomData<T> => {
  const instanceId = store.getState().GAME.gameRoom.instanceId || '';

  return {
    data,
    instanceId,
  };
};
