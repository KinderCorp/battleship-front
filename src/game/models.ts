import type { BoardBoat, BoardCellAffected, BoardProps } from '@shared/Board/models';
import type { BasePlayer } from '@player/models';
import type { Boat } from '@src/boat/models';
import type { GamePageParams } from '@pages/game/[gameId]';
import type { GameView } from '@game/constants';
import type { Weapon } from '@weapon/models';

export interface WaitingForTheHostProps {
  className?: string;
}

export type GamePageContentProps = Required<GamePageParams>;

export interface GameSettings {
  boardDimensions: BoardProps['dimensions'];
  weapons: Weapon[];
  hasBoatsSafetyZone: boolean;
  timePerTurn: number;
}

export interface GameRoomSettings extends GameSettings {
  authorisedFleet: Boat[];
}

export interface GameState {
  gameRoom: GameRoom;
  settings: GameSettings;
  view: GameView;
}

export interface GamePlayerBoard {
  cellsAffected: BoardCellAffected[];
  boardBoats: BoardBoat[];
}

export interface GamePlayerWeapon {
  ammunition: number;
  weapon: Weapon;
}

export interface GamePlayer extends BasePlayer {
  board: GamePlayerBoard;
  boatsAreReady: boolean;
  isHost: boolean;
  isTurn: boolean;
  socketId: string;
  weapons: GamePlayerWeapon[];
}

export interface GameRoomData<T> extends GameInstance {
  data: T;
}

export interface GameRoom extends GameInstance {
  players: GamePlayer[];
  settings: GameRoomSettings;
}

export interface GameInstance {
  instanceId: string;
}
