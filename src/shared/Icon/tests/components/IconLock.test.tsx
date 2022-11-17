import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconLock from '@shared/Icon/components/IconLock';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconLock', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconLock {...props} />);
    });

    const icon = screen.getByTestId('icon-lock');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-lock');
  });
});
