import type { ReactNode, SyntheticEvent } from 'react';
import type { IconName } from '@shared/Icon/models';

export type ButtonType = 'button' | 'submit';

export type ButtonStyle = 'disabled' | 'primary' | 'secondary';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  iconName?: IconName | null;
  isDisabled?: boolean;
  isLoading?: boolean;
  style?: ButtonStyle;
  type?: ButtonType;
  onClick: (event: SyntheticEvent<EventTarget>) => void;
}
