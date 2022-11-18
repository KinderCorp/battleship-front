import classNames from 'clsx';
import { useMemo } from 'react';

interface Props {
  className?: string;
  htmlFor?: string;
  label: string;
}

/**
 * Field label component.
 *
 * @param {Props} props Props
 * @return {JSX.Element|null}
 */
const FieldLabel = ({ className = '', htmlFor, label = '' }: Props): JSX.Element | null => {
  const fieldLabelClassName = useMemo(
    (): string => classNames('field-label', className),
    [className],
  );

  if (!label) return null;

  return (
    <label className={fieldLabelClassName} htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default FieldLabel;
