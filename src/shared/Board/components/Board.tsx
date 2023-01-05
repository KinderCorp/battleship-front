import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'clsx';
import type { CSSProperties } from 'react';

import type { BoardBoat, BoardCellAffected, BoardProps } from '@shared/Board/models';
import BoardCell from '@shared/Board/components/BoardCell';
import BoardRow from '@shared/Board/components/BoardRow';
import Boat from '@boat/components/Boat';
import { checkBoardBoatsPosition } from '@shared/Board/helpers';
import { getNextBoatDirection } from '@boat/helpers';
import ObjectHelpers from '@helpers/ObjectHelpers';

/**
 * Board component.
 *
 * @param {BoardProps} props Props
 * @return {JSX.Element}
 */
export const Board = ({
  boats = [],
  cellsAffected,
  className = '',
  dimensions,
  hasBoatsSafetyZone = false,
  isDisabled = false,
  isPlacementActive = false,
  isShootActive = false,
  onClick,
  setBoats,
}: BoardProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(ref.current?.offsetWidth || 0);
    setHeight(ref.current?.offsetHeight || 0);
  }, [ref]);

  const onBoatRotation = useCallback(
    (index: number): boolean => {
      if (isPlacementActive) {
        const newBoats = ObjectHelpers.deepClone(boats);
        const boat = newBoats[index];

        if (boat) {
          boat.direction = getNextBoatDirection(boat.direction);
          newBoats[index] = boat;

          // FIXME: check only the specific boat and not all boats
          if (!checkBoardBoatsPosition(newBoats, dimensions, hasBoatsSafetyZone)) {
            return false;
          }

          setBoats?.(newBoats);
        }
      }

      return true;
    },
    [boats, dimensions, isPlacementActive, hasBoatsSafetyZone, setBoats],
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
            isDisabled={isDisabled}
            isShootActive={isShootActive}
            key={`cell-${col}-${row}`}
            onClick={onClick}
            state={cellAffected?.state}
            x={col}
            y={row}
          />,
        );
      }

      board.unshift(<BoardRow key={`line-${row}`}>{cells}</BoardRow>);
    }

    return board;
  }, [cellsAffected, dimensions, isDisabled, isShootActive, onClick]);

  return (
    <div className={boardClassName} data-testid="board" ref={ref}>
      <table className="board-table">
        <tbody className="board-body">{createBoard()}</tbody>
      </table>

      {boats?.map((boardBoat: BoardBoat, index: number) => {
        const style: CSSProperties = {
          left: `${(boardBoat.x * 100) / dimensions}%`,
          top: `${((dimensions - boardBoat.y - 1) * 100) / dimensions}%`,
          transformOrigin: `${100 / boardBoat.widthCell / 2}% ${100 / boardBoat.lengthCell / 2}%`,
        };

        return (
          <Boat
            direction={boardBoat.direction}
            height={boardBoat.lengthCell * (height / dimensions)}
            index={index}
            isPlacementActive={isPlacementActive}
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
