import type { AuthorizedBoat, Boat } from '@boat/models';
import type { BoardBoat, Position } from '@shared/Board/models';
import ArrayHelpers from '@helpers/ArrayHelpers';
import type { BoatDirection } from '@boat/models';
import { checkBoardBoatsPosition } from '@shared/Board/helpers';
import NumberHelpers from '@helpers/NumberHelpers';

/**
 * Place random boat in the board.
 *
 * @param {BoardBoat[]} boatsAlreadyPlaced Boats already placed
 * @param {Boat} boat Boat to place in the board
 * @param {number} dimensions Board dimensions
 * @param {boolean} hasBoatsSafetyZone Safety zone around the boats
 * @return {BoardBoat}
 */
export const placeRandomBoatInTheBoard = (
  boatsAlreadyPlaced: BoardBoat[],
  boat: Boat,
  dimensions: number,
  hasBoatsSafetyZone: boolean,
): BoardBoat => {
  const randomDirection: BoatDirection = ArrayHelpers.getRandomItem([
    'east',
    'north',
    'south',
    'west',
  ]);
  const randomPosition: Position = {
    x: NumberHelpers.randomNumber(0, dimensions),
    y: NumberHelpers.randomNumber(0, dimensions),
  };

  const boardBoat: BoardBoat = {
    ...boat,
    ...randomPosition,
    direction: randomDirection,
  };

  if (
    !checkBoardBoatsPosition([...boatsAlreadyPlaced, boardBoat], dimensions, hasBoatsSafetyZone)
  ) {
    return placeRandomBoatInTheBoard(boatsAlreadyPlaced, boat, dimensions, hasBoatsSafetyZone);
  }

  return boardBoat;
};

/**
 * Place random boats in the board.
 *
 * @param {Boat[]} boats Boats to place in the board
 * @param {number} dimensions Board dimensions
 * @param {boolean} hasBoatsSafetyZone Safety zone around the boats
 * @return {BoardBoat[]}
 */
export const placeRandomBoatsInTheBoard = (
  boats: Boat[],
  dimensions: number,
  hasBoatsSafetyZone: boolean,
): BoardBoat[] => {
  const boardBoats = [] as BoardBoat[];

  // FIXME: check is it possible to place all boats, otherwise infinite loop
  for (const boat of boats) {
    boardBoats.push(placeRandomBoatInTheBoard(boardBoats, boat, dimensions, hasBoatsSafetyZone));
  }

  return boardBoats;
};

/**
 * Get the next direction of the boat.
 *
 * @param {BoatDirection} direction Current boat direction
 * @return {BoatDirection}
 */
export const getNextBoatDirection = (direction?: BoatDirection): BoatDirection => {
  if (direction === 'north') return 'east';
  else if (direction === 'east') return 'south';
  else if (direction === 'south') return 'west';
  else return 'north';
};

/**
 * Check if boat is horizontal.
 *
 * @param {BoatDirection} direction Boat direction
 * @return {boolean}
 */
export const isBoatHorizontal = (direction?: BoatDirection): boolean => {
  return direction === 'west' || direction === 'east';
};

// FIXME: rename length/width API properties to lengthCell/widthCell
/**
 * Parse a boat.
 *
 * @param {any} boat Boat
 * @return {Boat}
 */
export const parseBoat = (boat: any): Boat => ({
  lengthCell: NumberHelpers.parseInt(boat?.['length'] || boat?.lengthCell) || 1,
  name: boat?.name || '',
  src: boat?.src || '',
  widthCell: NumberHelpers.parseInt(boat?.width || boat?.widthCell) || 1,
});

/**
 * Parse boats.
 *
 * @param {any} boats Boats
 * @return {Boat[]}
 */
export const parseBoats = (boats: any): Boat[] =>
  ArrayHelpers.isArray(boats) ? boats.map((boat: any) => parseBoat(boat)) : [];

/**
 * Parse authorized boat.
 *
 * @param {any} authorizedBoat Authorized boat
 * @return {AuthorizedBoat}
 */
export const parseAuthorizedBoat = (authorizedBoat: any): AuthorizedBoat => ({
  authorisedNumber: authorizedBoat?.authorisedNumber || 0,
  boat: parseBoat(authorizedBoat?.boat),
});

/**
 * Parse authorized fleet.
 *
 * @param {any} authorisedFleet Authorized fleet
 * @return {Boat[]}
 */
export const parseAuthorizedFleet = (authorisedFleet: any): Boat[] => {
  // FIXME: change this bad parsed
  const newAuthorisedFleet = ArrayHelpers.isArray(authorisedFleet) ? authorisedFleet : [];
  const boats = [] as Boat[];

  for (const authorisedFleetItem of newAuthorisedFleet) {
    const authorizedBoat = parseAuthorizedBoat(authorisedFleetItem);

    for (let index = 0; index < authorizedBoat.authorisedNumber; index++) {
      boats.push(authorizedBoat.boat);
    }
  }

  return ArrayHelpers.isEmpty(boats) ? parseBoats(newAuthorisedFleet) : boats;
};
