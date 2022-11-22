import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';

import Modal from '@shared/Modal/components/Modal';
import type { ModalProps } from '@shared/Modal/models';

const props: ModalProps = {
  children: <p>Content</p>,
  isVisible: false,
  onClose: jest.fn(),
  title: 'Title',
};

describe('shared/components/Modal', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should renders the expected component', async () => {
    await act(async () => {
      render(<Modal {...props} />);
    });

    const modal = screen.getByTestId('modal');
    const modalContent = modal.querySelector('.modal-content');
    const header = screen.getByTestId('header');
    const behindOverlay = screen.getByTestId('behind-overlay');
    const leftSideNode = header.querySelector('.header-left-side');
    const rightSideNode = header.querySelector('.header-right-side');
    const button = screen.getByTestId('button');
    const iconClose = screen.getByTestId('icon-close');

    expect(behindOverlay).toBeInTheDocument();
    expect(behindOverlay).not.toHaveClass('is-visible');

    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('modal centered');
    expect(modal).not.toHaveClass('is-visible');
    expect(modal).toContainElement(header);
    expect(modalContent).toBeInTheDocument();
    expect(modalContent).toContainHTML('<p>Content</p>');

    expect(header).toHaveClass('modal-header');
    expect(header).toHaveTextContent('Title');
    expect(leftSideNode).not.toBeInTheDocument();
    expect(rightSideNode).toBeInTheDocument();
    expect(rightSideNode).toContainElement(button);
    expect(button).toHaveClass('secondary');
    expect(button).toContainElement(iconClose);

    fireEvent.click(behindOverlay);
    expect(props.onClose).toHaveBeenCalledTimes(1);

    fireEvent.click(button);
    expect(props.onClose).toHaveBeenCalledTimes(2);
  });

  it('should renders the component visible', async () => {
    const newProps: ModalProps = { ...props, isVisible: true };

    await act(async () => {
      render(<Modal {...newProps} />);
    });

    const modal = screen.getByTestId('modal');
    const behindOverlay = screen.getByTestId('behind-overlay');

    expect(behindOverlay).toBeInTheDocument();
    expect(behindOverlay).toHaveClass('is-visible');

    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('modal centered is-visible');
  });

  it('should renders the component with another class name', async () => {
    const newProps: ModalProps = { ...props, className: 'modal-other-class' };

    await act(async () => {
      render(<Modal {...newProps} />);
    });

    const modal = screen.getByTestId('modal');

    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('modal centered modal-other-class');
  });

  xit('should renders the component with another position', async () => null);
});
