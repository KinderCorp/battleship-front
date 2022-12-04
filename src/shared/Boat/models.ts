import type { ImageProps } from '@shared/Image/models';

export type BoatDirection = 'horizontal' | 'vertical';

export interface BoatProps extends Pick<ImageProps, 'priority'> {
  boatName?: string;
  boatSrc: ImageProps['src'];
  className?: string;
  direction?: BoatDirection;
  height: string;
  width: string;
}
