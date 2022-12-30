import { useCallback, useMemo } from 'react';
import classNames from 'clsx';
import type { SyntheticEvent } from 'react';

import { COLORS } from '@core/constants';
import Icon from '@shared/Icon/components/Icon';
import Image from '@shared/Image/components/Image';
import NumberHelpers from '@helpers/NumberHelpers';
import type { WeaponItemProps } from '@weapon/models';

/**
 * WeaponItem component.
 *
 * @param {WeaponItemProps} props Props
 * @return {JSX.Element}
 */
const WeaponItem = ({
  className = '',
  counter,
  isLocked = false,
  isSelected = false,
  onClick,
  weapon,
}: WeaponItemProps): JSX.Element => {
  const { name, src } = weapon;

  const checkIsDisabled = useCallback(() => {
    if (isLocked) return true;

    if (NumberHelpers.isNumber(counter) && (counter < -1 || counter === 0)) return true;

    return false;
  }, [counter, isLocked]);

  const counterActive = useMemo(() => NumberHelpers.isNumber(counter) && counter >= -1, [counter]);
  const disabled = useMemo(() => checkIsDisabled(), [checkIsDisabled]);

  const handleClick = useCallback(
    (event: SyntheticEvent<EventTarget>) => {
      event.preventDefault();
      event.stopPropagation();

      if (!disabled) onClick(name);
    },
    [disabled, name, onClick],
  );

  const itemClassName = useMemo(
    (): string =>
      classNames(
        'weapon-item',
        {
          'weapon-item--has-counter': !!counterActive && !isLocked,
          'weapon-item--is-disabled': !!disabled,
          'weapon-item--is-locked': !!isLocked,
          'weapon-item--is-selected': !!isSelected,
        },
        className,
      ),
    [className, counterActive, disabled, isLocked, isSelected],
  );

  return (
    <div className={itemClassName} onClick={handleClick}>
      <Image
        alt={name}
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

      {!!counterActive && !isLocked && (
        <div className="weapon-item-counter">
          {counter === -1 ? (
            <Icon name="Infinity" color={COLORS.BROWN} borderColor={COLORS.ORANGE} size="small" />
          ) : (
            counter
          )}
        </div>
      )}
    </div>
  );
};

export default WeaponItem;
