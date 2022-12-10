import type { ImageProps } from '@shared/Image/models';

export interface Boat {
  lengthCell: number;
  name: string;
  src: ImageProps['src'];
  widthCell: number;
}
