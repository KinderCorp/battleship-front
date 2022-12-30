import type { GameRoomSettings, GameSettings } from '@game/models';

export const GAME_NAME = 'GAME';

export const GAME_COUNTER_BEFORE_START = 3; // in seconds

export const GAME_SETTINGS: GameSettings = {
  boardDimensions: 10,
  hasBoatsSafetyZone: false,
  timePerTurn: 60,
  weaponNames: [],
};

// FIXME: when the API call is complete to retrieve the weapons remove the 'weapons' property
export const GAME_ROOM_SETTINGS: GameRoomSettings = {
  ...GAME_SETTINGS,
  authorisedFleet: [],
  weapons: [],
};

export enum GameView {
  BOATS_PLACEMENT = 'boats_placement',
  PLAYING = 'playing',
  SETTINGS = 'settings',
}
