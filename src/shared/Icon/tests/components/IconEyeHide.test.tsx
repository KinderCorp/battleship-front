import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconEyeHide from '@shared/Icon/components/IconEyeHide';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconEyeHide', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconEyeHide {...props} />);
    });

    const icon = screen.getByTestId('icon-eye-hide');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-eye-hide');
  });
});
