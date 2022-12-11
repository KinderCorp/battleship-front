import type { CSSProperties } from 'react';

import type { Boat } from '@src/boat/models';
import type { ImageProps } from '@shared/Image/models';

export type BoatDirection = 'horizontal' | 'vertical';

export interface BoatProps extends Pick<ImageProps, 'priority'>, Pick<Boat, 'name' | 'src'> {
  className?: string;
  direction?: BoatDirection;
  height: number; // For the length
  index: number;
  style?: CSSProperties;
  isPlacementActive?: boolean;
  width: number;
  onRotation?: (index: number) => void;
}
