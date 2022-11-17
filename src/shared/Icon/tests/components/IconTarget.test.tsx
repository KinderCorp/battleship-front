import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import type { IconSvgProps } from '@shared/Icon/models';
import IconTarget from '@shared/Icon/components/IconTarget';

describe('shared/components/IconTarget', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconTarget {...props} />);
    });

    const icon = screen.getByTestId('icon-target');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-target');
  });
});
