import type { BasePlayer } from '@player/models';
import type { GamePageParams } from '@pages/game/[gameId]';
import type { Weapon } from '@src/weapon/models';

export type GamePageContentProps = Required<GamePageParams>;

export type GameView = 'boats_placement' | 'playing' | 'settings';

export interface GameSettings {
  boardDimensions: number;
  weapons: Weapon['name'];
  hasBoatsSafetyZone: boolean;
  timePerTurn: number;
}

export interface GameState {
  settings: GameSettings;
  gameRoom: Partial<GameRoom>;
  view: GameView;
}

export interface GamePlayer extends Pick<BasePlayer, 'pseudo'> {
  socketId: string;
  isAdmin?: boolean;
}

export interface GameRoom extends GameInstance {
  players: GamePlayer[];
}

export interface GameInstance {
  instanceId: string;
}

export interface GameRoomData<T> extends GameInstance {
  data: T;
}
