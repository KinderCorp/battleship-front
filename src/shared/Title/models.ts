import type { IconProps } from '@shared/Icon/models';

export type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'none';

export interface TitleProps {
  className?: string;
  iconBorderColor?: IconProps['borderColor'];
  iconColor?: IconProps['color'];
  iconName?: IconProps['name'];
  iconSize?: IconProps['size'];
  subTitle?: string;
  title: string;
  type?: TitleType;
}

export interface TitleIndicationProps extends Pick<TitleProps, 'iconName' | 'title'> {
  className?: string;
}
