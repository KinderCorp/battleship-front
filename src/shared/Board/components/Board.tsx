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
export const Board = ({ className = '', size }: BoardProps): JSX.Element => {
  const boardClassName = useMemo((): string => classNames('board', className), [className]);

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
        cells.push(<BoardCell state="hit" />);
      }

      board.push(<BoardRow>{cells}</BoardRow>);
    }

    return board;
  }, [size]);

  return (
    <table className={boardClassName} data-testid="board">
      <tbody className="board-content">{createBoard()}</tbody>
    </table>
  );
};

export default Board;
