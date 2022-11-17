import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconInfinity from '@shared/Icon/components/IconInfinity';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconInfinity', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconInfinity {...props} />);
    });

    const icon = screen.getByTestId('icon-infinity');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-infinity');
  });
});
