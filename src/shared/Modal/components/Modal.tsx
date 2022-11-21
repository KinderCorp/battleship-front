import { useCallback, useMemo } from 'react';
import classNames from 'clsx';

import Button from '@shared/Button/components/Button';
import Header from '@shared/Header/components/Header';
import type { ModalProps } from '@shared/Modal/models';

/**
 * Modal component.
 *
 * @param {ModalProps} props Props
 * @return {JSX.Element}
 */
const Modal = ({
  children = null,
  className = '',
  headerNode = null,
  isVisible,
  onClose,
  position = 'centered',
  title,
}: ModalProps): JSX.Element => {
  const handleClose = useCallback((): void => {
    onClose();
  }, [onClose]);

  const modalClassName = useMemo(
    (): string => classNames('modal', position, className, { 'is-visible': !!isVisible }),
    [className, isVisible, position],
  );

  const ButtonClose = useMemo(
    () => <Button iconName="Close" onClick={handleClose} />,
    [handleClose],
  );

  return (
    <div className={modalClassName}>
      <Header
        className="modal-header"
        title={title}
        leftSideNode={position === 'rightSide' && ButtonClose}
        rightSideNode={position === 'centered' ? ButtonClose : headerNode}
      />
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
