import type { ImageProps } from '@shared/Image/models';

export type BoatDirection = 'horizontal' | 'vertical';

export interface BoatProps extends Pick<ImageProps, 'height' | 'priority' | 'width'> {
  boatName?: string;
  boatSrc: ImageProps['src'];
  className?: string;
  direction?: BoatDirection;
}
