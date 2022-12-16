import type { ImageProps } from '@shared/Image/models';
import type { IntRange } from '@core/models';

export type LevelSize = 'small' | 'medium' | 'large';

export type LevelRank = IntRange<1, 10>;

export interface LevelProps extends Pick<ImageProps, 'priority'> {
  className?: string;
  badgeSrc?: ImageProps['src'];
  currentXp?: number;
  rank?: LevelRank;
  showProgressBar?: boolean;
  size?: LevelSize;
  title?: string;
  totalXp?: number;
}
