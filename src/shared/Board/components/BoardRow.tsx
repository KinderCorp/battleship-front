import classNames from 'clsx';
import { useMemo } from 'react';

import type { BoardRowProps } from '@shared/Board/models';

/**
 * BoardRow component.
 *
 * @param {BoardRowProps} props Props
 * @return {JSX.Element}
 */
export const BoardRow = ({ children, className = '' }: BoardRowProps): JSX.Element => {
  const boardRowClassName = useMemo((): string => classNames('board-row', className), [className]);

  return (
    <tr className={boardRowClassName} data-testid="board-row">
      {children}
    </tr>
  );
};

export default BoardRow;
