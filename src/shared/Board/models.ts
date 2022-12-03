import type { ReactNode } from 'react';

import type { IntRange } from '@core/models';

export type BoardCellState = 'hit' | 'miss';

export interface BoardProps {
  className?: string;
  isDisabled?: boolean;
  size: IntRange<8, 13>;
}

export interface BoardCellProps {
  className?: string;
  state?: BoardCellState;
}

export interface BoardRowProps {
  children: ReactNode;
  className?: string;
}
