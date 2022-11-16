import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconDice from '@shared/Icon/components/IconDice';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconDice', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconDice {...props} />);
    });

    const icon = screen.getByTestId('icon-dice');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-dice');
  });
});
