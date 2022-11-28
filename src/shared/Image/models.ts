import type { ImageProps as NextImageProps } from 'next/image';

export type ImageObjectFit = 'contain' | 'cover' | 'fill';

export interface ImageProps extends NextImageProps {
  className?: string;
  objectFit?: ImageObjectFit | null;
}

export type ImageBreakpoints = 'desktop' | 'large-desktop' | 'phablet' | 'tablet';

export type BreakpointsSizes = Record<Partial<ImageBreakpoints>, string>;
