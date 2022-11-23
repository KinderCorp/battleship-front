export type LevelSize = 'small' | 'medium' | 'large';

export type LevelRank = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface LevelProps {
  className?: string;
  currentXp?: number;
  rank?: LevelRank;
  showProgressBar?: boolean;
  size?: LevelSize;
  title?: string;
  totalXp?: number;
}
