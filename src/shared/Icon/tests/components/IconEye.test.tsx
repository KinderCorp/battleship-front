import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconEye from '@shared/Icon/components/IconEye';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconEye', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconEye {...props} />);
    });

    const icon = screen.getByTestId('icon-eye');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-eye');
  });
});
