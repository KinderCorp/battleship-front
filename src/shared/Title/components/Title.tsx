import classNames from 'clsx';
import { useMemo } from 'react';

import { COLORS } from '@core/constants';
import Icon from '@shared/Icon/components/Icon';
import type { TitleProps } from '@shared/Title/models';

/**
 * Title component.
 *
 * @param {TitleProps} props Props
 * @return {JSX.Element|null}
 */
export const Title = ({
  className = '',
  iconBorderColor = COLORS.TRANSPARENT,
  iconColor = COLORS.PURPLE_LIGHT,
  iconName,
  iconSize,
  subTitle = '',
  title,
  type = 'h2',
}: TitleProps): JSX.Element | null => {
  const TitleComponent = useMemo(() => (type === 'none' ? 'p' : type), [type]);

  const titleContainerClassName = useMemo(
    (): string =>
      classNames('title-container', className, {
        'has-icon': !!iconName,
      }),
    [className, iconName],
  );

  const titleClassName = useMemo((): string => classNames('title', type), [type]);

  if (!title) return null;

  return (
    <div className={titleContainerClassName} data-testid="title">
      <div className="title-content">
        {iconName && (
          <Icon borderColor={iconBorderColor} color={iconColor} name={iconName} size={iconSize} />
        )}
        <TitleComponent className={titleClassName}>{title}</TitleComponent>
      </div>

      {subTitle && <p className="subtitle">{subTitle}</p>}
    </div>
  );
};

export default Title;
