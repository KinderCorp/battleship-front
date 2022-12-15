import type { BasePlayer } from '@player/models';
import type { BoardProps } from '@shared/Board/models';
import type { Boat } from '@src/boat/models';
import type { GamePageParams } from '@pages/game/[gameId]';
import type { Weapon } from '@weapon/models';

export type GamePageContentProps = Required<GamePageParams>;

export type GameView = 'boats_placement' | 'playing' | 'settings';

export interface GameSettings {
  boardDimensions: BoardProps['dimensions'];
  weapons: Weapon['name'][];
  hasBoatsSafetyZone: boolean;
  timePerTurn: number;
}

// FIXME: weapons contain only name, not all properties
export interface GameRoomSettings extends Omit<GameSettings, 'weapons'> {
  authorisedFleet: Boat[];
  weapons: Weapon[];
}

export interface GameState {
  settings: GameSettings;
  gameRoom: GameRoom;
  view: GameView;
}

export interface GamePlayer extends BasePlayer {
  socketId: string;
  isAdmin: boolean;
  boatsAreReady?: boolean;
}

export interface GameRoom extends GameInstance {
  players: GamePlayer[];
  settings: GameRoomSettings;
}

export interface GameInstance {
  instanceId: string;
}

// FIXME: rename this
export interface GameRoomData<T> extends GameInstance {
  data: T;
}
