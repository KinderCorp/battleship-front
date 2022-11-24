import type { ReactNode } from 'react';

export type ModalPosition = 'centered' | 'right-side';

export interface ModalProps {
  children: ReactNode;
  className?: string;
  headerNode?: ReactNode;
  isVisible: boolean;
  position?: ModalPosition;
  title: string;
  onClose: () => void;
}

export interface BehindOverlayProps {
  className?: string;
  isVisible: boolean;
  onClose: () => void;
}
