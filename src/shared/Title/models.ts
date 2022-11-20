import type { IconName } from '@shared/Icon/models';

export type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'none';

export interface TitleProps {
  className?: string;
  iconName?: IconName | null;
  subTitle?: string;
  title: string;
  type?: TitleType;
}
