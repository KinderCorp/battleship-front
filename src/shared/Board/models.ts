import type { ReactNode } from 'react';

import type { BoatProps } from '@boat/models';
import type { IntRange } from '@core/models';

export interface Position {
  x: number;
  y: number;
}

export type BoardCellState = 'hit' | 'miss';

export interface CellAffected extends Position {
  state: BoardCellState;
}

export interface BoardBoat extends Pick<BoatProps, 'boatSrc' | 'direction'>, Position {}

export interface BoardProps {
  boats: BoardBoat[];
  cellsAffected: CellAffected[];
  className?: string;
  dimensions: IntRange<8, 13>;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick: (x: Position['x'], y: Position['y']) => void;
}

export interface BoardCellProps
  extends Pick<BoardProps, 'isActive' | 'isDisabled' | 'onClick'>,
    Position {
  className?: string;
  state?: BoardCellState;
}

export interface BoardRowProps {
  children: ReactNode;
  className?: string;
}
