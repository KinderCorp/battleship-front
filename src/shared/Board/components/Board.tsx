import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'clsx';
import type { CSSProperties } from 'react';

import type { BoardBoat, BoardCellAffected, BoardProps } from '@shared/Board/models';
import BoardCell from '@shared/Board/components/BoardCell';
import BoardRow from '@shared/Board/components/BoardRow';
import Boat from '@shared/Boat/components/Boat';
import { checkBoardBoatsPosition } from '../helpers';

/**
 * Board component.
 *
 * @param {BoardProps} props Props
 * @return {JSX.Element}
 */
export const Board = ({
  boats,
  cellsAffected,
  className = '',
  dimensions,
  isActive = false,
  isDisabled = false,
  onClick,
  setBoats,
}: BoardProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current?.offsetWidth || 0);
    setHeight(ref.current?.offsetHeight || 0);
  }, [ref]);

  const onBoatRotation = useCallback(
    (index: number) => {
      const newBoats = [...(boats as BoardBoat[])];
      const boat = { ...newBoats?.[index] };

      if (boat) {
        boat.direction = boat.direction === 'vertical' ? 'horizontal' : 'vertical';
        console.log('🚀 ~ file: Board.tsx:44 ~ boat', boat);
        console.log('🚀 ~ file: Board.tsx:40 ~ newBoats', newBoats);
        console.log('🚀 ~ file: Board.tsx:40 ~ boats', boats);
        if (checkBoardBoatsPosition(newBoats)) setBoats?.(newBoats);
      }
    },
    [boats, setBoats],
  );

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
        const cellAffected = cellsAffected?.find(
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
    <div className={boardClassName} data-testid="board" ref={ref}>
      <table className="board-table">
        <tbody className="board-body">{createBoard()}</tbody>
      </table>

      {boats?.map((boardBoat: BoardBoat, index: number) => {
        const style: CSSProperties = {
          left: `${(boardBoat.x * 100) / dimensions}%`,
          top: `${(boardBoat.y * 100) / dimensions}%`,
          transformOrigin: `${100 / boardBoat.widthCell / 2}% ${100 / boardBoat.lengthCell / 2}%`,
        };

        return (
          <Boat
            direction={boardBoat.direction}
            height={boardBoat.lengthCell * (height / dimensions)}
            index={index}
            key={index}
            name={boardBoat.name}
            onRotation={onBoatRotation}
            src={boardBoat.src}
            style={style}
            width={boardBoat.widthCell * (width / dimensions)}
          />
        );
      })}
    </div>
  );
};

export default Board;
