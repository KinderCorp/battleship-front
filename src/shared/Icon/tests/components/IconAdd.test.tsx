import { act, cleanup, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconAdd from '@shared/Icon/components/IconAdd';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconAdd', () => {
  afterEach(() => {
    cleanup();
  });

  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconAdd {...props} />);
    });

    const iconPeople = screen.getByTestId('icon-add');

    expect(iconPeople).toBeInTheDocument();
    expect(iconPeople).toHaveClass('icon-svg add');
  });
});
