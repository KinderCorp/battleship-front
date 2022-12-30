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
  content,
  height = 'small',
  leftSideNode = null,
  rightSideNode = null,
  title,
}: HeaderProps): JSX.Element => {
  const headerClassName = useMemo(
    (): string => classNames('header', height, className),
    [className, height],
  );

  return (
    <header className={headerClassName} data-testid="header">
      {leftSideNode && <div className="header-left-side">{leftSideNode}</div>}

      {!!title && <Title className="header-title" title={title} type="h2" />}

      {!!content && !title && <div className="header-content">{content}</div>}

      {rightSideNode && <div className="header-right-side">{rightSideNode}</div>}
    </header>
  );
};

export default Header;
