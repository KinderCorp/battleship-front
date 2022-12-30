import ArrayHelpers from '@helpers/ArrayHelpers';
import { parsePositions } from '@game/helpers';
import type { Weapon } from '@weapon/models';

/**
 * Parse a weapon.
 *
 * @param {any} weapon Weapon
 * @return {Weapon}
 */
export const parseWeapon = (weapon: any): Weapon => ({
  damageArea: parsePositions(weapon?.damageArea),
  id: weapon?.id || '',
  maxAmmunition: weapon?.maxAmmunition ?? 0,
  name: weapon?.name || '',
});

/**
 * Parse weapons.
 *
 * @param {any} weapons Weapons
 * @return {Weapon[]}
 */
export const parseWeapons = (weapons: any): Weapon[] =>
  ArrayHelpers.isArray(weapons) ? weapons.map((weapon: any) => parseWeapon(weapon)) : [];
