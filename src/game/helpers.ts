import type { BoardCellAffected, Position } from '@shared/Board/models';
import { GAME_ROOM_SETTINGS, GAME_SETTINGS, GameView } from '@game/constants';
import type {
  GamePlayer,
  GamePlayerBoard,
  GameRoom,
  GameRoomSettings,
  GameSettings,
  GameState,
} from '@game/models';
import type { ApiGameRoomData } from '@api/models';
import ArrayHelpers from '@helpers/ArrayHelpers';
import { BoardCellState } from '@shared/Board/constants';
import { parseAuthorizedFleet } from '@boat/helpers';
import { parseWeapons } from '@weapon/helpers';
import { selectGameRoomPlayerHost } from '@game/selectors';
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
 * Check if the player is host.
 *
 * @return {boolean}
 */
export const isPlayerHost = (): boolean => {
  const hostPlayer = selectGameRoomPlayerHost(store.getState());
  return hostPlayer.socketId === socket.id;
};

/**
 * Parse game state.
 *
 * @param {any} gameState Game state
 * @return {GameState}
 */
export const parseGameState = (gameState: any): GameState => ({
  gameRoom: parseGameRoom(gameState.gameRoom),
  settings: parseGameSettings(gameState.settings),
  view: gameState.view || GameView.SETTINGS,
});

/**
 * Parse a game room data.
 *
 * @param {any} gameRoomData Game room data
 * @return {ApiGameRoomData<any>}
 */
export const parseGameRoomData = (gameRoomData: any): ApiGameRoomData<any> => ({
  data: gameRoomData?.data || null,
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
 * Parse a game player.
 *
 * @param {any} gamePlayer Game player
 * @return {GamePlayer}
 */
export const parseGamePlayer = (gamePlayer: any): GamePlayer => ({
  board: parseGamePlayerBoard(gamePlayer?.board),
  boatsAreReady: gamePlayer?.boatsAreReady || false,
  isHost: gamePlayer?.isHost || false,
  isTurn: gamePlayer?.isTurn || false,
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
 * Parse game settings.
 *
 * @param {any} gameSettings Game settings
 * @return {GameSettings}
 */
export const parseGameSettings = (gameSettings: any): GameSettings => ({
  boardDimensions: gameSettings?.boardDimensions || GAME_SETTINGS.boardDimensions,
  hasBoatsSafetyZone: gameSettings?.hasBoatsSafetyZone ?? GAME_SETTINGS.hasBoatsSafetyZone,
  timePerTurn: gameSettings?.timePerTurn || GAME_SETTINGS.timePerTurn,
  weaponNames: parseWeapons(gameSettings?.weapons).map((weapon) => weapon.name),
});

/**
 * Parse game room settings.
 *
 * @param {any} gameRoomSettings Game extended settings
 * @return {GameRoomSettings}
 */
export const parseGameRoomSettings = (gameRoomSettings: any): GameRoomSettings => ({
  authorisedFleet: parseAuthorizedFleet(gameRoomSettings?.authorisedFleet),
  boardDimensions: gameRoomSettings?.boardDimensions || GAME_ROOM_SETTINGS.boardDimensions,
  hasBoatsSafetyZone: gameRoomSettings?.hasBoatsSafetyZone ?? GAME_ROOM_SETTINGS.hasBoatsSafetyZone,
  timePerTurn: gameRoomSettings?.timePerTurn || GAME_ROOM_SETTINGS.timePerTurn,
  weapons: parseWeapons(gameRoomSettings?.weapons),
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
  settings: parseGameRoomSettings(gameRoom?.settings),
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
