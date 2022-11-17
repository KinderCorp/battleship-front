import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconReload from '@shared/Icon/components/IconReload';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconReload', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconReload {...props} />);
    });

    const icon = screen.getByTestId('icon-reload');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-reload');
  });
});
