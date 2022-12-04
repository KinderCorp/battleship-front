import type { ReactNode } from 'react';

import type { IntRange } from '@core/models';

export type CellState = 'hit' | 'miss';

export interface BoardCellState {
  state: CellState;
  x: number;
  y: number;
}

export interface BoardProps {
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  size: IntRange<8, 13>;
  stateCells: BoardCellState[];
  onClick: (x: BoardCellState['x'], y: BoardCellState['y']) => void;
}

export interface BoardCellProps
  extends Pick<BoardProps, 'isActive' | 'isDisabled' | 'onClick'>,
    Pick<BoardCellState, 'x' | 'y'> {
  className?: string;
  state?: CellState;
}

export interface BoardRowProps {
  children: ReactNode;
  className?: string;
}

/*

[
  {x: 0, y: 0, state: 'hit'}
]


*/
