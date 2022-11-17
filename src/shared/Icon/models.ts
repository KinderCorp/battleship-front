export type IconName =
  | 'Add'
  | 'ArrowLeft'
  | 'Boat'
  | 'Check'
  | 'Close'
  | 'Copy'
  | 'Dice'
  | 'Eye'
  | 'EyeHide'
  | 'GearWheel'
  | 'Infinity'
  | 'Lock'
  | 'Logout'
  | 'Pen'
  | 'People'
  | 'Reload'
  | 'Remove'
  | 'Share'
  | 'Target';

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
