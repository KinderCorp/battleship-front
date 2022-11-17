import { act, fireEvent, render, screen } from '@testing-library/react';

import Button from '@shared/Button/components/Button';
import type { ButtonProps } from '@shared/Button/models';

const props: ButtonProps = { onClick: jest.fn() };

describe('shared/components/Button', () => {
  it('should renders the expected component', async () => {
    render(<Button {...props} />);

    const button = screen.getByTestId('button');

    expect(button).toBeInTheDocument();
    expect(button).toBeEmptyDOMElement();
    expect(button).toHaveClass('button primary medium');
    expect(button).not.toHaveClass('has-content is-disabled is-loading');
    expect(button).toHaveAttribute('role', 'button');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).not.toBeDisabled();

    fireEvent.click(button);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should renders the component with an icon', async () => {
    const newProps: ButtonProps = { ...props, iconName: 'Close' };

    await act(async () => {
      render(<Button {...newProps} />);
    });

    const button = screen.getByTestId('button');
    const icon = screen.getByTestId('icon');

    expect(button).not.toBeEmptyDOMElement();
    expect(button).toContainElement(icon);
  });

  it('should renders the component with children', async () => {
    const newProps: ButtonProps = { ...props, children: 'Click me!' };

    render(<Button {...newProps} />);

    const button = screen.getByTestId('button');

    expect(button).not.toBeEmptyDOMElement();
    expect(button).toHaveClass('has-content');
    expect(button).toHaveTextContent('Click me!');
  });

  it('should renders the component with another class name', async () => {
    const newProps: ButtonProps = { ...props, className: 'button-other-class' };

    render(<Button {...newProps} />);

    const button = screen.getByTestId('button');

    expect(button).toHaveClass('button-other-class');
  });
});
