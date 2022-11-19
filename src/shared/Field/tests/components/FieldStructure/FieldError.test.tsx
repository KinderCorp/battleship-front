import { cleanup, render, screen } from '@testing-library/react';

import FieldError from '@shared/Field/components/FieldStructure/FieldError';
import type { FieldErrorProps } from '@shared/Field/models';

const props: FieldErrorProps = {
  message: 'Le pseudo existe déjà',
};

describe('shared/components/FieldError', () => {
  afterEach(() => {
    cleanup();
  });

  it('should renders the expected component', () => {
    render(<FieldError {...props} />);

    const fieldError = screen.getByTestId('field-error');

    expect(fieldError).toBeInTheDocument();
    expect(fieldError).toHaveClass('field-error');
    expect(fieldError).toHaveTextContent('Le pseudo existe déjà');
  });

  it('should not renders the component if message is empty', () => {
    const { container } = render(<FieldError />);

    expect(container.querySelector('.field-error')).not.toBeInTheDocument();
  });

  it('should renders the component with another class name', () => {
    const newProps: FieldErrorProps = { ...props, className: 'field-error-other-class' };

    render(<FieldError {...newProps} />);

    const fieldError = screen.getByTestId('field-error');

    expect(fieldError).toBeInTheDocument();
    expect(fieldError).toHaveClass('field-error field-error-other-class');
  });
});
