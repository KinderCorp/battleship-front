import type { ReactNode } from 'react';

export type BoardCellState = 'hit' | 'miss';

export interface BoardProps {
  className?: string;
  isDisabled?: boolean;
  size: number;
}

export interface BoardCellProps {
  className?: string;
  state?: BoardCellState;
}

export interface BoardRowProps {
  children: ReactNode;
  className?: string;
}
