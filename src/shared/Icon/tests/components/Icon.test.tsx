import { act, cleanup, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import Icon from '@shared/Icon/components/Icon';
import type { IconProps } from '@shared/Icon/models';

describe('shared/components/Icon', () => {
  afterEach(() => {
    cleanup();
  });

  it('should renders the expected component', async () => {
    const props: IconProps = { name: 'People' };

    await act(async () => {
      render(<Icon {...props} />);
    });

    const icon = screen.getByTestId('icon');
    const iconPeople = screen.getByTestId('icon-people');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon medium');
    expect(icon).toContainElement(iconPeople);

    expect(iconPeople.querySelector('path:first-child')).toHaveAttribute('fill', COLORS.WHITE);
    expect(iconPeople.querySelector('path:nth-child(2)')).toHaveAttribute('fill', COLORS.WHITE);
    expect(iconPeople.querySelector('path:last-child')).toHaveAttribute('fill', COLORS.PURPLE_DARK);
  });

  it('should renders the correct class names', async () => {
    const props: IconProps = { className: 'icon-other-class icon-other-class-2', name: 'People' };

    await act(async () => {
      render(<Icon {...props} />);
    });

    const icon = screen.getByTestId('icon');

    expect(icon).toHaveClass('icon medium icon-other-class icon-other-class-2');
  });

  it('should renders the correct size', async () => {
    const props: IconProps = { name: 'People', size: 'extra-large' };

    await act(async () => {
      render(<Icon {...props} />);
    });

    const icon = screen.getByTestId('icon');

    expect(icon).toHaveClass('icon extra-large');
  });

  it('should renders the correct colors', async () => {
    const props: IconProps = { borderColor: COLORS.YELLOW, color: COLORS.ORANGE, name: 'People' };

    await act(async () => {
      render(<Icon {...props} />);
    });

    const iconPeople = screen.getByTestId('icon-people');

    expect(iconPeople.querySelector('path:first-child')).toHaveAttribute('fill', COLORS.ORANGE);
    expect(iconPeople.querySelector('path:nth-child(2)')).toHaveAttribute('fill', COLORS.ORANGE);
    expect(iconPeople.querySelector('path:last-child')).toHaveAttribute('fill', COLORS.YELLOW);
  });
});
