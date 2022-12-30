import type { ReactNode } from 'react';

export type HeaderHeight = 'medium' | 'small';

export interface HeaderProps {
  className?: string;
  content?: ReactNode;
  height?: HeaderHeight;
  leftSideNode?: ReactNode;
  rightSideNode?: ReactNode;
  title: string;
}
