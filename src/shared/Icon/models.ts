export type IconName = 'Add' | 'ArrowLeft' | 'Boat' | 'Check' | 'Close' | 'People';

export type IconSize = 'small' | 'medium' | 'large' | 'extra-large';

export interface IconProps extends Partial<IconSvgProps> {
  className?: string;
  name: IconName;
  size?: IconSize;
}

export interface IconSvgProps {
  borderColor: string;
  color: string;
}
