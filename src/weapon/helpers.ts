import type { Weapon } from '@weapon/models';

/**
 * Parse a weapon.
 *
 * @param {any} weapon Weapon
 * @return {Weapon}
 */
export const parseWeapon = (weapon: any): Weapon => ({
  id: weapon?.id || '',
  maxAmmunition: weapon?.maxAmmunition || -1,
  name: weapon?.name || '',
});

/**
 * Parse weapons.
 *
 * @param {any} weapons Weapons
 * @return {Weapon[]}
 */
export const parseWeapons = (weapons: any): Weapon[] =>
  weapons?.map((weapon: any) => parseWeapon(weapon)) || [];
