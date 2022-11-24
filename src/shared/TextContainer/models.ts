import type { ReactNode } from 'react';

export type TextContainerHeight = 'medium' | 'small';

export interface TextContainerProps {
  children: ReactNode;
  className?: string;
  height?: TextContainerHeight;
}
