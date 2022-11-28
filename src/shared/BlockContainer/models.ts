import type { ReactNode } from 'react';

import type { TitleProps } from '@shared/Title/models';

export interface BlockContainerProps {
  children: ReactNode;
  className?: string;
  iconName?: TitleProps['iconName'];
  title?: TitleProps['title'];
}
