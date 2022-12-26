import type { BasePlayer } from '@player/models';
import type { BoardProps } from '@shared/Board/models';
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
  weaponNames: Weapon['name'][];
  hasBoatsSafetyZone: boolean;
  timePerTurn: number;
}

// FIXME: weapons contain only name, not all properties
export interface GameRoomSettings extends Omit<GameSettings, 'weaponNames'> {
  authorisedFleet: Boat[];
  weapons: Weapon[];
}

export interface GameState {
  gameRoom: GameRoom;
  settings: GameSettings;
  view: GameView;
}

export interface GamePlayer extends BasePlayer {
  boatsAreReady?: boolean;
  isHost: boolean;
  socketId: string;
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
