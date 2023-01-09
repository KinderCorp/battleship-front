import type { ReactNode } from 'react';

import type { BoardCellState } from '@shared/Board/constants';
import type { Boat } from '@src/boat/models';
import type { BoatProps } from '@boat/models';
import type { GameSettings } from '@game/models';
import type { IntRange } from '@core/models';

export interface Position {
  x: number;
  y: number;
}

export interface BoardCellAffected extends Position {
  state: BoardCellState;
}

// FIXME: models to put here?
export interface BoardBoat extends Boat, Position, Pick<BoatProps, 'direction'> {}

export interface BoardProps extends Pick<Partial<GameSettings>, 'hasBoatsSafetyZone'> {
  boats?: BoardBoat[];
  cellsAffected?: BoardCellAffected[];
  className?: string;
  dimensions: IntRange<8, 12>;
  isDisabled?: boolean;
  isPlacementActive?: boolean;
  isShootActive?: boolean;
  onClick?: (position: Position) => void;
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
