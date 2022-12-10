import type { BoardBoat, Position } from '@shared/Board/models';

/**
 * Check if the boats position is correct in the board.
 *
 * @param {BoardBoat[]} boats Boats in the board
 * @param {number} dimensions Board dimensions
 * @return {boolean}
 */
export const checkBoardBoatsPosition = (boats: BoardBoat[], dimensions: number): boolean => {
  const takenCells = [] as Position[];

  for (const boat of boats) {
    const newWidth = boat.direction === 'vertical' ? boat.widthCell : boat.lengthCell;
    const newLength = boat.direction === 'vertical' ? boat.lengthCell : boat.widthCell;

    for (let x = boat.x; x < boat.x + newWidth; x++) {
      for (let y = boat.y; y < boat.y + newLength; y++) {
        const takenCell = takenCells.find(
          (takenCell: Position) => takenCell.x === x && takenCell.y === y,
        );

        if (takenCell || !checkCellPositionInTheBoard(x, y, dimensions)) return false;

        takenCells.push({ x, y });
      }
    }
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
