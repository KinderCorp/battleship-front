import type { CSSProperties } from 'react';

import type { BoatDirection } from '@boat/constants';
import type { ImageProps } from '@shared/Image/models';

export interface BoatProps extends Pick<ImageProps, 'priority'>, Pick<Boat, 'name' | 'src'> {
  className?: string;
  direction: BoatDirection;
  height: number; // For the length
  index: number;
  style?: CSSProperties;
  isPlacementActive?: boolean;
  width: number;
  onRotation?: (index: number) => boolean;
}

export interface Boat {
  defaultDirection: BoatDirection;
  lengthCell: number;
  name: string;
  src: ImageProps['src'];
  widthCell: number;
}

export interface AuthorizedBoat {
  authorisedNumber: number;
  boat: Boat;
}
