import classNames from 'clsx';
import { useMemo } from 'react';

import type { HeaderProps } from '@shared/Header/models';

/**
 * Header component.
 *
 * @param {HeaderProps} props Props
 * @return {JSX.Element}
 */
const Button = ({ className = '' }: HeaderProps): JSX.Element => {
  const headerClassName = useMemo((): string => classNames('header', className), [className]);

  return <div className={headerClassName}></div>;
};

export default Button;
