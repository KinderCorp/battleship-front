import { useCallback, useMemo } from 'react';
import classNames from 'clsx';

import type { BehindOverlayProps } from '@shared/Modal/models';

/**
 * BehindOverlay component.
 *
 * @param {BehindOverlayProps} props Props
 * @return {JSX.Element}
 */
const BehindOverlay = ({ className = '', isVisible, onClose }: BehindOverlayProps): JSX.Element => {
  const handleClose = useCallback((): void => {
    onClose();
  }, [onClose]);

  const behindOverlayClassName = useMemo(
    (): string => classNames('behind-overlay', className, { 'is-visible': !!isVisible }),
    [className, isVisible],
  );

  return <div className={behindOverlayClassName} onClick={handleClose} />;
};

export default BehindOverlay;
