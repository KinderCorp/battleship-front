import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import type { IconSvgProps } from '@shared/Icon/models';
import IconTrophy from '@shared/Icon/components/IconTrophy';

describe('shared/components/IconTrophy', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconTrophy {...props} />);
    });

    const icon = screen.getByTestId('icon-trophy');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-trophy');
  });
});
