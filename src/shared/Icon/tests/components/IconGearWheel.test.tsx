import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconGearWheel from '@shared/Icon/components/IconGearWheel';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconGearWheel', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconGearWheel {...props} />);
    });

    const icon = screen.getByTestId('icon-gear-wheel');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-gear-wheel');
  });
});
