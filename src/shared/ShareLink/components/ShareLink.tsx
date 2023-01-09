import { useCallback, useMemo, useState } from 'react';
import classNames from 'clsx';

import Button from '@shared/Button/components/Button';
import type { ShareLinkProps } from '@shared/ShareLink/models';

/**
 * ShareLink component.
 *
 * @param {ShareLinkProps} props Props
 * @return {JSX.Element}
 */
const ShareLink = ({ className = '', value }: ShareLinkProps): JSX.Element => {
  const [clickedButton, setClickedButton] = useState<boolean>(false);

  /**
   * Copy link.
   *
   * @return {void}
   */
  const handleCopy = useCallback((): void => {
    navigator.clipboard.writeText(value);
    setClickedButton(true);
    setTimeout(() => setClickedButton(false), 1000);
  }, [value]);

  const shareLinkClassName = useMemo(
    (): string => classNames('share-link', className),
    [className],
  );

  return (
    <div className={shareLinkClassName} data-testid="share-link">
      <p className="share-link-value">{value}</p>
      <Button
        className="share-link-button"
        iconName={clickedButton ? 'Check' : 'Copy'}
        isDisabled={clickedButton}
        onClick={handleCopy}
        size="large"
        style="secondary"
      />
    </div>
  );
};

export default ShareLink;
