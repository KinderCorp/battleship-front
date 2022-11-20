import classNames from 'clsx';
import { useMemo } from 'react';

import { COLORS } from '@core/constants';
import Icon from '@shared/Icon/components/Icon';
import type { TitleProps } from '@shared/Title/models';

/**
 * Title component.
 *
 * @param {TitleProps} props Propss
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

  const titleClassName = useMemo(
    (): string =>
      classNames('title-container', type, className, {
        'has-icon': !!iconName,
      }),
    [className, iconName, type],
  );

  return (
    <div className={titleClassName} data-testid="title">
      <div className="title-content">
        {iconName && (
          <Icon borderColor={COLORS.TRANSPARENT} color={COLORS.PURPLE_LIGHT} name={iconName} />
        )}
        <TitleComponent className="title">{title}</TitleComponent>
      </div>

      {subTitle && <p className="subtitle">{subTitle}</p>}
    </div>
  );
};

export default Title;
