import type { SyntheticEvent } from 'react';

import type { ImageProps } from '@shared/Image/models';
import type { LevelProps } from '@shared/Level/models';

export type UserCardDirection = 'left' | 'right';

export type UserCardSize = 'large' | 'small';

export interface UserCardProps
  extends Pick<LevelProps, 'badgeSrc' | 'rank'>,
    Pick<ImageProps, 'priority'> {
  characterName?: string;
  characterSrc?: ImageProps['src'];
  className?: string;
  direction?: UserCardDirection;
  hideLevel?: boolean;
  isLoading?: boolean;
  name?: string;
  size?: UserCardSize;
  onClick?: (event: SyntheticEvent<EventTarget>) => void;
}