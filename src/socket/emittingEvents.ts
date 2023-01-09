import type { ApiBoardBoat, ApiGameShoot } from '@api/models';
import type { BoardBoat, Position } from '@shared/Board/models';
import type { GameInstance, GameSettings } from '@game/models';
import { formatGameRoomData } from '@socket/helpers';
import { parseGameBoardBoatsForApi } from '@boat/helpers';
import type { Player } from '@player/models';
import socket from '@socket/index';
import { SOCKET_EVENTS_EMITTING } from '@socket/constants';
import type { Weapon } from '@src/weapon/models';

/**
 * Emitting event for create the game.
 *
 * @param {Player} data Data
 * @return {void}
 */
export const emitCreateGame = ({ pseudo }: Player): void => {
  // TODO: send settings
  socket.emit(SOCKET_EVENTS_EMITTING.CREATE_GAME, { pseudo });
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
    formatGameRoomData<Player>({ pseudo }, instanceId),
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
 * Emitting event when player leave room.
 *
 * @param {GameInstance['instanceId']} instanceId Instance id
 * @return {void}
 */
export const emitLeaveRoom = (instanceId: GameInstance['instanceId']): void => {
  // TASK: don't send instanceId, get instance id thanks to user socket id
  socket.emit(SOCKET_EVENTS_EMITTING.LEAVE_ROOM, { instanceId });
};

/**
 * Emitting event when the player is ready after placing their boats.
 *
 * @param {BoardBoat[]} data Data
 * @return {void}
 */
export const emitValidatePlayerBoatsPlacement = (data: BoardBoat[]): void => {
  const boardBoat = parseGameBoardBoatsForApi(data);

  socket.emit(
    SOCKET_EVENTS_EMITTING.VALIDATE_PLAYER_BOATS_PLACEMENT,
    formatGameRoomData<ApiBoardBoat[]>(boardBoat),
  );
};

/**
 * Emitting event for start the game.
 *
 * @param {GameInstance['instanceId']} instanceId Instance id
 * @return {void}
 */
export const emitStartGame = (instanceId: GameInstance['instanceId']): void => {
  // TASK: don't send instanceId, get instance id thanks to user socket id
  socket.emit(SOCKET_EVENTS_EMITTING.START_GAME, { instanceId });
};

/**
 * Emitting event to shoot a player.
 *
 * @param {Weapon['name']} weaponName Weapon name
 * @param {Position} position Position
 * @return {void}
 */
export const emitShoot = (weaponName: Weapon['name'], position: Position): void => {
  socket.emit(
    SOCKET_EVENTS_EMITTING.SHOOT,
    formatGameRoomData<ApiGameShoot>({
      originCell: [position.x, position.y],
      weaponName,
    }),
  );
};
