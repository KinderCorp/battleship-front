import type { ImageProps } from '@shared/Image/models';
import type { Position } from '@shared/Board/models';

export interface Weapon {
  damageArea: Position[];
  id: number;
  maxAmmunition: number;
  name: string;
}

export interface ItemProps {
  className?: string;
  isLocked?: boolean;
  isSelected?: boolean;
  name: string;
  numberOfUses?: number; // set to -1 to have unlimited uses
  src: ImageProps['src'];
  onClick: (name: Weapon['name']) => void;
}
