import classNames from 'clsx';
import { useMemo } from 'react';

import type { BoardCellProps } from '@shared/Board/models';
import { COLORS } from '@core/constants';
import Icon from '@shared/Icon/components/Icon';

/**
 * BoardCell component.
 *
 * @param {BoardCellProps} props Props
 * @return {JSX.Element}
 */
export const BoardCell = ({ className = '', state }: BoardCellProps): JSX.Element => {
  const boardCellClassName = useMemo(
    (): string => classNames('board-cell', { [`board-cell--${state}`]: !!state }, className),
    [className, state],
  );

  return (
    <td className={boardCellClassName} data-testid="board-cell">
      {state === 'hit' && (
        <Icon
          borderColor={COLORS.PINK}
          className="board-cell-content"
          color={COLORS.PURPLE}
          name="Close"
          size="responsive"
        />
      )}
    </td>
  );
};

export default BoardCell;
