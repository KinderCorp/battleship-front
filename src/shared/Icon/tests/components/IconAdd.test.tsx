import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconAdd from '@shared/Icon/components/IconAdd';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconAdd', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconAdd {...props} />);
    });

    const icon = screen.getByTestId('icon-add');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg add');
  });
});
