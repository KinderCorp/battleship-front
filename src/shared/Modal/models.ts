import type { ReactNode } from 'react';

export type ModalPosition = 'centered' | 'rightSide';

export interface ModalProps {
  children: ReactNode;
  className?: string;
  headerNode?: ReactNode;
  isVisible: boolean;
  position?: ModalPosition;
  title: string;
  onClose: () => void;
}
