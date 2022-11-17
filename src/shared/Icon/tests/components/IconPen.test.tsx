import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconPen from '@shared/Icon/components/IconPen';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconPen', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconPen {...props} />);
    });

    const icon = screen.getByTestId('icon-pen');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-pen');
  });
});
