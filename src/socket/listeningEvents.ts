import {
  parseGameExtendedSettings,
  parseGamePlayer,
  parseGamePlayers,
  parseGameRoomData,
} from '@game/helpers';
import { selectGamePlayerAdmin, selectGamePlayers } from '@game/selectors';
import {
  setGamePlayers,
  setGameRoom,
  setGameRoomAuthorizedFleet,
  setInstanceId,
  setView,
} from '@game/reducer';
import type { GamePlayer } from '@game/models';
import { parseBoats } from '@boat/helpers';
import { PATHS } from '@core/constants';
import store from '@core/store';
import UrlHelpers from '@helpers/UrlHelpers';

// TODO: get room settings here
/**
 * Listening event when game is created.
 *
 * @param {any} gameRoomData Game room data
 * @return {void}
 */
export const listeningGameCreated = (gameRoomData: any): void => {
  const { data, instanceId } = parseGameRoomData(gameRoomData);
  const player = parseGamePlayer(data);

  if (!instanceId) return;

  store.dispatch(setInstanceId(instanceId));
  store.dispatch(setGamePlayers([player]));

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

  const newPlayers = [selectGamePlayerAdmin(store.getState()) as GamePlayer, player];

  store.dispatch(setGamePlayers(newPlayers));
};

/**
 * Listening event for start placing boats.
 *
 * @param {any} gameRoomData Game room data
 * @return {void}
 */
export const listeningStartPlacingBoats = (gameRoomData: any): void => {
  const { data } = parseGameRoomData(gameRoomData);
  const boats = parseBoats(data);

  if (boats.length) {
    store.dispatch(setGameRoomAuthorizedFleet(boats));
    store.dispatch(setView('boats_placement'));
  }
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
  const players = parseGamePlayers(data.players);
  const settings = parseGameExtendedSettings(data.settings);

  store.dispatch(setGameRoom({ instanceId, players, settings }));
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

  const players = [...selectGamePlayers(store.getState())];
  const playerToUpdateIndex = players.findIndex((player) => player.socketId === data.socketId);

  if (playerToUpdateIndex !== -1) {
    players[playerToUpdateIndex] = { ...player, boatsAreReady: true };
    store.dispatch(setGamePlayers(players));
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
