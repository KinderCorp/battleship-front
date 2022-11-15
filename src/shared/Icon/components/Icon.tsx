import { Suspense, useMemo } from 'react';
import classNames from 'clsx';

import type { IconName, IconSize } from '@shared/Icon/models';
import { COLORS } from '@core/constants';
import { ICON_LIST } from '@shared/Icon/constants';

interface Props {
  borderColor?: string;
  className?: string;
  color?: string;
  name: IconName;
  size?: IconSize;
}

/**
 * Icon component.
 *
 * @param {Props} props Icon props
 * @return {JSX.Element}
 */
const Icon = ({
  borderColor = COLORS.PURPLE_DARK,
  className = '',
  color = COLORS.WHITE,
  name,
  size = 'medium',
}: Props): JSX.Element => {
  const IconComponent = useMemo(() => ICON_LIST[name], [name]);

  const iconClassName = useMemo(
    (): string => classNames('icon', size, className),
    [className, size],
  );

  return (
    <Suspense fallback={null}>
      <span className={iconClassName} data-testid="icon">
        <IconComponent borderColor={borderColor} color={color} />
      </span>
    </Suspense>
  );
};

export default Icon;
