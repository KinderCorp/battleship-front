import { useCallback, useMemo } from 'react';
import classNames from 'clsx';

import type { BoardBoat, BoardCellAffected, BoardProps } from '@shared/Board/models';
import BoardCell from '@shared/Board/components/BoardCell';
import BoardRow from '@shared/Board/components/BoardRow';
import Boat from '@shared/Boat/components/Boat';

/**
 * Board component.
 *
 * @param {BoardProps} props Props
 * @return {JSX.Element}
 */
export const Board = ({
  boats,
  className = '',
  isActive = false,
  isDisabled = false,
  onClick,
  dimensions,
  cellsAffected,
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
    for (let row = 0; row < dimensions; row++) {
      const cells = [];

      // Create the cells
      for (let col = 0; col < dimensions; col++) {
        const cellAffected = cellsAffected.find(
          (stateCell: BoardCellAffected) => stateCell.x === col && stateCell.y === row,
        );

        cells.push(
          <BoardCell
            isActive={isActive}
            isDisabled={isDisabled}
            key={`cell-${row}-${col}`}
            onClick={onClick}
            state={cellAffected?.state}
            x={col}
            y={row}
          />,
        );
      }

      board.push(<BoardRow key={`line-${row}`}>{cells}</BoardRow>);
    }

    return board;
  }, [cellsAffected, dimensions, isActive, isDisabled, onClick]);

  return (
    <div className={boardClassName} data-testid="board">
      <table className="board-table">
        <tbody className="board-body">{createBoard()}</tbody>
      </table>

      {boats.map((boat: BoardBoat, index: number) => (
        <Boat boatSrc={boat.boatSrc} key={index} height={boat.height} />
      ))}
    </div>
  );
};

export default Board;
