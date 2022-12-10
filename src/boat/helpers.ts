import type { BoardBoat, Position } from '@shared/Board/models';
import ArrayHelpers from '@helpers/ArrayHelpers';
import type { Boat } from '@boat/models';
import type { BoatDirection } from '@shared/Boat/models';
import { checkBoardBoatsPosition } from '@shared/Board/helpers';
import NumberHelpers from '@helpers/NumberHelpers';

/**
 * Place random boat in the board.
 *
 * @param {BoardBoat[]} boatsAlreadyPlaced Boats already placed
 * @param {Boat} boat Boat to place in the board
 * @param {number} dimensions Board dimensions
 * @return {BoardBoat}
 */
export const placeRandomBoatInTheBoard = (
  boatsAlreadyPlaced: BoardBoat[],
  boat: Boat,
  dimensions: number,
): BoardBoat => {
  const randomDirection: BoatDirection = ArrayHelpers.getRandomItem(['horizontal', 'vertical']);
  const randomPosition: Position = {
    x: NumberHelpers.randomNumber(0, dimensions),
    y: NumberHelpers.randomNumber(0, dimensions),
  };

  const boardBoat: BoardBoat = {
    ...boat,
    ...randomPosition,
    direction: randomDirection,
  };

  if (!checkBoardBoatsPosition([...boatsAlreadyPlaced, boardBoat], dimensions)) {
    return placeRandomBoatInTheBoard(boatsAlreadyPlaced, boat, dimensions);
  }

  return boardBoat;
};

/**
 * Place random boats in the board.
 *
 * @param {Boat[]} boats Boats to place in the board
 * @param {number} dimensions Board dimensions
 * @return {BoardBoat[]}
 */
export const placeRandomBoatsInTheBoard = (boats: Boat[], dimensions: number): BoardBoat[] => {
  const boardBoats = [] as BoardBoat[];

  for (const boat of boats) {
    boardBoats.push(placeRandomBoatInTheBoard(boardBoats, boat, dimensions));
  }

  return boardBoats;
};
