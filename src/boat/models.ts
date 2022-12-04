import type { ImageProps } from '@shared/Image/models';

export type BoatDirection = 'horizontal' | 'vertical';

export interface BoatProps {
  boatSrc: ImageProps['src'];
  direction?: BoatDirection;
}
