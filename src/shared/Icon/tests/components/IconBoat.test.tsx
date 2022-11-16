import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconBoat from '@shared/Icon/components/IconBoat';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconBoat', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconBoat {...props} />);
    });

    const icon = screen.getByTestId('icon-boat');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg boat');
  });
});
