import type { ImageProps } from '@shared/Image/models';
import type { Position } from '@shared/Board/models';

export interface Weapon {
  damageArea: Position[];
  id: number;
  maxAmmunition: number;
  name: string;
  src: ImageProps['src'];
}

export interface WeaponItem {
  ammunition?: number;
  isLocked?: boolean;
  isSelected?: boolean;
  weapon: Weapon;
}

export interface WeaponItemProps extends WeaponItem {
  className?: string;
  onClick: (weapon: Weapon) => void;
}

export interface WeaponListProps extends Pick<WeaponItemProps, 'onClick'> {
  className?: string;
  isDisabled?: boolean;
  weaponItems: WeaponItem[];
}
