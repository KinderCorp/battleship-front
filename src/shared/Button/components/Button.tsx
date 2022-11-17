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
  children,
  className = '',
  isDisabled = false,
  isLoading = false,
  iconName = null,
  onClick,
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
      classNames('button', style, className, {
        'is-disabled': disabled,
        'is-loading': isLoading,
      }),
    [className, disabled, isLoading, style],
  );

  const iconColor = useMemo(() => BUTTON_ICON_STYLES[style].color, [style]);
  const iconBorderColor = useMemo(() => BUTTON_ICON_STYLES[style].borderColor, [style]);

  return (
    <button
      className={buttonClassName}
      data-testid="button"
      disabled={disabled}
      onClick={handleClick}
      role="button"
      type={type}
    >
      {iconName && <Icon borderColor={iconBorderColor} color={iconColor} name={iconName} />}
      <div className="button-content">{children}</div>
    </button>
  );
};

export default Button;
