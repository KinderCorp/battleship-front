import classNames from 'clsx';
import { useMemo } from 'react';

import type { TextContainerProps } from '@shared/TextContainer/models';

/**
 * TextContainer component.
 *
 * @param {TextContainerProps} props Props
 * @return {JSX.Element}
 */
const TextContainer = ({
  children,
  className = '',
  height = 'medium',
}: TextContainerProps): JSX.Element => {
  const textContainerClassName = useMemo(
    (): string => classNames('text-container', `text-container-height-${height}`, className),
    [className, height],
  );

  return (
    <div className={textContainerClassName} data-testid="text-container">
      {children}
    </div>
  );
};

export default TextContainer;
