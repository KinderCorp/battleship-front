import type { IconProps } from '@shared/Icon/models';

export type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'none';

export interface TitleProps {
  className?: string;
  icon?: Omit<IconProps, 'className'>;
  subTitle?: string;
  title: string;
  type?: TitleType;
}

export interface TitleIndicationProps extends Pick<TitleProps, 'title'> {
  className?: string;
  iconName: IconProps['name'];
}
