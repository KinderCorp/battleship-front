import { act, cleanup, render, screen } from '@testing-library/react';
import Level from '@shared/Level/components/Level';
import type { LevelProps } from '@shared/Level/models';

const props: LevelProps = {
  showProgressBar: false,
  size: 'medium',
};

describe('shared/components/Level', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  xit('should renders the expected component', () => {
    render(<Level {...props} />);

    const level = screen.getByTestId('level');

    expect(level).toBeInTheDocument();
    expect(level).toHaveClass('level');
    expect(level.querySelector('.progress-bar-out')).not.toBeInTheDocument();
  });

  xit('should renders the component with the progress bar', async () => {
    const newProps: LevelProps = { ...props, showProgressBar: true };

    await act(async () => {
      render(<Level {...newProps} />);
    });

    const level = screen.getByTestId('level');

    expect(level.querySelector('.progress-bar-out')).toBeInTheDocument();
  });
});
