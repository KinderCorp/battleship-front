import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import BehindOverlay from '@shared/Modal/components/BehindOverlay';
import type { BehindOverlayProps } from '@shared/Modal/models';

const props: BehindOverlayProps = { isVisible: false, onClose: jest.fn() };

describe('shared/components/BehindOverlay', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should renders the expected component', () => {
    render(<BehindOverlay {...props} />);

    const behindOverlay = screen.getByTestId('behind-overlay');

    expect(behindOverlay).toBeInTheDocument();
    expect(behindOverlay).toHaveClass('behind-overlay');
    expect(behindOverlay).not.toHaveClass('is-visible');
  });

  it('should renders the component visible', () => {
    const newProps: BehindOverlayProps = { ...props, isVisible: true };

    render(<BehindOverlay {...newProps} />);

    const behindOverlay = screen.getByTestId('behind-overlay');

    expect(behindOverlay).toBeInTheDocument();
    expect(behindOverlay).toHaveClass('behind-overlay is-visible');

    fireEvent.click(behindOverlay);
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it('should renders the component with another class name', () => {
    const newProps: BehindOverlayProps = { ...props, className: 'behind-overlay-other-class' };

    render(<BehindOverlay {...newProps} />);

    const behindOverlay = screen.getByTestId('behind-overlay');

    expect(behindOverlay).toBeInTheDocument();
    expect(behindOverlay).toHaveClass('behind-overlay behind-overlay-other-class');
    expect(behindOverlay).not.toHaveClass('is-visible');
  });
});
