import type { ReactNode } from 'react';

import type { ButtonProps } from '@shared/Button/models';
import type { HeaderProps } from '@shared/Header/models';

interface PageContainerHeaderProps extends Pick<HeaderProps, 'content' | 'title'> {
  onLeave: ButtonProps['onClick'];
}

export interface PageContainerProps {
  children: ReactNode;
  className?: string;
  header?: PageContainerHeaderProps;
}
