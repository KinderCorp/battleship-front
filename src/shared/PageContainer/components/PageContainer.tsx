import classNames from 'clsx';
import { useMemo } from 'react';

import Button from '@shared/Button/components/Button';
import Header from '@shared/Header/components/Header';
import type { PageContainerProps } from '@shared/PageContainer/models';
import useTranslation from '@hooks/useTranslation';

/**
 * PageContainer component.
 *
 * @param {PageContainerProps} props Props
 * @return {JSX.Element}
 */
const PageContainer = ({ children, className = '', header }: PageContainerProps): JSX.Element => {
  const { translate } = useTranslation();

  const pageContainerClassName = useMemo(
    (): string => classNames('page-container', className),
    [className],
  );

  return (
    <div className={pageContainerClassName}>
      {!!header && (
        <Header
          className="page-container-header"
          content={header.content}
          height="medium"
          leftSideNode={
            <Button iconName="ArrowLeft" onClick={header.onLeave} size="large" style="secondary">
              {translate('leave')}
            </Button>
          }
          title={header.title}
        />
      )}

      <div className="page-container-content">{children}</div>
    </div>
  );
};

export default PageContainer;
