import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconCopy from '@shared/Icon/components/IconCopy';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconCopy', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconCopy {...props} />);
    });

    const icon = screen.getByTestId('icon-copy');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg copy');
  });
});
