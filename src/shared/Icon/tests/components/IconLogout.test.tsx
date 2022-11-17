import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconLogout from '@shared/Icon/components/IconLogout';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconLogout', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconLogout {...props} />);
    });

    const icon = screen.getByTestId('icon-logout');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-logout');
  });
});
