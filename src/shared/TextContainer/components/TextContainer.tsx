import classNames from 'clsx';
import { useMemo } from 'react';

import type { TextContainerProps } from '@shared/TextContainer/models';

/**
 * TextContainer component.
 *
 * @param {TextContainerProps} props Props
 * @return {JSX.Element}
 */
const TextContainer = ({ children, className = '' }: TextContainerProps): JSX.Element => {
  const textContainerClassName = useMemo(
    (): string => classNames('text-container', className),
    [className],
  );

  return (
    <div className={textContainerClassName} data-testid="text-container">
      {children}
    </div>
  );
};

export default TextContainer;
