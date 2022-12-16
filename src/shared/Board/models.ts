import type { ReactNode } from 'react';

import type { Boat } from '@src/boat/models';
import type { BoatProps } from '@boat/models';
import type { GameSettings } from '@game/models';
import type { IntRange } from '@core/models';

export interface Position {
  x: number;
  y: number;
}

export type BoardCellState = 'hit' | 'miss';

export interface BoardCellAffected extends Position {
  state: BoardCellState;
}

export interface BoardBoat extends Boat, Position, Pick<BoatProps, 'direction'> {}

export interface BoardProps extends Pick<GameSettings, 'hasBoatsSafetyZone'> {
  boats?: BoardBoat[];
  cellsAffected?: BoardCellAffected[];
  className?: string;
  dimensions: IntRange<8, 12>;
  isDisabled?: boolean;
  isPlacementActive?: boolean;
  isShootActive?: boolean;
  onClick?: (x: Position['x'], y: Position['y']) => void;
  setBoats?: (boats: BoardBoat[]) => void;
}

// FIXME: if onClick is in this model => "Property 'onClick' does not exist on type 'BoardProps'"
export interface BoardCellProps
  extends Pick<BoardProps, 'isShootActive' | 'isDisabled' | 'onClick'>,
    Position {
  className?: string;
  state?: BoardCellState;
}

export interface BoardRowProps {
  children: ReactNode;
  className?: string;
}
