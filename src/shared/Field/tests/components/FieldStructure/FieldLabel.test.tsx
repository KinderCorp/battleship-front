import { cleanup, render, screen } from '@testing-library/react';

import FieldLabel from '@shared/Field/components/FieldStructure/FieldLabel';
import type { FieldLabelProps } from '@shared/Field/models';

const props: FieldLabelProps = {
  htmlFor: 'field-pseudo',
  label: 'Votre pseudo',
};

describe('shared/components/FieldLabel', () => {
  afterEach(() => {
    cleanup();
  });

  it('should renders the expected component', () => {
    render(<FieldLabel {...props} />);

    const fieldLabel = screen.getByTestId('field-label');

    expect(fieldLabel).toBeInTheDocument();
    expect(fieldLabel).toHaveClass('field-label');
    expect(fieldLabel).toHaveAttribute('for', 'field-pseudo');
    expect(fieldLabel).toHaveTextContent('Votre pseudo');
  });

  it('should not renders the component if label is empty', () => {
    const newProps: FieldLabelProps = { ...props, label: '' };

    const { container } = render(<FieldLabel {...newProps} />);

    expect(container.querySelector('.field-label')).not.toBeInTheDocument();
  });

  it('should renders the component with another class name', () => {
    const newProps: FieldLabelProps = { ...props, className: 'field-label-other-class' };

    render(<FieldLabel {...newProps} />);

    const fieldLabel = screen.getByTestId('field-label');

    expect(fieldLabel).toBeInTheDocument();
    expect(fieldLabel).toHaveClass('field-label field-label-other-class');
  });
});
