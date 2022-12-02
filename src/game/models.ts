import type { GamePageParams } from '@pages/game/[gameId]';

export type GamePageContentProps = Required<GamePageParams>;

export interface GameSettings {
  boardSize: number;
}
