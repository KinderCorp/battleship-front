import classNames from 'clsx';
import { useMemo } from 'react';

import type { ModalProps } from '@shared/Modal/models';

/**
 * Modal component.
 *
 * @param {ModalProps} props Props
 * @return {JSX.Element}
 */
const Modal = ({
  // children = null,
  className = '',
  isVisible,
  // onClose,
  // title,
  position = 'centered',
}: ModalProps): JSX.Element => {
  // const handleClose = useCallback((): void => {
  //   onClose();
  // }, [onClose]);

  const modalClassName = useMemo(
    (): string => classNames('modal', position, className, { 'is-visible': !!isVisible }),
    [className, isVisible, position],
  );

  return <div className={modalClassName}></div>;
};

export default Modal;
