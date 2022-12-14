import classNames from 'clsx';
import { useMemo } from 'react';

import { COLORS } from '@core/constants';
import { ICON_LIST } from '@shared/Icon/constants';
import type { IconProps } from '@shared/Icon/models';

/**
 * Icon component.
 *
 * @param {IconProps} props Props
 * @return {JSX.Element}
 */
const Icon = ({
  borderColor = COLORS.PURPLE_DARK,
  className = '',
  color = COLORS.WHITE,
  name,
  size = 'medium',
}: IconProps): JSX.Element => {
  const IconComponent = useMemo(() => ICON_LIST[name], [name]);

  const iconClassName = useMemo(
    (): string => classNames('icon', size, className),
    [className, size],
  );

  return (
    <span className={iconClassName} data-testid="icon">
      <IconComponent borderColor={borderColor} color={color} />
    </span>
  );
};

export default Icon;
