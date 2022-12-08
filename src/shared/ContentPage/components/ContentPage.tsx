import classNames from 'clsx';
import { useMemo } from 'react';

import type { ContentPageProps } from '@shared/ContentPage/models';

/**
 * ContentPage component.
 *
 * @param {ContentPageProps} props Props
 * @return {JSX.Element}
 */
const ContentPage = ({ children, className = '' }: ContentPageProps): JSX.Element => {
  const contentPageClassName = useMemo(
    (): string => classNames('content-page', className),
    [className],
  );

  return <div className={contentPageClassName}>{children}</div>;
};

export default ContentPage;
