import { useMemo } from 'react';

import type { BlockContainerProps } from '@shared/BlockContainer/model';
import classNames from 'clsx';
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
    iconName = null,
    title = '',
}: BlockContainerProps): JSX.Element => {

    const blockContainerClassName = useMemo(
        (): string =>
          classNames('block-container', className, {
            'has-icon': !!iconName,
          }),
        [className, iconName],
      );

    return (
        <>
          <div className={blockContainerClassName}>
            <Title className="block-container-title" title={title} type="h2" iconName={iconName} />
            <div className={blockContainerClassName}>{children}</div>
          </div>
        </>
    );
};

export default BlockContainer;