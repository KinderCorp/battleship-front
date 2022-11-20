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

    const fieldContainer = screen.getByTestId('field');

    expect(fieldContainer).toBeInTheDocument();
    expect(fieldContainer).toHaveClass('field');
    expect(fieldContainer).not.toHaveClass('is-error is-disabled');
    expect(fieldContainer.querySelector('.field-label')).not.toBeInTheDocument();
    expect(fieldContainer.querySelector('.field-error')).not.toBeInTheDocument();
    expect(fieldContainer.querySelector('.field-content')).toBeInTheDocument();
    expect(fieldContainer).toHaveTextContent('Field here');
  });

  it('should renders the component with label', () => {
    const newProps: FieldContainerProps = {
      ...props,
      label: 'Label',
    };

    render(<FieldContainer {...newProps} />);

    const fieldContainer = screen.getByTestId('field');
    const fieldLabel = screen.getByTestId('field-label');

    expect(fieldContainer).toBeInTheDocument();
    expect(fieldContainer).toContainElement(fieldLabel);
    expect(fieldLabel).toHaveAttribute('for', 'field-id');
  });

  it('should renders the component with error message', () => {
    const newProps: FieldContainerProps = {
      ...props,
      errorMessage: 'Field is required',
    };

    render(<FieldContainer {...newProps} />);

    const fieldContainer = screen.getByTestId('field');
    const fieldError = screen.getByTestId('field-error');

    expect(fieldContainer).toBeInTheDocument();
    expect(fieldContainer).toHaveClass('field is-error');
    expect(fieldContainer).toContainElement(fieldError);
  });

  it('should renders the component with another class name', () => {
    const newProps: FieldContainerProps = {
      ...props,
      className: 'field-other-class',
    };

    render(<FieldContainer {...newProps} />);

    const fieldContainer = screen.getByTestId('field');

    expect(fieldContainer).toBeInTheDocument();
    expect(fieldContainer).toHaveClass('field field-other-class');
  });

  it('should renders the component disabled', () => {
    const newProps: FieldContainerProps = {
      ...props,
      isDisabled: true,
    };

    render(<FieldContainer {...newProps} />);

    const fieldContainer = screen.getByTestId('field');

    expect(fieldContainer).toBeInTheDocument();
    expect(fieldContainer).toHaveClass('field is-disabled');
  });
});
