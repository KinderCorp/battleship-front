import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconShare from '@shared/Icon/components/IconShare';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconShare', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconShare {...props} />);
    });

    const icon = screen.getByTestId('icon-share');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-share');
  });
});
