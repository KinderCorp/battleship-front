import classNames from 'clsx';
import { useMemo } from 'react';

import type { HeaderProps } from '@shared/Header/models';
import Title from '@shared/Title/components/Title';

/**
 * Header component.
 *
 * @param {HeaderProps} props Props
 * @return {JSX.Element}
 */
const Header = ({
  className = '',
  height = 'small',
  leftSide = null,
  rightSide = null,
  title,
}: HeaderProps): JSX.Element => {
  const headerClassName = useMemo(
    (): string => classNames('header', height, className),
    [className, height],
  );

  return (
    <div className={headerClassName} data-testid="header">
      {leftSide && <div className="header-left-side">{leftSide}</div>}
      <Title className="header-title" title={title} type="h2" />
      {rightSide && <div className="header-right-side">{rightSide}</div>}
    </div>
  );
};

export default Header;
