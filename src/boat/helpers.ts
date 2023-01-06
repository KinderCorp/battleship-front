import type { ApiBoardBoat, ApiBoatResponse, ApiPosition } from '@api/models';
import type { AuthorizedBoat, Boat } from '@boat/models';
import type { BoardBoat, Position } from '@shared/Board/models';
import { checkBoardBoatsPosition, parseBoardBoat } from '@shared/Board/helpers';
import ArrayHelpers from '@helpers/ArrayHelpers';
import { BoatDirection } from '@boat/constants';
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
  const randomDirection = ArrayHelpers.getRandomItem(Object.values(BoatDirection));
  const randomPosition: Position = {
    x: NumberHelpers.randomNumber(0, dimensions),
    y: NumberHelpers.randomNumber(0, dimensions),
  };

  const boardBoat = parseBoardBoat({
    ...boat,
    ...randomPosition,
    direction: randomDirection,
  });

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

  // FIXME: check if it is possible to place all boats, otherwise infinite loop
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
  switch (direction) {
    case BoatDirection.NORTH:
      return BoatDirection.EAST;
    case BoatDirection.EAST:
      return BoatDirection.SOUTH;
    case BoatDirection.SOUTH:
      return BoatDirection.WEST;
    default:
      return BoatDirection.NORTH;
  }
};

/**
 * Check if boat is horizontal.
 *
 * @param {BoatDirection} direction Boat direction
 * @return {boolean}
 */
export const isBoatHorizontal = (
  direction: BoatDirection,
): direction is BoatDirection.WEST | BoatDirection.EAST => {
  return direction === BoatDirection.WEST || direction === BoatDirection.EAST;
};

/**
 * Check if boat has x axis reversed.
 *
 * @param {BoatDirection} direction Boat direction
 * @return {boolean}
 */
export const hasXAxisReversed = (
  direction: BoatDirection,
): direction is BoatDirection.EAST | BoatDirection.SOUTH => {
  return direction === BoatDirection.EAST || direction === BoatDirection.SOUTH;
};

/**
 * Check if boat has y axis reversed.
 *
 * @param {BoatDirection} direction Boat direction
 * @return {boolean}
 */
export const hasYAxisReversed = (
  direction: BoatDirection,
): direction is BoatDirection.EAST | BoatDirection.NORTH => {
  return direction === BoatDirection.EAST || direction === BoatDirection.NORTH;
};

/**
 * Parse a boat.
 *
 * @param {ApiBoatResponse} boat Boat
 * @return {Boat}
 */
export const parseBoat = (boat: ApiBoatResponse): Boat => ({
  lengthCell: boat?.lengthCell || 1,
  name: boat?.name || '',
  src: boat?.src || '',
  widthCell: boat?.widthCell || 1,
});

/**
 * Parse boats.
 *
 * @param {ApiBoatResponse} boats Boats
 * @return {Boat[]}
 */
export const parseBoats = (boats: ApiBoatResponse[]): Boat[] =>
  ArrayHelpers.isArray(boats) ? boats.map((boat: ApiBoatResponse) => parseBoat(boat)) : [];

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
  const boats: Boat[] = [];

  for (const authorisedFleetItem of newAuthorisedFleet) {
    const authorizedBoat = parseAuthorizedBoat(authorisedFleetItem);

    for (let index = 0; index < authorizedBoat.authorisedNumber; index++) {
      boats.push(authorizedBoat.boat);
    }
  }

  return ArrayHelpers.isEmpty(boats) ? parseBoats(newAuthorisedFleet as ApiBoatResponse[]) : boats;
};

/**
 * Parse boat bow cells for API.
 *
 * @param {BoardBoat} boardBoat Board boat.
 * @return {ApiPosition[]}
 */
export const parseBoatBowCellsForApi = (boardBoat: BoardBoat): ApiPosition[] => {
  const bowCells: ApiPosition[] = [];

  for (let index = 0; index < boardBoat.widthCell; index++) {
    if (isBoatHorizontal(boardBoat.direction)) {
      if (hasYAxisReversed(boardBoat.direction)) {
        bowCells.push([boardBoat.x, boardBoat.y - index]);
      } else {
        bowCells.push([boardBoat.x, boardBoat.y + index]);
      }
    } else {
      if (hasXAxisReversed(boardBoat.direction)) {
        bowCells.push([boardBoat.x - index, boardBoat.y]);
      } else {
        bowCells.push([boardBoat.x + index, boardBoat.y]);
      }
    }
  }

  return bowCells;
};

/**
 * Parse game board boat for API.
 *
 * @param {BoardBoat} boardBoat Board boat.
 * @return {ApiBoardBoat}
 */
export const parseGameBoardBoatForApi = (boardBoat: BoardBoat): ApiBoardBoat => ({
  bowCells: parseBoatBowCellsForApi(boardBoat),
  direction: boardBoat.direction,
  name: boardBoat.name,
});

/**
 * Parse game board boats for API.
 *
 * @param {BoardBoat[]} boardBoats Board boats.
 * @return {ApiBoardBoat[]}
 */
export const parseGameBoardBoatsForApi = (boardBoats: BoardBoat[]): ApiBoardBoat[] =>
  ArrayHelpers.isArray(boardBoats)
    ? boardBoats.map((boardBoat: BoardBoat) => parseGameBoardBoatForApi(boardBoat))
    : [];
