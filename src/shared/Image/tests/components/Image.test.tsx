import { cleanup, render, screen } from '@testing-library/react';

import Image from '@shared/Image/components/Image';
import type { ImageProps } from '@shared/Image/models';

describe('shared/components/Image', () => {
  afterEach(() => {
    cleanup();
  });

  it('should not renders the component if src is empty', () => {
    const props: ImageProps = {
      alt: 'image-test',
      src: '',
    };

    const { container } = render(<Image {...props} alt={props.alt} />);

    expect(container.querySelector('.image')).not.toBeInTheDocument();
  });

  it('should not renders the component if alt is empty', () => {
    const props: ImageProps = {
      alt: '',
      src: '/images/my-test-image.png',
    };

    const { container } = render(<Image {...props} alt={props.alt} />);

    expect(container.querySelector('.image')).not.toBeInTheDocument();
  });

  it('should renders the component with fixed image', () => {
    const props: ImageProps = {
      alt: 'image-test-fixed',
      height: 80,
      sizes: {
        default: '80px',
        desktop: '100px',
      },
      src: '/images/my-test-image.png',
      width: 80,
    };

    render(<Image {...props} alt={props.alt} />);

    const image = screen.getByTestId('image');
    const imageElement = image.querySelector('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('image');
    expect(image).toContainElement(imageElement);

    expect(imageElement).toHaveAccessibleName('image-test-fixed');
    expect(imageElement).toHaveAttribute('draggable', 'false');
    expect(imageElement).toHaveAttribute('height', '80');
    expect(imageElement).toHaveAttribute('width', '80');
    expect(imageElement).toHaveAttribute('sizes', '80px, (min-width: 1024px) 100px');
  });

  it('should renders the component with responsive image', () => {
    const props: ImageProps = {
      alt: 'image-test-responsive',
      objectFit: 'contain',
      src: '/images/my-test-image.png',
    };

    render(<Image {...props} alt={props.alt} />);

    const image = screen.getByTestId('image');
    const imageElement = image.querySelector('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('image image-fit-contain');
    expect(image).toContainElement(imageElement);

    expect(imageElement).toHaveAccessibleName('image-test-responsive');
    expect(imageElement).toHaveAttribute('draggable', 'false');
    expect(imageElement).not.toHaveAttribute('height');
    expect(imageElement).not.toHaveAttribute('width');
  });
});
