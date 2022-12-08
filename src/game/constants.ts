import type { GameSettings } from '@game/models';
import type { Weapon } from '@weapon/models';

export const GAME_NAME = 'GAME';

export const GAME_SETTINGS: GameSettings = {
  boardDimensions: 10,
  hasBoatsSafetyZone: false,
  timePerTurn: 60,
  weapons: [] as Weapon['name'][],
};
