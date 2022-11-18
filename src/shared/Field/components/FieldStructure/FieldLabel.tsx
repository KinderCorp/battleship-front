import classNames from 'clsx';
import { useMemo } from 'react';

import type { FieldLabelProps } from '@shared/Field/models';

/**
 * Field label component.
 *
 * @param {FieldLabelProps} props Props
 * @return {JSX.Element|null}
 */
const FieldLabel = ({
  className = '',
  htmlFor,
  label = '',
}: FieldLabelProps): JSX.Element | null => {
  const fieldLabelClassName = useMemo(
    (): string => classNames('field-label', className),
    [className],
  );

  if (!label) return null;

  return (
    <label className={fieldLabelClassName} data-testid="field-label" htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default FieldLabel;
