import classNames from 'clsx';
import { useMemo } from 'react';

import type { FieldErrorProps } from '@shared/Field/models';

/**
 * Field error component.
 *
 * @param {FieldErrorProps} props Props
 * @return {JSX.Element|null}
 */
const FieldError = ({ className = '', message = '' }: FieldErrorProps): JSX.Element | null => {
  const fieldErrorClassName = useMemo(
    (): string => classNames('field-error', className),
    [className],
  );

  if (!message) return null;

  return (
    <p className={fieldErrorClassName} data-testid="field-error">
      {message}
    </p>
  );
};

export default FieldError;
