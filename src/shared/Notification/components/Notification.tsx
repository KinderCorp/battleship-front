import classNames from 'clsx';
import { useMemo } from 'react';

import type { NotificationProps } from '@shared/Notification/models';


/**
 * Notification component.
 * 
 * @param {NotificationProps} props Props
 * @return {JSX.Element}
 */
const Notification = ({
  className = '',
}: NotificationProps): JSX.Element => {
    const NotificationClassName = useMemo(
      (): string => classNames(className),
      [className],
    );

  return(
    <div className={NotificationClassName}></div>
  )
}

export default Notification;