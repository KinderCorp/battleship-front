import type { ApiWeapon, ApiWeaponResponse } from '@api/models';
import ArrayHelpers from '@helpers/ArrayHelpers';
import { parsePositions } from '@game/helpers';
import type { Weapon } from '@weapon/models';

/**
 * Parse weapons.
 *
 * @param {ApiWeaponResponse[]} weapons Weapons
 * @return {Weapon[]}
 */
export const parseWeapons = (weapons: ApiWeaponResponse[]): Weapon[] =>
  ArrayHelpers.isArray(weapons)
    ? weapons.map((weapon: Partial<ApiWeapon>) => parseWeapon(weapon))
    : [];

/**
 * Parse a weapon.
 *
 * @param {ApiWeaponResponse} weapon Weapon
 * @return {Weapon}
 */
export const parseWeapon = (weapon: ApiWeaponResponse): Weapon => ({
  damageArea: parsePositions(weapon?.damageArea || []),
  id: weapon?.id || 0,
  maxAmmunition: weapon?.maxAmmunition ?? 0,
  name: weapon?.name || '',
  src: weapon?.src || '',
});
