import type { ImageProps } from "@shared/Image/models";

export interface ItemProps {
  className?: string;
  isLocked?: boolean;
  isSelected?: boolean,
  name: string;
  numberOfUses?: number, // set to -1 to have unlimited uses
  src : ImageProps['src'],
  onClick: (name: Item['name']) => void;
}

export interface Item {
  name: string;
}