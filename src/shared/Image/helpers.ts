import { BREAKPOINTS } from '@core/constants';
import type { ImageSizes } from '@shared/Image/models';

/**
 * Return a string that provides information about how wide the image will be at different breakpoints.
 *
 * @param {ImageSizes} sizes Breakpoints image sizes
 * @return {string}
 */
export const getSizesFormated = (sizes: ImageSizes): string => {
  const sizesFormated = [];

  if (sizes.default) sizesFormated.push(`${sizes.default}`);
  if (sizes.phablet) sizesFormated.push(`(min-width: ${BREAKPOINTS.PHABLET}px) ${sizes.phablet}`);
  if (sizes.tablet) sizesFormated.push(`(min-width: ${BREAKPOINTS.TABLET}px) ${sizes.tablet}`);
  if (sizes.desktop) sizesFormated.push(`(min-width: ${BREAKPOINTS.DESKTOP}px) ${sizes.desktop}`);
  if (sizes['large-desktop'])
    sizesFormated.push(`(min-width: ${BREAKPOINTS.LARGE_DESKTOP}px) ${sizes['large-desktop']}`);

  return sizesFormated.join(', ');
};
