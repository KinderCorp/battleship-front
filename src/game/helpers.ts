import type { GamePlayer, GameRoom, GameRoomData, GameRoomSettings } from '@game/models';
import ArrayHelpers from '@helpers/ArrayHelpers';
import { GAME_EXTENDED_SETTINGS } from '@game/constants';
import { parseAuthorizedFleet } from '@boat/helpers';
import { parseWeapons } from '@weapon/helpers';
import type { Position } from '@shared/Board/models';
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
  data: gameRoomData?.data || null,
  instanceId: gameRoomData?.instanceId || '',
});

/**
 * Parse a game player.
 *
 * @param {any} gamePlayer Game player
 * @return {GamePlayer}
 */
export const parseGamePlayer = (gamePlayer: any): GamePlayer => ({
  boatsAreReady: gamePlayer?.boatsAreReady || false,
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
  ArrayHelpers.isArray(gamePlayers)
    ? gamePlayers.map((gamePlayer: any) => parseGamePlayer(gamePlayer))
    : [];

/**
 * Parse extended game settings.
 *
 * @param {any} gameExtendedSettings Game extended settings
 * @return {GameRoomSettings}
 */
export const parseGameExtendedSettings = (gameExtendedSettings: any): GameRoomSettings => ({
  authorisedFleet: parseAuthorizedFleet(gameExtendedSettings?.authorisedFleet),
  boardDimensions: gameExtendedSettings?.boardDimensions || GAME_EXTENDED_SETTINGS.boardDimensions,
  hasBoatsSafetyZone:
    gameExtendedSettings?.hasBoatsSafetyZone || GAME_EXTENDED_SETTINGS.hasBoatsSafetyZone,
  timePerTurn: gameExtendedSettings?.timePerTurn || GAME_EXTENDED_SETTINGS.timePerTurn,
  weapons: parseWeapons(gameExtendedSettings?.weapons),
});

/**
 * Parse game room.
 *
 * @param {any} gameRoom Game room
 * @return {GameRoom}
 */
export const parseGameRoom = (gameRoom: any): GameRoom => ({
  instanceId: gameRoom?.instanceId || '',
  players: parseGamePlayers(gameRoom?.players),
  settings: parseGameExtendedSettings(gameRoom?.settings),
});

/**
 * Parse a position.
 *
 * @param {any} position Position
 * @return {Position}
 */
export const parsePosition = (position: any): Position => ({
  x: position?.[0] || 0,
  y: position?.[1] || 0,
});

/**
 * Parse positions.
 *
 * @param {any} positions Positions
 * @return {Position[]}
 */
export const parsePositions = (positions: any): Position[] =>
  ArrayHelpers.isArray(positions) ? positions.map((position: any) => parsePosition(position)) : [];
