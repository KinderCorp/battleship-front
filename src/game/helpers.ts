import type { ApiExtendedGamePlayer, ApiGameRoom, ApiGameRoomData, ApiPosition } from '@api/models';
import type { BoardCellAffected, Position } from '@shared/Board/models';
import type {
  GameInstance,
  GamePlayer,
  GamePlayerBoard,
  GamePlayerWeapon,
  GameRoom,
  GameRoomData,
  GameRoomSettings,
  GameSettings,
} from '@game/models';
import { parseWeapon, parseWeapons } from '@weapon/helpers';
import ArrayHelpers from '@helpers/ArrayHelpers';
import { BoardCellState } from '@shared/Board/constants';
import { GAME_SETTINGS } from '@game/constants';
import { parseAuthorizedFleet } from '@boat/helpers';
import { selectGameRoomPlayerHost } from '@game/selectors';
import socket from '@socket/index';
import store from '@core/store';

/**
 * Check if a game is full.
 *
 * @param {Partial<GameRoom>} gameRoom Game room
 * @return {boolean}
 */
export const checkGameIsFull = (gameRoom: Partial<GameRoom>): boolean => {
  return (ArrayHelpers.isArray(gameRoom?.players) && gameRoom.players.length >= 2) || false;
};

/**
 * Check if the player is host.
 *
 * @return {boolean}
 */
export const isPlayerHost = (): boolean => {
  const hostPlayer = selectGameRoomPlayerHost(store.getState());
  return hostPlayer.socketId === socket.id;
};

/**
 * Parse a game room data.
 *
 * @template T
 * @param {T} gameRoomData Game room data
 * @return {ApiGameRoomData<T>}
 */
export const parseGameRoomData = <T>(gameRoomData: ApiGameRoomData<T>): GameRoomData<T> => ({
  data: gameRoomData?.data as T,
  instanceId: gameRoomData?.instanceId || '',
});

/**
 * Parse a game board cell affected.
 *
 * @param {any} gameBoardCellAffected Game board cell affected
 * @return {GamePlayerBoard}
 */
export const parseGameBoardCellAffected = (gameBoardCellAffected: any): BoardCellAffected => ({
  state: gameBoardCellAffected?.state || BoardCellState.MISS,
  x: gameBoardCellAffected?.x ?? 0,
  y: gameBoardCellAffected?.y ?? 0,
});

/**
 * Parse a game board cells affected.
 *
 * @param {any} gameBoardCellsAffected Game board cells affected
 * @return {BoardCellAffected}
 */
export const parseGameBoardCellsAffected = (gameBoardCellsAffected: any): BoardCellAffected[] =>
  ArrayHelpers.isArray(gameBoardCellsAffected)
    ? gameBoardCellsAffected.map((gameBoardCellAffected: any) =>
        parseGameBoardCellAffected(gameBoardCellAffected),
      )
    : [];

/**
 * Parse a game player board.
 *
 * @param {any} gamePlayerBoard Game player board
 * @return {GamePlayerBoard}
 */
export const parseGamePlayerBoard = (gamePlayerBoard: any): GamePlayerBoard => ({
  boardBoats: [],
  cellsAffected: parseGameBoardCellsAffected(gamePlayerBoard?.cellsAffected),
});

/**
 * Parse a game player weapon.
 *
 * @param {any} gamePlayerWeapon Game player weapon.
 * @return {GamePlayerWeapon}
 */
export const parseGamePlayerWeapon = (gamePlayerWeapon: any): GamePlayerWeapon => ({
  ammunition: gamePlayerWeapon?.ammunition || -1,
  weapon: parseWeapon(gamePlayerWeapon?.weapon),
});

/**
 * Parse game player weapons.
 *
 * @param {any} gamePlayerWeapons Game player weapons.
 * @return {GamePlayerWeapon[]}
 */
export const parseGamePlayerWeapons = (gamePlayerWeapons: any): GamePlayerWeapon[] =>
  ArrayHelpers.isArray(gamePlayerWeapons)
    ? gamePlayerWeapons.map((gamePlayerWeapon) => parseGamePlayerWeapon(gamePlayerWeapon))
    : [];

/**
 * Parse a game player.
 *
 * @param {ApiExtendedGamePlayer} apiGamePlayer Api extended game player
 * @return {GamePlayer}
 */
export const parseGamePlayer = (apiGamePlayer: ApiExtendedGamePlayer): GamePlayer => ({
  board: parseGamePlayerBoard(apiGamePlayer?.board),
  boatsAreReady: apiGamePlayer?.boatsAreReady || false,
  isHost: apiGamePlayer?.isHost || false,
  isTurn: apiGamePlayer?.isTurn || false,
  pseudo: apiGamePlayer?.pseudo || '',
  socketId: apiGamePlayer?.socketId || '',
  weapons: parseGamePlayerWeapons(apiGamePlayer?.weapons),
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
 * Parse game settings.
 *
 * @param {any} gameSettings Game settings
 * @return {GameSettings}
 */
export const parseGameSettings = (gameSettings: any): GameSettings => ({
  boardDimensions: gameSettings?.boardDimensions || GAME_SETTINGS.boardDimensions,
  hasBoatsSafetyZone: gameSettings?.hasBoatsSafetyZone ?? GAME_SETTINGS.hasBoatsSafetyZone,
  timePerTurn: gameSettings?.timePerTurn || GAME_SETTINGS.timePerTurn,
  weapons: parseWeapons(gameSettings?.weapons),
});

/**
 * Parse game room settings.
 *
 * @param {any} gameRoomSettings Game extended settings
 * @return {GameRoomSettings}
 */
export const parseGameRoomSettings = (gameRoomSettings: any): GameRoomSettings => ({
  ...parseGameSettings(gameRoomSettings),
  authorisedFleet: parseAuthorizedFleet(gameRoomSettings?.authorisedFleet),
});

/**
 * Parse game room.
 *
 * @param {ApiGameRoom} gameRoom Game room
 * @return {GameRoom}
 */
export const parseGameRoom = (gameRoom: ApiGameRoom & GameInstance): GameRoom => ({
  instanceId: gameRoom?.instanceId || '',
  players: parseGamePlayers(gameRoom?.players),
  settings: parseGameRoomSettings(gameRoom?.settings),
});

/**
 * Parse a position.
 *
 * @param {ApiPosition} position Position
 * @return {Position}
 */
export const parsePosition = (position: ApiPosition): Position => ({
  x: position?.[0] ?? 0,
  y: position?.[1] ?? 0,
});

/**
 * Parse positions.
 *
 * @param {ApiPosition[]} positions Positions
 * @return {Position[]}
 */
export const parsePositions = (positions: ApiPosition[]): Position[] =>
  ArrayHelpers.isArray(positions)
    ? positions.map((position: ApiPosition) => parsePosition(position))
    : [];
