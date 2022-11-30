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
  if (sizes.phablet) sizesFormated.push(`(min-width: ${BREAKPOINTS.PHABLET}) ${sizes.phablet}`);
  if (sizes.tablet) sizesFormated.push(`(min-width: ${BREAKPOINTS.TABLET}) ${sizes.tablet}`);
  if (sizes.desktop) sizesFormated.push(`(min-width: ${BREAKPOINTS.DESKTOP}) ${sizes.desktop}`);
  if (sizes['large-desktop'])
    sizesFormated.push(`(min-width: ${BREAKPOINTS.LARGE_DESKTOP}) ${sizes['large-desktop']}`);

  return sizesFormated.join(', ');
};
