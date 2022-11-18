import classNames from 'clsx';
import type { ReactNode } from 'react';
import { useMemo } from 'react';

import FieldError from '@shared/Field/components/FieldStructure/FieldError';
import FieldLabel from '@shared/Field/components/FieldStructure/FieldLabel';

interface Props {
  children: ReactNode;
  className?: string;
  errorMessage?: string;
  htmlFor?: string;
  isDisabled?: boolean;
  label?: string;
}

/**
 * Field container component.
 *
 * @param {Props} props Props
 * @return {JSX.Element}
 */
const FieldContainer = ({
  children,
  className = '',
  errorMessage = '',
  htmlFor = '',
  isDisabled = false,
  label = '',
}: Props): JSX.Element => {
  const fieldContainerClassName = useMemo(
    (): string =>
      classNames('field', className, {
        'is-disabled': !!isDisabled,
        'is-error': !!errorMessage,
      }),
    [className, errorMessage, isDisabled],
  );

  return (
    <div className={fieldContainerClassName}>
      <FieldLabel htmlFor={htmlFor} label={label} />
      <div className="field-content">{children}</div>
      <FieldError message={errorMessage} />
    </div>
  );
};

export default FieldContainer;
