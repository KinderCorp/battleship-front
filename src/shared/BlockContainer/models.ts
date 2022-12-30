import type { ReactNode } from 'react';

import type { IconProps } from '@shared/Icon/models';
import type { TitleProps } from '@shared/Title/models';

export interface BlockContainerProps {
  children: ReactNode;
  className?: string;
  iconName?: IconProps['name'];
  title?: TitleProps['title'];
}
