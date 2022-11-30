import type { ImageProps as NextImageProps } from 'next/image';

import type { Breakpoints } from '@core/models';

export type ImageObjectFit = 'contain' | 'cover' | 'fill';

export interface ImageProps extends Omit<NextImageProps, 'sizes'> {
  className?: string;
  objectFit?: ImageObjectFit | null;
  sizes?: ImageSizes;
}

export type ImageSizes = Partial<Record<Breakpoints, string>>;
