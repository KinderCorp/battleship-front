import type { ApiGetWeaponResponse, ApiWeapon } from '@api/models';
import ArrayHelpers from '@helpers/ArrayHelpers';
import { parsePositions } from '@game/helpers';
import type { Weapon } from '@weapon/models';

/**
 * Parse weapons.
 *
 * @param {ApiGetWeaponResponse[]} weapons Weapons
 * @return {Weapon[]}
 */
export const parseWeapons = (weapons: ApiGetWeaponResponse[]): Weapon[] =>
  ArrayHelpers.isArray(weapons)
    ? weapons.map((weapon: Partial<ApiWeapon>) => parseWeapon(weapon))
    : [];

/**
 * Parse a weapon.
 *
 * @param {ApiGetWeaponResponse} weapon Weapon
 * @return {Weapon}
 */
export const parseWeapon = (weapon: ApiGetWeaponResponse): Weapon => ({
  damageArea: parsePositions(weapon?.damageArea),
  id: weapon?.id || 0,
  maxAmmunition: weapon?.maxAmmunition ?? 0,
  name: weapon?.name || '',
  src: weapon?.src || '',
});
