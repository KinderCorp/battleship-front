import { cleanup, render, screen } from '@testing-library/react';

import FieldContainer from '@shared/Field/components/FieldStructure/FieldContainer';
import type { FieldContainerProps } from '@shared/Field/models';

const props: FieldContainerProps = {
  children: <span>Field here</span>,
  htmlFor: 'field-id',
};

describe('shared/components/FieldContainer', () => {
  afterEach(() => {
    cleanup();
  });

  it('should renders the expected component', () => {
    render(<FieldContainer {...props} />);

    const field = screen.getByTestId('field');

    expect(field).toBeInTheDocument();
    expect(field).toHaveClass('field');
    expect(field).not.toHaveClass('is-error is-disabled');
    expect(field.querySelector('.field-label')).not.toBeInTheDocument();
    expect(field.querySelector('.field-error')).not.toBeInTheDocument();
    expect(field.querySelector('.field-content')).toBeInTheDocument();
    expect(field).toHaveTextContent('Field here');
  });

  it('should renders the component with label', () => {
    const newProps: FieldContainerProps = {
      ...props,
      label: 'Label',
    };

    render(<FieldContainer {...newProps} />);

    const field = screen.getByTestId('field');
    const fieldLabel = screen.getByTestId('field-label');

    expect(field).toBeInTheDocument();
    expect(field).toContainElement(fieldLabel);
    expect(fieldLabel).toHaveAttribute('for', 'field-id');
  });

  it('should renders the component with error message', () => {
    const newProps: FieldContainerProps = {
      ...props,
      errorMessage: 'Field is required',
    };

    render(<FieldContainer {...newProps} />);

    const field = screen.getByTestId('field');
    const fieldError = screen.getByTestId('field-error');

    expect(field).toBeInTheDocument();
    expect(field).toHaveClass('field is-error');
    expect(field).toContainElement(fieldError);
  });

  it('should renders the component with another class name', () => {
    const newProps: FieldContainerProps = {
      ...props,
      className: 'field-other-class',
    };

    render(<FieldContainer {...newProps} />);

    const field = screen.getByTestId('field');

    expect(field).toBeInTheDocument();
    expect(field).toHaveClass('field field-other-class');
  });

  it('should renders the component disabled', () => {
    const newProps: FieldContainerProps = {
      ...props,
      isDisabled: true,
    };

    render(<FieldContainer {...newProps} />);

    const field = screen.getByTestId('field');

    expect(field).toBeInTheDocument();
    expect(field).toHaveClass('field is-disabled');
  });
});
