import classNames from 'clsx';
import { useMemo } from 'react';

import type { BlockContainerProps } from '@shared/BlockContainer/models';
import Title from '@shared/Title/components/Title';

/**
 * BlockContainer component.
 *
 * @param {BlockContainerProps} props Props
 * @return {JSX.Element}
 */
const BlockContainer = ({
  children,
  className = '',
  iconName,
  title = '',
}: BlockContainerProps): JSX.Element => {
  const blockContainerClassName = useMemo(
    (): string => classNames('block-container', className),
    [className],
  );

  return (
    <div className={blockContainerClassName} data-testid="block-container">
      <Title
        className="block-container-title"
        // FIXME: bad code
        icon={iconName ? { name: iconName } : undefined}
        title={title}
        type="h2"
      />
      <div className="block-container-content">{children}</div>
    </div>
  );
};

export default BlockContainer;
