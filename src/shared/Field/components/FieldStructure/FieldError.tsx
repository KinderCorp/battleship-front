import classNames from 'clsx';
import { useMemo } from 'react';

interface Props {
  className?: string;
  message?: string;
}

/**
 * Field error component.
 *
 * @param {Props} props Props
 * @return {JSX.Element|null}
 */
const FieldError = ({ className = '', message = '' }: Props): JSX.Element | null => {
  const fieldErrorClassName = useMemo(
    (): string => classNames('field-error', className),
    [className],
  );

  if (!message) return null;

  return <p className={fieldErrorClassName}>{message}</p>;
};

export default FieldError;
