export type IconName = 'People';

export type IconSize = 'small' | 'medium' | 'large' | 'extra-large';

export interface IconProps extends IconSvgProps {
  className?: string;
  name: IconName;
  size?: IconSize;
}

export interface IconSvgProps {
  borderColor?: string;
  color?: string;
}
