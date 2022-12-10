import type { BoardBoat, Position } from '@shared/Board/models';

/**
 * Check if the boats position is correct in the board.
 *
 * @param {BoardBoat[]} boats Boats in the board
 * @return {boolean}
 */
export const checkBoardBoatsPosition = (boats: BoardBoat[]): boolean => {
  // TODO: check also the limit board dimensions

  const takenCells = [] as Position[];

  for (let index = 0; index < boats.length; index++) {
    const boat: BoardBoat = boats[index];

    const newWidth = boat.direction === 'vertical' ? boat.widthCell : boat.lengthCell;
    const newLength = boat.direction === 'vertical' ? boat.lengthCell : boat.widthCell;

    for (let x = boat.x; x < boat.x + newWidth; x++) {
      for (let y = boat.y; y < boat.y + newLength; y++) {
        const takenCell = takenCells.find(
          (takenCell: Position) => takenCell.x === x && takenCell.y === y,
        );

        if (takenCell) return false;

        takenCells.push({ x, y });
      }
    }
  }

  return true;
};
