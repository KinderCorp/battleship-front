import { useCallback, useMemo } from 'react';
import classNames from 'clsx';
import type { SyntheticEvent } from 'react';

import { BUTTON_ICON_STYLES } from '@shared/Button/constants';
import type { ButtonProps } from '@shared/Button/models';
import Icon from '@shared/Icon/components/Icon';

/**
 * Button component.
 *
 * @param {ButtonProps} props Props
 * @return {JSX.Element}
 */
const Button = ({
  children = null,
  className = '',
  iconName = null,
  isDisabled = false,
  isLoading = false,
  onClick,
  size = 'medium',
  style = 'primary',
  type = 'button',
}: ButtonProps): JSX.Element => {
  const disabled = useMemo(() => isDisabled || isLoading, [isDisabled, isLoading]);

  const handleClick = useCallback(
    (event: SyntheticEvent<EventTarget>) => {
      if (!disabled) onClick(event);
    },
    [disabled, onClick],
  );

  const buttonClassName = useMemo(
    (): string =>
      classNames('button', style, size, className, {
        'has-content': children,
        'is-disabled': disabled,
        'is-loading': isLoading,
      }),
    [children, className, disabled, isLoading, size, style],
  );

  const iconStyle = useMemo(
    () => BUTTON_ICON_STYLES[disabled ? 'disabled' : style],
    [disabled, style],
  );

  return (
    <button
      className={buttonClassName}
      data-testid="button"
      disabled={disabled}
      onClick={handleClick}
      role="button"
      type={type}
    >
      {iconName && (
        <Icon borderColor={iconStyle.borderColor} color={iconStyle.color} name={iconName} />
      )}
      {children && <div className="button-content">{children}</div>}
    </button>
  );
};

export default Button;
