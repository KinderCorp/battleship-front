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
  icon,
  subTitle = '',
  title,
  type = 'h2',
}: TitleProps): JSX.Element | null => {
  const TitleComponent = useMemo(() => (type === 'none' ? 'p' : type), [type]);

  const titleContainerClassName = useMemo(
    (): string =>
      classNames('title-container', className, {
        'has-icon': !!icon,
      }),
    [className, icon],
  );

  const titleClassName = useMemo((): string => classNames('title', type), [type]);

  if (!title) return null;

  return (
    <div className={titleContainerClassName} data-testid="title">
      <div className="title-content">
        {!!icon && (
          <Icon
            borderColor={icon.borderColor || COLORS.TRANSPARENT}
            color={icon.color || COLORS.PURPLE_LIGHT}
            name={icon.name}
            size={icon.size}
          />
        )}

        <TitleComponent className={titleClassName}>{title}</TitleComponent>
      </div>

      {subTitle && <p className="subtitle">{subTitle}</p>}
    </div>
  );
};

export default Title;
