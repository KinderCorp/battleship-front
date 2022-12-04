import { useCallback, useMemo } from 'react';
import classNames from 'clsx';

import type { BoardCellState, BoardProps } from '@shared/Board/models';
import BoardCell from '@shared/Board/components/BoardCell';
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
  onClick,
  size,
  stateCells,
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
        const cellIsAffected = stateCells.find(
          (stateCell: BoardCellState) => stateCell.x === col && stateCell.y === row,
        );

        cells.push(
          <BoardCell
            isActive={isActive}
            isDisabled={isDisabled}
            key={`cell-${row}-${col}`}
            onClick={onClick}
            state={cellIsAffected?.state}
            x={col}
            y={row}
          />,
        );
      }

      board.push(<BoardRow key={`line-${row}`}>{cells}</BoardRow>);
    }

    return board;
  }, [isActive, isDisabled, onClick, size, stateCells]);

  return (
    <div className={boardClassName} data-testid="board">
      <table className="board-table">
        <tbody className="board-body">{createBoard()}</tbody>
      </table>
    </div>
  );
};

export default Board;
