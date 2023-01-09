import { useCallback, useMemo } from 'react';
import classNames from 'clsx';
import type { SyntheticEvent } from 'react';

import type { BoardCellProps } from '@shared/Board/models';
import { COLORS } from '@core/constants';
import Icon from '@shared/Icon/components/Icon';

/**
 * BoardCell component.
 *
 * @param {BoardCellProps} props Props
 * @return {JSX.Element}
 */
export const BoardCell = ({
  className = '',
  isDisabled = false,
  isShootActive = false,
  onClick,
  state,
  x,
  y,
}: BoardCellProps): JSX.Element => {
  const boardCellClassName = useMemo(
    (): string =>
      classNames(
        'board-cell',
        {
          [`board-cell--${state}`]: !!state,
          'is-disabled': !!isDisabled,
          'is-shoot-active': !!isShootActive && !state,
        },
        className,
      ),
    [className, isDisabled, isShootActive, state],
  );

  const handleClick = useCallback(
    (event: SyntheticEvent<EventTarget>) => {
      event.preventDefault();
      event.stopPropagation();

      if (!isDisabled && !!isShootActive && !state && onClick) {
        onClick({ x, y });
      }
    },
    [isDisabled, isShootActive, onClick, state, x, y],
  );

  return (
    <td className={boardCellClassName} data-testid="board-cell" onClick={handleClick}>
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
