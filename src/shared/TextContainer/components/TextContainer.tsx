import classNames from 'clsx';
import { useMemo } from 'react';

import type { TextContainerProps } from '@shared/TextContainer/models';

/**
 * TextContainer component.
 *
 * @param {TextContainerProps} props Props
 * @return {JSX.Element}
 */
const TextContainer = ({ className = '', value }: TextContainerProps): JSX.Element => {
  const textContainerClassName = useMemo(
    (): string => classNames('text-container', className),
    [className],
  );

  return (
    <div className={textContainerClassName} data-testid="text-container">
      <p className="text-container-value">{value}</p>
    </div>
  );
};

export default TextContainer;
