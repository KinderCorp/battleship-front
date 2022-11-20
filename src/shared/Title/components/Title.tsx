import classNames from 'clsx';
import { useMemo } from 'react';

import { COLORS } from '@core/constants';
import Icon from '@shared/Icon/components/Icon';
import type { TitleProps } from '@shared/Title/models';

/**
 * Title component.
 *
 * @param {TitleProps} props Props
 * @return {JSX.Element}
 */
export const Title = ({
  className = '',
  iconName = null,
  subTitle = '',
  title,
  type = 'h2',
}: TitleProps): JSX.Element => {
  const TitleComponent = useMemo(() => (type === 'none' ? 'p' : type), [type]);

  const titleContainerClassName = useMemo(
    (): string =>
      classNames('title-container', className, {
        'has-icon': !!iconName,
      }),
    [className, iconName],
  );

  const titleClassName = useMemo((): string => classNames('title', type), [type]);

  return (
    <div className={titleContainerClassName} data-testid="title">
      <div className="title-content">
        {iconName && (
          <Icon borderColor={COLORS.TRANSPARENT} color={COLORS.PURPLE_LIGHT} name={iconName} />
        )}
        <TitleComponent className={titleClassName}>{title}</TitleComponent>
      </div>

      {subTitle && <p className="subtitle">{subTitle}</p>}
    </div>
  );
};

export default Title;
