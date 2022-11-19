import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';

import Input from '@shared/Field/components/Input';
import { INPUT_PATTERNS } from '@shared/Field/constants';
import type { InputProps } from '@shared/Field/models';

const props: InputProps = {
  name: 'email',
  onChange: jest.fn(),
  value: 'value',
};

describe('shared/components/Input', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should renders the expected component', async () => {
    render(<Input {...props} />);

    const fieldContainer = screen.getByTestId('field');
    const input = screen.getByTestId('field-input');

    expect(fieldContainer).toBeInTheDocument();
    expect(fieldContainer).toContainElement(input);

    expect(input.querySelector('.toggle-password')).not.toBeInTheDocument();
    expect(input).toHaveClass('field-input');
    expect(input).toHaveAttribute('autocomplete', 'off');
    expect(input).toHaveAttribute('autocorrect', 'off');
    expect(input).not.toBeDisabled();
    expect(input).toHaveAttribute('id', `field-${props.name}`);
    expect(input).toHaveAttribute('inputmode', 'text');
    expect(input).toHaveAttribute('maxlength', '524288');
    expect(input).toHaveAttribute('minlength', '0');
    expect(input).toHaveAttribute('name', props.name);
    expect(input).toHaveAttribute('pattern', INPUT_PATTERNS.ALL);
    expect(input).not.toHaveAttribute('readonly');
    expect(input).toBeRequired();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('placeholder', '');
    expect(input).toHaveValue(props.value);

    const newValue = 'newValue';
    fireEvent.change(input, {
      target: { value: newValue },
    });
    expect(props.onChange).toBeCalledWith(props.name, newValue);
  });

  it('should renders the component with password type', async () => {
    const newProps: InputProps = {
      ...props,
      type: 'password',
    };

    await act(async () => {
      render(<Input {...newProps} />);
    });

    const fieldContainer = screen.getByTestId('field');
    const input = screen.getByTestId('field-input');
    const button = screen.getByTestId('button');

    expect(input).toHaveAttribute('type', newProps.type);
    expect(fieldContainer).toContainElement(button);
    expect(button).toHaveClass('small none');
    expect(button.querySelector('.icon-eye')).toBeInTheDocument();
    expect(button.querySelector('.icon-eye-hide')).not.toBeInTheDocument();

    await act(async () => {
      fireEvent.click(button);
    });
    expect(button.querySelector('.icon-eye')).not.toBeInTheDocument();
    expect(button.querySelector('.icon-eye-hide')).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');

    await act(async () => {
      fireEvent.click(button);
    });
    expect(button.querySelector('.icon-eye')).toBeInTheDocument();
    expect(button.querySelector('.icon-eye-hide')).not.toBeInTheDocument();
    expect(input).toHaveAttribute('type', newProps.type);
  });
});
