import classNames from 'clsx';
import NextImage from 'next/image';
import { useMemo } from 'react';

import type { ImageProps } from '@shared/Image/constants';

/**
 * Image component.
 *
 * @param {ImageProps} props Props
 * @return {JSX.Element|null}
 */
export const Image = ({
  alt,
  className = '',
  height = 0,
  objectFit = null,
  priority = false,
  sizes = '',
  src,
  width = 0,
}: ImageProps): JSX.Element | null => {
  const imageClassName = useMemo(
    (): string => classNames('image', { [`image-fit-${objectFit}`]: !!objectFit }, className),
    [className, objectFit],
  );

  const imageStyles = useMemo(
    () => (!objectFit ? { height, width } : {}),
    [height, objectFit, width],
  );

  if (!src) return null;

  return (
    <div className={imageClassName} data-testid="image" style={imageStyles}>
      <NextImage
        alt={alt}
        fill={!!objectFit}
        height={height}
        priority={priority}
        sizes={sizes}
        src={src}
        width={width}
      />
    </div>
  );
};

export default Image;
