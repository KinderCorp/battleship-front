import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconLoader from '@shared/Icon/components/IconLoader';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconLoader', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconLoader {...props} />);
    });

    const icon = screen.getByTestId('icon-loader');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-loader');
  });
});
