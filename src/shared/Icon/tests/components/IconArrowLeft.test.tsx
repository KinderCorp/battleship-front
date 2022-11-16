import { act, cleanup, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconArrowLeft from '@shared/Icon/components/IconArrowLeft';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconArrowLeft', () => {
  afterEach(() => {
    cleanup();
  });

  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconArrowLeft {...props} />);
    });

    const iconPeople = screen.getByTestId('icon-arrow-left');

    expect(iconPeople).toBeInTheDocument();
    expect(iconPeople).toHaveClass('icon-svg arrow-left');
  });
});
