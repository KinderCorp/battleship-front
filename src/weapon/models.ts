import type { ImageProps } from '@shared/Image/models';
import type { Position } from '@shared/Board/models';

export interface Weapon {
  damageArea: Position[];
  id: number;
  maxAmmunition: number;
  name: string;
  src: ImageProps['src'];
}

export interface WeaponItemProps {
  className?: string;
  counter?: number;
  isLocked?: boolean;
  isSelected?: boolean;
  weapon: Weapon;
  onClick: (name: Weapon['name']) => void;
}

export interface WeaponListProps extends Pick<WeaponItemProps, 'onClick'> {
  className?: string;
  weaponItems: Omit<WeaponItemProps, 'className' | 'onClick'>[];
}
