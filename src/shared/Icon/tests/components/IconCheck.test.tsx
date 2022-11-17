import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconCheck from '@shared/Icon/components/IconCheck';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconCheck', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconCheck {...props} />);
    });

    const icon = screen.getByTestId('icon-check');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-check');
  });
});
