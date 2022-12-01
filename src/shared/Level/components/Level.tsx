import classNames from 'clsx';
import { useMemo } from 'react';

import Image from '@shared/Image/components/Image';
import type { ImageProps } from '@shared/Image/models';
import type { LevelProps } from '@shared/Level/models';
import useTranslation from '@hooks/useTranslation';

const propsImage: Pick<ImageProps, 'className' | 'objectFit' | 'sizes'> = {
  className: 'badge',
  objectFit: 'contain',
  sizes: {
    default: '40px',
  },
};

/**
 * Level component.
 *
 * @param {LevelProps} props Props
 * @return {JSX.Element}
 */
const Level = ({
  badgeSrc = '',
  className = '',
  currentXp = 0,
  priority,
  rank = 1,
  showProgressBar = false,
  size = 'medium',
  title = '',
  totalXp = 0,
}: LevelProps): JSX.Element => {
  const { translate } = useTranslation();

  const levelClassName = useMemo(
    (): string => classNames('level', size, className),
    [className, size],
  );

  // DELETE: remove useless logic to secure the both variables
  const newTotalXp = useMemo(() => Math.abs(Math.round(totalXp)), [totalXp]);
  let newCurrentXp = useMemo(() => Math.abs(Math.round(currentXp)), [currentXp]);
  newCurrentXp = useMemo(
    (): number => (newCurrentXp >= newTotalXp ? newTotalXp : newCurrentXp),
    [newCurrentXp, newTotalXp],
  );

  const progressValue = useMemo(
    (): string => `${newCurrentXp}/${newTotalXp}`,
    [newCurrentXp, newTotalXp],
  );
  const progressWidth = useMemo(
    (): string => (newTotalXp ? `${(newCurrentXp * 100) / newTotalXp}%` : '0%'),
    [newCurrentXp, newTotalXp],
  );

  return (
    <div className={levelClassName} data-testid="level">
      {badgeSrc ? (
        <Image
          {...propsImage}
          alt={translate('badge.level', { number: rank.toString() })}
          priority={priority}
          src={badgeSrc}
        />
      ) : (
        <Image
          {...propsImage}
          alt={translate('badge.level.unknown')}
          priority={priority}
          src="/images/badges/badge-none.png"
        />
      )}

      {!!showProgressBar && (
        <div className="progress-bar">
          {title && <p className="progress-bar-title">{title}</p>}
          {progressValue && <p className="progress-bar-value">{progressValue}</p>}
          <span className="progress-bar-background" style={{ width: progressWidth }} />
        </div>
      )}
    </div>
  );
};

export default Level;
