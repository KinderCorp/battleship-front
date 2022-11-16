import { act, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconPeople from '@shared/Icon/components/IconPeople';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconPeople', () => {
  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconPeople {...props} />);
    });

    const icon = screen.getByTestId('icon-people');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon-svg icon-people');
  });
});
