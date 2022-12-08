import type { GameInstance, GamePlayer, GameSettings } from '@game/models';
import { formatGameRoomData } from '@socket/helpers';
import type { Player } from '@player/models';
import socket from '@socket/index';
import { SOCKET_EVENTS_EMITTING } from '@socket/constants';

/**
 * Emitting event for create the game.
 *
 * @param {Player} data Data
 * @return {void}
 */
export const emitCreateGame = ({ pseudo }: Player): void => {
  // TODO: send also settings
  socket.emit(SOCKET_EVENTS_EMITTING.CREATE_GAME, { pseudo, socketId: socket.id });
};

/**
 * Emitting event for game settings.
 *
 * @param {GameSettings} data Data
 * @return {void}
 */
export const emitGameSettings = (data: GameSettings): void => {
  socket.emit(SOCKET_EVENTS_EMITTING.GAME_SETTINGS, formatGameRoomData<GameSettings>(data));
};

/**
 * Emitting event for player joining a game.
 *
 * @param {string} instanceId Instance id
 * @param {Player} data Data
 * @return {void}
 */
export const emitPlayerJoiningGame = (instanceId: string, { pseudo }: Player): void => {
  socket.emit(
    SOCKET_EVENTS_EMITTING.PLAYER_JOINING_GAME,
    formatGameRoomData<GamePlayer>(
      {
        pseudo,
        socketId: socket.id,
      },
      instanceId,
    ),
  );
};

/**
 * Emitting event when players are ready to place their boats.
 *
 * @return {void}
 */
export const emitPlayersReadyToPlaceBoats = (): void => {
  socket.emit(SOCKET_EVENTS_EMITTING.PLAYERS_READY_TO_PLACE_BOATS);
};

/**
 * Emitting event for close room.
 *
 * @param {GameInstance['instanceId']} instanceId Instance id
 * @return {void}
 */
export const emitCloseRoom = (instanceId: GameInstance['instanceId']): void => {
  socket.emit(SOCKET_EVENTS_EMITTING.CLOSE_ROOM, { instanceId });
};
