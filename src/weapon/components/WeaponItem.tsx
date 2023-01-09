import { useCallback, useMemo } from 'react';
import classNames from 'clsx';
import type { SyntheticEvent } from 'react';

import { COLORS } from '@core/constants';
import Icon from '@shared/Icon/components/Icon';
import Image from '@shared/Image/components/Image';
import NumberHelpers from '@helpers/NumberHelpers';
import useTranslation from '@hooks/useTranslation';
import type { WeaponItemProps } from '@weapon/models';

/**
 * WeaponItem component.
 *
 * @param {WeaponItemProps} props Props
 * @return {JSX.Element}
 */
const WeaponItem = ({
  ammunition,
  className = '',
  isLocked = false,
  isSelected = false,
  onClick,
  weapon,
}: WeaponItemProps): JSX.Element => {
  const { translate } = useTranslation();

  const { name, src } = weapon;

  const checkIsDisabled = useCallback(() => {
    if (isLocked) return true;

    if (NumberHelpers.isNumber(ammunition) && (ammunition < -1 || ammunition === 0)) return true;

    return false;
  }, [ammunition, isLocked]);

  const ammunitionActive = useMemo(
    () => NumberHelpers.isNumber(ammunition) && ammunition >= -1,
    [ammunition],
  );
  const disabled = useMemo(() => checkIsDisabled(), [checkIsDisabled]);

  const handleClick = useCallback(
    (event: SyntheticEvent<EventTarget>) => {
      event.preventDefault();
      event.stopPropagation();

      if (!disabled) onClick(weapon);
    },
    [disabled, onClick, weapon],
  );

  const weaponItemClassName = useMemo(
    (): string =>
      classNames(
        'weapon-item',
        {
          'weapon-item--has-ammunition': !!ammunitionActive && !isLocked,
          'weapon-item--is-disabled': !!disabled,
          'weapon-item--is-locked': !!isLocked,
          'weapon-item--is-selected': !!isSelected,
        },
        className,
      ),
    [className, ammunitionActive, disabled, isLocked, isSelected],
  );

  return (
    <div className={weaponItemClassName} onClick={handleClick}>
      <Image
        alt={translate('weapon', { name })}
        className="weapon-item-image"
        objectFit="cover"
        sizes={{ default: '100px' }}
        src={src}
      />

      {!!isLocked && (
        <Icon
          borderColor={COLORS.BLACK}
          className="weapon-item-lock"
          color={COLORS.WHITE}
          name="Lock"
        />
      )}

      {!!ammunitionActive && !isLocked && (
        <div className="weapon-item-ammunition">
          {ammunition === -1 ? (
            <Icon name="Infinity" color={COLORS.BROWN} borderColor={COLORS.ORANGE} size="small" />
          ) : (
            ammunition
          )}
        </div>
      )}
    </div>
  );
};

export default WeaponItem;
