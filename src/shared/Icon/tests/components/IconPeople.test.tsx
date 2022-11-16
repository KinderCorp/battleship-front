import { act, cleanup, render, screen } from '@testing-library/react';

import { COLORS } from '@core/constants';
import IconPeople from '@shared/Icon/components/IconPeople';
import type { IconSvgProps } from '@shared/Icon/models';

describe('shared/components/IconPeople', () => {
  afterEach(() => {
    cleanup();
  });

  it('should renders the expected component', async () => {
    const props: IconSvgProps = { borderColor: COLORS.PURPLE, color: COLORS.WHITE };

    await act(async () => {
      render(<IconPeople {...props} />);
    });

    const iconPeople = screen.getByTestId('icon-people');

    expect(iconPeople).toBeInTheDocument();
    expect(iconPeople).toHaveClass('icon-svg people');
  });
});
