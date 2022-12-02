import type { GamePageParams } from '@pages/game/[gameId]';

export type GamePageContentProps = Required<GamePageParams>;

export type GameView = 'boats_placement' | 'playing' | 'settings';

export interface GameSettings {
  boardSize: number;
}

export interface GameState {
  view: GameView;
  settings: GameSettings;
}
