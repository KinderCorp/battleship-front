import classNames from 'clsx';
import { useMemo } from 'react';

import Button from '@shared/Button/components/Button';
import { COLORS } from '@core/constants';
import Icon from '@shared/Icon/components/Icon';
import Image from '@shared/Image/components/Image';
import Level from '@shared/Level/components/Level';
import type { UserCardProps } from '@shared/UserCard/models';
import useTranslation from '@hooks/useTranslation';

/**
 * UserCard component.
 *
 * @param {UserCardProps} props Props
 * @return {JSX.Element}
 */
export const UserCard = ({
  badgeSrc,
  characterSrc,
  className = '',
  direction = 'right',
  isLoading = false,
  name = '',
  onClick,
  rank,
  showLevel = true,
  size = 'large',
}: UserCardProps): JSX.Element => {
  const { translate } = useTranslation();

  const userCardClassName = useMemo(
    (): string =>
      classNames(
        'user-card',
        `user-card--size-${size}`,
        `user-card--direction-${direction}`,
        className,
      ),
    [className, direction, size],
  );

  const levelSize = useMemo(() => (size === 'large' ? 'medium' : 'small'), [size]);

  return (
    <div className={userCardClassName} data-testid="user-card">
      <div className="user-card-content">
        {isLoading ? (
          <Icon className="user-card-loader" name="Loader" borderColor={COLORS.WHITE} />
        ) : (
          <>
            {!!showLevel && (
              <Level badgeSrc={badgeSrc} className="user-card-level" rank={rank} size={levelSize} />
            )}

            <div className="user-card-character">
              <Image
                alt={translate('skin', { name: 'Sam' })}
                objectFit="contain"
                src={characterSrc}
              />
            </div>
          </>
        )}
      </div>

      {!!name && (
        <div className="user-card-info">
          <p className="user-card-name">{!isLoading ? name : translate('waiting')}</p>
          {!!onClick && <Button iconName="Pen" onClick={onClick} size="small" style="none" />}
        </div>
      )}
    </div>
  );
};

export default UserCard;
