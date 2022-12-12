import type { GamePlayer, GameRoom, GameRoomData } from '@game/models';
import { selectGamePlayerAdmin, selectGamePlayers } from '@game/selectors';
import {
  setGamePlayers,
  setGameRoom,
  setGameRoomBoatsAuthorized,
  setInstanceId,
  setView,
} from '@game/reducer';
import type { Boat } from '@boat/models';
import { PATHS } from '@core/constants';
import store from '@core/store';
import UrlHelpers from '@helpers/UrlHelpers';

/**
 * Listening event when game is created.
 *
 * @param {GameRoomData<GamePlayer>} payload Payload
 * @return {void}
 */
export const listeningGameCreated = ({ data, instanceId }: GameRoomData<GamePlayer>): void => {
  store.dispatch(setInstanceId(instanceId));
  store.dispatch(setGamePlayers([data]));

  UrlHelpers.changeLocation(`${PATHS.GAME}/${instanceId}`);
};

/**
 * Listening event when player joined.
 *
 * @param {GameRoomData<GamePlayer>} payload Payload
 * @return {void}
 */
export const listeningPlayerJoined = ({ data }: GameRoomData<GamePlayer>): void => {
  const newPlayers = [selectGamePlayerAdmin(store.getState()) as GamePlayer, data];

  store.dispatch(setGamePlayers(newPlayers));
};

/**
 * Listening event for start placing boats.
 *
 * @param {GameRoomData<Boat[]>} payload Payload
 * @return {void}
 */
export const listeningStartPlacingBoats = ({ data }: GameRoomData<Boat[]>): void => {
  store.dispatch(setGameRoomBoatsAuthorized(data));
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
 * @param {GameRoom} payload Payload
 * @return {void}
 */
export const listeningGameInformation = ({ data, instanceId }: GameRoomData<GameRoom>): void => {
  store.dispatch(setGameRoom({ instanceId, players: data.players, settings: data.settings }));
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
 * @param {any} payload Payload
 * @return {void}
 */
export const listeningOnePlayerHasPlacedHisBoats = ({ data }: GameRoomData<GamePlayer>): void => {
  const players = [...selectGamePlayers(store.getState())];
  const playerToUpdateIndex = players.findIndex((player) => player.socketId === data.socketId);

  if (playerToUpdateIndex !== -1) {
    players[playerToUpdateIndex] = { ...data, boatsAreReady: true };
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
