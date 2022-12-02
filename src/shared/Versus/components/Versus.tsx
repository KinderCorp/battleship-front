import classNames from 'clsx';
import { useMemo } from 'react';

import useTranslation from '@hooks/useTranslation';
import type { VersusProps } from '@shared/Versus/models';

/**
 * Versus component.
 *
 * @param {VersusProps} props Props
 * @return {JSX.Element}
 */
const Versus = ({
  className = '',
  size = 'medium',
}: VersusProps): JSX.Element => {
  const { translate } = useTranslation();
  
  const versusClassName = useMemo(
    (): string => classNames(className, size),
    [className, size],
  );

  return (
    <div className={versusClassName}>{translate('versus')}</div>
  );
};

export default Versus;