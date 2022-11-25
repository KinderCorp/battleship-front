import type { SyntheticEvent } from 'react';

import type { ImageProps } from '@shared/Image/models';
import type { LevelProps } from '@shared/Level/models';

export type UserCardDirection = 'left' | 'right';

export type UserCardSize = 'large' | 'small';

// TODO: replace some props by User props when is defined
export interface UserCardProps extends Pick<LevelProps, 'badgeSrc' | 'rank'> {
  className?: string;
  direction?: UserCardDirection;
  isEditing?: boolean;
  isLoading?: boolean;
  name?: string;
  skinSrc: ImageProps['src'];
  size?: UserCardSize;
  onClick: (event: SyntheticEvent<EventTarget>) => void;
}
