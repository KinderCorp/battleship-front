import { getSizesFormated } from '@shared/Image/helpers';
import type { ImageSizes } from '@shared/Image/models';

describe('shared/helpers/Image', () => {
  it('should have defined methods', () => {
    expect(getSizesFormated).toBeDefined();
  });

  it('should return empty sizes', () => {
    const sizes: ImageSizes = {};

    expect(getSizesFormated(sizes)).toBe('');
  });

  it('should return default size', () => {
    const sizes: ImageSizes = {
      default: '100vw',
    };

    expect(getSizesFormated(sizes)).toBe('100vw');
  });

  it('should return tablet size', () => {
    const sizes: ImageSizes = {
      tablet: '80vw',
    };

    expect(getSizesFormated(sizes)).toBe('(min-width: 768px) 80vw');
  });

  it('should return multiple sizes', () => {
    const sizes: ImageSizes = {
      default: '100vw',
      desktop: '80vw',
      'large-desktop': '70vw',
      phablet: '100px',
      tablet: '150px',
    };

    expect(getSizesFormated(sizes)).toBe(
      '100vw, (min-width: 480px) 100px, (min-width: 768px) 150px, (min-width: 1024px) 80vw, (min-width: 1300px) 70vw',
    );
  });
});
