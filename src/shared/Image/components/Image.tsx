import classNames from 'clsx';
import NextImage from 'next/image';
import { useMemo } from 'react';

import { getSizesFormated } from '@shared/Image/helpers';
import type { ImageProps } from '@shared/Image/models';

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
  sizes = {},
  src,
  width = 0,
}: ImageProps): JSX.Element | null => {
  // TODO: for the global refacto, use prefix like "image-fit-" for specific class inside components
  const imageClassName = useMemo(
    (): string => classNames('image', { [`image-fit-${objectFit}`]: !!objectFit }, className),
    [className, objectFit],
  );

  const size = useMemo(() => (!objectFit ? { height, width } : {}), [height, objectFit, width]);
  const sizesFormated = useMemo(() => getSizesFormated(sizes), [sizes]);

  if (!src || !alt) return null;

  return (
    <div className={imageClassName} data-testid="image">
      <NextImage
        {...size}
        draggable="false"
        alt={alt}
        fill={!!objectFit}
        priority={priority}
        sizes={sizesFormated}
        src={src}
      />
    </div>
  );
};

export default Image;
