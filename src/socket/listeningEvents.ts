import { parseGamePlayer, parseGameRoom, parseGameRoomData } from '@game/helpers';
import { selectGameRoomPlayerHost, selectGameRoomPlayers } from '@game/selectors';
import { setGameRoom, setGameRoomPlayers, setView } from '@game/reducer';
import type { GamePlayer } from '@game/models';
import { PATHS } from '@core/constants';
import store from '@core/store';
import UrlHelpers from '@helpers/UrlHelpers';

// FIXME: assign the right type for parameter or just 'any' ?
/**
 * Listening event when game is created.
 *
 * @param {any} gameRoomData Game room data
 * @return {void}
 */
export const listeningGameCreated = (gameRoomData: any): void => {
  const { data, instanceId } = parseGameRoomData(gameRoomData);
  const gameRoom = parseGameRoom({ ...data, instanceId });

  if (!gameRoom.instanceId) return;

  store.dispatch(setGameRoom(gameRoom));

  UrlHelpers.changeLocation(`${PATHS.GAME}/${instanceId}`);
};

/**
 * Listening event when player joined.
 *
 * @param {any} gameRoomData Game room data
 * @return {void}
 */
export const listeningPlayerJoined = (gameRoomData: any): void => {
  const { data } = parseGameRoomData(gameRoomData);
  const player = parseGamePlayer(data);

  const newPlayers = [selectGameRoomPlayerHost(store.getState()) as GamePlayer, player];

  store.dispatch(setGameRoomPlayers(newPlayers));
};

/**
 * Listening event for start placing boats.
 *
 * @return {void}
 */
export const listeningStartPlacingBoats = (): void => {
  store.dispatch(setView('boats_placement'));
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
 * @param {any} gameRoomData Game room data
 * @return {void}
 */
export const listeningGameInformation = (gameRoomData: any): void => {
  const { data, instanceId } = parseGameRoomData(gameRoomData);
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
 * @param {any} gameRoomData Game room data
 * @return {void}
 */
export const listeningOnePlayerHasPlacedHisBoats = (gameRoomData: any): void => {
  const { data } = parseGameRoomData(gameRoomData);
  const player = parseGamePlayer(data);

  const players = [...selectGameRoomPlayers(store.getState())];
  const playerToUpdateIndex = players.findIndex((player) => player.socketId === data.socketId);

  if (playerToUpdateIndex !== -1) {
    players[playerToUpdateIndex] = { ...player, boatsAreReady: true };
    store.dispatch(setGameRoomPlayers(players));
  }
};

/**
 * Listening event when game is started.
 *
 * @return {void}
 */
export const listeningGameStarted = (): void => {
  store.dispatch(setView('playing'));
};

/**
 * Listening event when game is closed.
 *
 * @return {void}
 */
export const listeningClosedRoom = (): void => {
  UrlHelpers.changeLocation(PATHS.DEFAULT);
};
