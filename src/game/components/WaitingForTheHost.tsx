import classNames from 'clsx';
import { useMemo } from 'react';

import { COLORS } from '@core/constants';
import Icon from '@shared/Icon/components/Icon';
import useTranslation from '@hooks/useTranslation';
import type { WaitingForTheHostProps } from '@game/models';

/**
 * WaitingForTheHost component.
 *
 * @param {WaitingForTheHostProps} props Props
 * @return {JSX.Element}
 */
const WaitingForTheHost = ({ className }: WaitingForTheHostProps): JSX.Element => {
  const { translate } = useTranslation();

  const waitingForTheHostClassName = useMemo(
    (): string => classNames('waiting-for-the-host', className),
    [className],
  );

  return (
    <div className={waitingForTheHostClassName}>
      <Icon name="Loader" borderColor={COLORS.WHITE} />
      <p className="waiting-for-the-host-text">{translate('waiting-for-host')}</p>
    </div>
  );
};

export default WaitingForTheHost;
