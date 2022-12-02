import classNames from 'clsx';
import { useMemo } from 'react';

import type { VersusProps } from '@shared/Versus/models';

/**
 * Versus component.
 *
 * @param {VersusProps} props Props
 * @return {JSX.Element }
 */
 const Versus = ({
  className = '',
  sizes = 'large',
}: VersusProps): JSX.Element => {
  const versusClassName = useMemo(
    (): string => classNames( className, sizes),
    [className, sizes],
  );

  return (
    <>
    <div className={versusClassName}>VS</div>
    </>
  );
};

export default Versus;