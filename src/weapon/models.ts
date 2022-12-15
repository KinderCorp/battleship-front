import type { Position } from '@shared/Board/models';

export interface Weapon {
  id: number;
  name: string;
  maxAmmunition: number;
  damageArea: Position[];
}
