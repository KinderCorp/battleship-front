import type { ImageProps } from '@shared/Image/models';

export type LevelSize = 'small' | 'medium' | 'large';

export type LevelRank = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface LevelProps {
  className?: string;
  badgeSrc?: ImageProps['src'];
  currentXp?: number;
  rank?: LevelRank;
  showProgressBar?: boolean;
  size?: LevelSize;
  title?: string;
  totalXp?: number;
}
