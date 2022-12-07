import type { GamePlayer, GameRoom } from '@game/models';

/**
 * Get admin player in the room.
 *
 * @param {Partial<GameRoom>} gameRoom Game room
 * @return {GamePlayer|null}
 */
export const getAdminPlayer = (gameRoom: Partial<GameRoom>): GamePlayer | null => {
  return gameRoom?.players?.find((player) => player.isAdmin) || null;
};

/**
 * Check if a game is full.
 *
 * @param {Partial<GameRoom>} gameRoom Game room
 * @return {boolean}
 */
export const checkGameIsFull = (gameRoom: Partial<GameRoom>): boolean => {
  return gameRoom?.players ? gameRoom.players.length >= 2 : false;
};
