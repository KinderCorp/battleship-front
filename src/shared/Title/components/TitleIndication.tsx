import classNames from 'clsx';
import { useMemo } from 'react';

import { COLORS } from '@core/constants';
import Title from '@shared/Title/components/Title';
import type { TitleIndicationProps } from '@shared/Title/models';

/**
 * TitleIndication component.
 *
 * @param {TitleIndicationProps} props Props
 * @return {JSX.Element|null}
 */
export const TitleIndication = ({
  className = '',
  iconName,
  title,
}: TitleIndicationProps): JSX.Element | null => {
  const titleIndicationClassName = useMemo(
    (): string => classNames('title-indication', className),
    [className],
  );

  return (
    <Title
      className={titleIndicationClassName}
      icon={{
        borderColor: COLORS.PURPLE_DARK,
        color: COLORS.WHITE,
        name: iconName,
        size: 'large',
      }}
      title={title}
    />
  );
};

export default TitleIndication;
