import { useCallback, useMemo } from 'react';
import classNames from 'clsx';

import BoardCell from '@shared/Board/components/BoardCell';
import type { BoardProps } from '@shared/Board/models';
import BoardRow from '@shared/Board/components/BoardRow';

/**
 * Board component.
 *
 * @param {BoardProps} props Props
 * @return {JSX.Element}
 */
export const Board = ({
  className = '',
  isActive = false,
  isDisabled = false,
  size,
}: BoardProps): JSX.Element => {
  const boardClassName = useMemo(
    (): string => classNames('board', { 'is-disabled': !!isDisabled }, className),
    [className, isDisabled],
  );

  /**
   * Create the board.
   *
   * @return {JSX.Element[]}
   */
  const createBoard = useCallback((): JSX.Element[] => {
    const board = [];

    // Create the lines
    for (let row = 0; row < size; row++) {
      const cells = [];

      // Create the cells
      for (let col = 0; col < size; col++) {
        cells.push(
          <BoardCell key={`cell-${row}-${col}`} isActive={isActive} isDisabled={isDisabled} />,
        );
      }

      board.push(<BoardRow key={`line-${row}`}>{cells}</BoardRow>);
    }

    return board;
  }, [isActive, isDisabled, size]);

  return (
    <div className={boardClassName} data-testid="board">
      <table className="board-table">
        <tbody className="board-body">{createBoard()}</tbody>
      </table>
    </div>
  );
};

export default Board;
