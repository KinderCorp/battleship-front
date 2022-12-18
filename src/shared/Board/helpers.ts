import type { BoardBoat, Position } from '@shared/Board/models';
import { hasXAxisReversed, hasYAxisReversed, isBoatHorizontal } from '@boat/helpers';

// TASK: placement of the boats in the table such as [[x, y], [x', y']], top left corner and lower right corner
/**
 * Check if the boats position is correct in the board.
 *
 * @param {BoardBoat[]} boats Boats in the board
 * @param {number} dimensions Board dimensions
 * @param {boolean} hasBoatsSafetyZone Safety zone around the boats
 * @return {boolean}
 */
export const checkBoardBoatsPosition = (
  boats: BoardBoat[],
  dimensions: number,
  hasBoatsSafetyZone: boolean,
): boolean => {
  const takenCells = [] as Position[];

  for (const boat of boats) {
    const width = isBoatHorizontal(boat.direction) ? boat.lengthCell : boat.widthCell;
    const height = isBoatHorizontal(boat.direction) ? boat.widthCell : boat.lengthCell;
    const xAxisReversed = hasXAxisReversed(boat.direction);
    const yAxisReversed = hasYAxisReversed(boat.direction);

    for (
      let x = boat.x;
      xAxisReversed ? x > boat.x - width : x < boat.x + width;
      xAxisReversed ? x-- : x++
    ) {
      for (
        let y = boat.y;
        yAxisReversed ? y > boat.y - height : y < boat.y + height;
        yAxisReversed ? y-- : y++
      ) {
        const takenCell = takenCells.find(
          (takenCell: Position) => takenCell.x === x && takenCell.y === y,
        );

        if (takenCell || !checkCellPositionInTheBoard(x, y, dimensions)) {
          return false;
        }

        takenCells.push({ x, y });
      }
    }

    // TODO: here check safety zone
    // eslint-disable-next-line no-console
    console.log(hasBoatsSafetyZone);
  }

  return true;
};

/**
 * Check if a cell is in the board.
 *
 * @param {number} x Position for x axis
 * @param {number} y Position for y axis
 * @param {number} dimensions Board dimensions
 * @return {boolean}
 */
export const checkCellPositionInTheBoard = (x: number, y: number, dimensions: number): boolean => {
  return x >= 0 && x < dimensions && y >= 0 && y < dimensions;
};
