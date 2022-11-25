import classNames from 'clsx';
import { useMemo } from 'react';

import Button from '@shared/Button/components/Button';
import { COLORS } from '@core/constants';
import Icon from '@shared/Icon/components/Icon';
import Image from '@shared/Image/components/Image';
import Level from '@shared/Level/components/Level';
import { USER_CARD_PREFIX } from '@shared/UserCard/constants';
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
  size = 'large',
}: UserCardProps): JSX.Element => {
  const { translate } = useTranslation();

  const userCardClassName = useMemo(
    (): string =>
      classNames(
        USER_CARD_PREFIX,
        `${USER_CARD_PREFIX}--size-${size}`,
        `${USER_CARD_PREFIX}--direction-${direction}`,
        className,
      ),
    [className, direction, size],
  );

  const levelSize = useMemo(() => (size === 'large' ? 'medium' : 'small'), [size]);

  return (
    <div className={userCardClassName} data-testid={USER_CARD_PREFIX}>
      <div className={`${USER_CARD_PREFIX}-content`}>
        {isLoading ? (
          <Icon className={`${USER_CARD_PREFIX}-loader`} name="Loader" borderColor={COLORS.WHITE} />
        ) : (
          <>
            <Level
              badgeSrc={badgeSrc}
              className={`${USER_CARD_PREFIX}-level`}
              rank={rank}
              size={levelSize}
            />
            <Image
              alt={translate('skin', { name: 'Sam' })}
              className={`${USER_CARD_PREFIX}-character`}
              objectFit="cover"
              src={characterSrc}
            />
          </>
        )}
      </div>

      {!!name && (
        <div className={`${USER_CARD_PREFIX}-info`}>
          <p className={`${USER_CARD_PREFIX}-name`}>{!isLoading ? name : translate('waiting')}</p>
          {!!onClick && <Button iconName="Pen" onClick={onClick} size="small" style="none" />}
        </div>
      )}
    </div>
  );
};

export default UserCard;
