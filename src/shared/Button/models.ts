import type { ReactNode, SyntheticEvent } from 'react';
import type { IconName } from '@shared/Icon/models';

export type ButtonType = 'button' | 'submit';

export type ButtonSize = 'large' | 'medium' | 'small';

export type ButtonStyle = 'none' | 'primary' | 'secondary';

export type ButtonIconStyle = ButtonStyle | 'disabled';

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  iconName?: IconName | null;
  isDisabled?: boolean;
  isLoading?: boolean;
  size?: ButtonSize;
  style?: ButtonStyle;
  type?: ButtonType;
  onClick: (event: SyntheticEvent<EventTarget>) => void;
}
