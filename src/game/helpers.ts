import type { GameExtendedSettings, GamePlayer, GameRoom, GameRoomData } from '@game/models';
import { GAME_EXTENDED_SETTINGS } from '@game/constants';
import { parseBoats } from '@boat/helpers';
import { selectGamePlayerAdmin } from '@game/selectors';
import socket from '@socket/index';
import store from '@core/store';

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

  return adminPlayer.socketId === socket.id;
};

/**
 * Parse a game room data.
 *
 * @param {any} gameRoomData Game room data
 * @return {GameRoomData<any>}
 */
export const parseGameRoomData = (gameRoomData: any): GameRoomData<any> => ({
  data: gameRoomData?.data,
  instanceId: gameRoomData?.instanceId || '',
});

/**
 * Parse a game player.
 *
 * @param {any} gamePlayer Game player
 * @return {GamePlayer}
 */
export const parseGamePlayer = (gamePlayer: any): GamePlayer => ({
  id: gamePlayer?.id || '',
  isAdmin: gamePlayer?.isAdmin || false,
  pseudo: gamePlayer?.pseudo || '',
  socketId: gamePlayer?.socketId || '',
});

/**
 * Parse game players.
 *
 * @param {any} gamePlayers Game players
 * @return {GamePlayer[]}
 */
export const parseGamePlayers = (gamePlayers: any): GamePlayer[] =>
  gamePlayers?.map((gamePlayer: any) => parseGamePlayer(gamePlayer)) || [];

/**
 * Parse extended game settings.
 *
 * @param {any} gameExtendedSettings Game extended settings
 * @return {GameExtendedSettings}
 */
export const parseGameExtendedSettings = (gameExtendedSettings: any): GameExtendedSettings => ({
  boardDimensions: gameExtendedSettings.boardDimensions || GAME_EXTENDED_SETTINGS.boardDimensions,
  boatsAuthorized: parseBoats(gameExtendedSettings.boatsAuthorized),
  hasBoatsSafetyZone:
    gameExtendedSettings.hasBoatsSafetyZone || GAME_EXTENDED_SETTINGS.hasBoatsSafetyZone,
  timePerTurn: gameExtendedSettings.timePerTurn || GAME_EXTENDED_SETTINGS.timePerTurn,
  weapons: [],
});
