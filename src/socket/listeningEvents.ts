import type { ApiGamePlayer, ApiGameRoom, ApiGameRoomData, ApiGameTurn } from '@api/models';
import { parseGamePlayer, parseGameRoom, parseGameRoomData } from '@game/helpers';
import { setGameRoom, setGameRoomPlayers, setView } from '@game/reducer';
import { GameView } from '@game/constants';
import ObjectHelpers from '@helpers/ObjectHelpers';
import { PATHS } from '@core/constants';
import { selectGameRoomPlayers } from '@game/selectors';
import store from '@core/store';
import UrlHelpers from '@helpers/UrlHelpers';

/**
 * Listening event when game is created.
 *
 * @param {ApiGameRoomData<ApiGameRoom>} apiGameRoomData Api game room data
 * @return {void}
 */
export const listeningGameCreated = (apiGameRoomData: ApiGameRoomData<ApiGameRoom>): void => {
  const { data, instanceId } = parseGameRoomData(apiGameRoomData);
  const gameRoom = parseGameRoom({ ...data, instanceId });

  if (!gameRoom.instanceId) return;

  store.dispatch(setGameRoom(gameRoom));
  UrlHelpers.changeLocation(`${PATHS.GAME}/${gameRoom.instanceId}`);
};

/**
 * Listening event when player joined.
 *
 * @param {ApiGameRoomData<ApiGamePlayer>} apiGameRoomData Api game room data
 * @return {void}
 */
export const listeningPlayerJoined = (apiGameRoomData: ApiGameRoomData<ApiGamePlayer>): void => {
  const { data } = parseGameRoomData(apiGameRoomData);
  const player = parseGamePlayer(data);

  const players = ObjectHelpers.deepClone(selectGameRoomPlayers(store.getState()));
  players.push(player);

  store.dispatch(setGameRoomPlayers(players));
};

/**
 * Listening event for start placing boats.
 *
 * @return {void}
 */
export const listeningStartPlacingBoats = (): void => {
  store.dispatch(setView(GameView.BOATS_PLACEMENT));
};

/**
 * Listening event when game is not found.
 *
 * @return {void}
 */
export const listeningErrorGameNotFound = (): void => {
  // FIXME: Redirect to the home page except that it is not instantaneous so we see the game page for half a second
  UrlHelpers.changeLocation(PATHS.DEFAULT);
};

/**
 * Listening event for game information.
 *
 * @param {ApiGameRoomData<ApiGameRoom>} apiGameRoomData Api game room data
 * @return {void}
 */
export const listeningGameInformation = (apiGameRoomData: ApiGameRoomData<ApiGameRoom>): void => {
  const { data, instanceId } = parseGameRoomData(apiGameRoomData);
  const gameRoom = parseGameRoom({ ...data, instanceId });

  store.dispatch(setGameRoom(gameRoom));
};

/**
 * Listening event when player is diconnected.
 *
 * @return {void}
 */
export const listeningPlayerDisconnected = (): void => {
  UrlHelpers.changeLocation(PATHS.DEFAULT);
};

/**
 * Listening event when game is full.
 *
 * @return {void}
 */
export const listeningErrorGameIsFull = (): void => {
  UrlHelpers.changeLocation(PATHS.DEFAULT);
};

/**
 * Listening event when one player has placed his boats.
 *
 * @param {ApiGameRoomData<ApiGamePlayer>} apiGameRoomData Api game room data
 * @return {void}
 */
export const listeningOnePlayerHasPlacedHisBoats = (
  apiGameRoomData: ApiGameRoomData<ApiGamePlayer>,
): void => {
  const { data } = parseGameRoomData(apiGameRoomData);
  const playerIsReady = parseGamePlayer(data);

  const players = ObjectHelpers.deepClone(selectGameRoomPlayers(store.getState()));
  const player = players.find((player) => player.socketId === playerIsReady.socketId);

  if (!player) return;

  player.boatsAreReady = true;
  store.dispatch(setGameRoomPlayers(players));
};

/**
 * Listening event when game is started.
 *
 * @param {ApiGameRoomData<ApiGameTurn>} apiGameRoomData Api game room data
 * @return {void}
 */
export const listeningGameStarted = (apiGameRoomData: ApiGameRoomData<ApiGameTurn>): void => {
  const { data } = parseGameRoomData(apiGameRoomData);
  const playerTurn = parseGamePlayer(data.isTurnOf);

  const players = ObjectHelpers.deepClone(selectGameRoomPlayers(store.getState()));
  const player = players.find((player) => player.socketId === playerTurn.socketId);

  if (!player) return;

  player.isTurn = true;
  store.dispatch(setView(GameView.PLAYING));
  store.dispatch(setGameRoomPlayers(players));
};

/**
 * Listening event when game is closed.
 *
 * @return {void}
 */
export const listeningClosedRoom = (): void => {
  UrlHelpers.changeLocation(PATHS.DEFAULT);
};

/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * Listening event when player is shot.
 *
 * @return {void}
 */
export const listeningShot = (): void => {};
