import type { GameRoom } from '@game/models';

/**
 * Check if a game is full.
 *
 * @param {GameRoom} gameRoom Game room
 * @return {boolean}
 */
export const checkGameIsFull = (gameRoom: GameRoom): boolean => {
  return gameRoom?.players?.length >= 2 || false;
};
