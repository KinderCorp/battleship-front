import type { GamePlayer, GameRoom } from '@game/models';
import { selectGamePlayerAdmin } from '@game/selectors';
import socket from '@socket/index';
import store from '@core/store';

// FIXME: transform this in selector?

/**
 * Check if a game is full.
 *
 * @param {GameRoom} gameRoom Game room
 * @return {boolean}
 */
export const checkGameIsFull = (gameRoom: GameRoom): boolean => {
  return gameRoom?.players?.length >= 2 || false;
};

/**
 * Check if the player is admin.
 *
 * @return {boolean}
 */
export const isPlayerAdmin = (): boolean => {
  const adminPlayer = selectGamePlayerAdmin(store.getState());

  return adminPlayer?.socketId === socket.id;
};

/**
 * Check if the boats player are ready.
 *
 * @param {GamePlayer} player Player
 * @return {boolean}
 */
export const areBoatsReady = (player: GamePlayer): boolean => {
  return !!player?.boatsAreReady;
};
