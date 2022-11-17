import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconRemove from '@shared/Icon/components/IconRemove';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconRemove', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconRemove {...props} />);
    });

    const icon = screen.getByTestId('icon-remove');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-remove');
  });
});
