import classNames from 'clsx';
import { useMemo } from 'react';

import Button from '@shared/Button/components/Button';
import { COLORS } from '@core/constants';
import Icon from '@shared/Icon/components/Icon';
import Image from '@shared/Image/components/Image';
import Level from '@shared/Level/components/Level';
import useClientSideValue from '@hooks/useClientSideValue';
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
  characterName = '',
  characterSrc,
  className = '',
  direction = 'right',
  hideLevel = false,
  isLoading = false,
  name = '',
  onClick,
  priority,
  rank,
  hideName = false,
  size = 'large',
}: UserCardProps): JSX.Element => {
  const { translate } = useTranslation();

  const newName = useClientSideValue(!isLoading ? name : translate('waiting'));

  const userCardClassName = useMemo(
    (): string =>
      classNames(
        'user-card',
        `user-card--size-${size}`,
        `user-card--direction-${direction}`,
        { [`user-card--is-loading`]: !!isLoading },
        className,
      ),
    [className, direction, isLoading, size],
  );

  const levelSize = useMemo(() => (size === 'large' ? 'medium' : 'small'), [size]);
  const loaderSize = useMemo(() => (size === 'large' ? 'large' : 'medium'), [size]);

  return (
    <div className={userCardClassName} data-testid="user-card">
      <div className="user-card-content">
        {isLoading ? (
          <Icon
            className="user-card-loader"
            name="Loader"
            borderColor={COLORS.WHITE}
            size={loaderSize}
          />
        ) : (
          <>
            {!hideLevel && (
              <Level badgeSrc={badgeSrc} className="user-card-level" rank={rank} size={levelSize} />
            )}

            {!!characterSrc && !!characterName && (
              <div className="user-card-character">
                <Image
                  alt={translate('skin', { name: characterName })}
                  objectFit="contain"
                  priority={priority}
                  sizes={{
                    default: '250px',
                  }}
                  src={characterSrc}
                />
              </div>
            )}
          </>
        )}
      </div>

      {!hideName && (
        <div className="user-card-info">
          <p className="user-card-name">{newName}</p>
          {!!onClick && !isLoading && (
            <Button iconName="Pen" onClick={onClick} size="small" style="none" />
          )}
        </div>
      )}
    </div>
  );
};

export default UserCard;
