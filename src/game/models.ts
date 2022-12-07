import type { GamePageParams } from '@pages/game/[gameId]';
import type { GuestPlayer } from '@player/models';

export type GamePageContentProps = Required<GamePageParams>;

export type GameView = 'boats_placement' | 'playing' | 'settings';

export interface GameSettings {
  boardSize: number;
}

export interface GameState {
  view: GameView;
  settings: GameSettings;
  gameRoom: Partial<GameRoom>;
}

export interface GameSettingsViewProps {
  setView: (view: GameView) => void;
}

export interface GamePlayer extends Pick<GuestPlayer, 'pseudo'> {
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
