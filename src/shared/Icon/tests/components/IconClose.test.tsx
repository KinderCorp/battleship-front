import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconClose from '@shared/Icon/components/IconClose';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconClose', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconClose {...props} />);
    });

    const icon = screen.getByTestId('icon-close');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-close');
  });
});
