import classNames from 'clsx';
import { useMemo } from 'react';

import type { FieldContainerProps } from '@shared/Field/models';
import FieldError from '@shared/Field/components/FieldStructure/FieldError';
import FieldLabel from '@shared/Field/components/FieldStructure/FieldLabel';

/**
 * Field container component.
 *
 * @param {FieldContainerProps} props Props
 * @return {JSX.Element}
 */
const FieldContainer = ({
  children,
  className = '',
  errorMessage = '',
  htmlFor = '',
  isDisabled = false,
  label = '',
}: FieldContainerProps): JSX.Element => {
  const fieldContainerClassName = useMemo(
    (): string =>
      classNames('field', className, {
        'is-disabled': !!isDisabled,
        'is-error': !!errorMessage,
      }),
    [className, errorMessage, isDisabled],
  );

  return (
    <div className={fieldContainerClassName} data-testid="field">
      <FieldLabel htmlFor={htmlFor} label={label} />
      <div className="field-content">{children}</div>
      <FieldError message={errorMessage} />
    </div>
  );
};

export default FieldContainer;
