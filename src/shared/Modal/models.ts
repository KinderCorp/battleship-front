import type { ReactNode } from 'react';

export type ModalPosition = 'centered';

export interface ModalProps {
  children: ReactNode;
  className?: string;
  isVisible: boolean;
  position?: ModalPosition;
  title: string;
  onClose: () => void;
}
