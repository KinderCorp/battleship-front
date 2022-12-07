import type { SyntheticEvent } from "react";

import type { ImageProps } from "@shared/Image/models";

export interface ItemProps {
  className?: string;
  isLocked?: boolean;
  isSelected?: boolean,
  name: string;
  numberOfUses?: number, // set to -1 to have unlimited uses
  src : ImageProps['src'],
  onClick: (event: SyntheticEvent<EventTarget>) => void;
}
