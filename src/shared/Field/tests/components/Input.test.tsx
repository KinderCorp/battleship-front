import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';

import Input from '@shared/Field/components/Input';
import { INPUT_PATTERNS } from '@shared/Field/constants';
import type { InputProps } from '@shared/Field/models';

const props: InputProps = {
  name: 'firstname',
  onChange: jest.fn(),
  value: 'value',
};

const newValue = 'newValue';

describe('shared/components/Input', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should renders the expected component', () => {
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

  it('should renders the component with label', () => {
    const newProps: InputProps = {
      ...props,
      label: 'Label',
    };

    render(<Input {...newProps} />);

    const input = screen.getByTestId('field-input');
    const fieldLabel = screen.getByTestId('field-label');

    expect(fieldLabel).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', props.placeholder);
  });

  it('should renders the component disabled', () => {
    const newProps: InputProps = {
      ...props,
      isDisabled: true,
    };

    render(<Input {...newProps} />);

    const input = screen.getByTestId('field-input');

    expect(input).toBeDisabled();

    fireEvent.change(input, {
      target: { value: newValue },
    });
    expect(props.onChange).not.toBeCalled();
  });

  it('should renders the component read only', () => {
    const newProps: InputProps = {
      ...props,
      isReadonly: true,
    };

    render(<Input {...newProps} />);

    const input = screen.getByTestId('field-input');

    expect(input).toHaveAttribute('readonly');

    fireEvent.change(input, {
      target: { value: newValue },
    });
    expect(props.onChange).not.toBeCalled();
  });

  it('should renders the component with error', () => {
    const newProps: InputProps = {
      ...props,
      errorMessage: 'Error',
    };

    render(<Input {...newProps} />);

    const fieldError = screen.getByTestId('field-error');

    expect(fieldError).toBeInTheDocument();
  });
});
