import type { GameExtendedSettings, GameSettings } from '@game/models';

export const GAME_NAME = 'GAME';

export const GAME_COUNTER_BEFORE_START = 3;

export const GAME_SETTINGS: GameSettings = {
  boardDimensions: 10,
  hasBoatsSafetyZone: false,
  timePerTurn: 60,
  weapons: [],
};

export const GAME_EXTENDED_SETTINGS: GameExtendedSettings = {
  ...GAME_SETTINGS,
  authorisedFleet: [],
  weapons: [],
};
