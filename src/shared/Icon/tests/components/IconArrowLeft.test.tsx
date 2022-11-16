import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconArrowLeft from '@shared/Icon/components/IconArrowLeft';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconArrowLeft', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconArrowLeft {...props} />);
    });

    const icon = screen.getByTestId('icon-arrow-left');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-arrow-left');
  });
});
