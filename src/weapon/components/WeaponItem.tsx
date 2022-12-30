import { useCallback, useMemo } from 'react';
import classNames from 'clsx';
import type { SyntheticEvent } from 'react';

import { COLORS } from '@core/constants';
import Icon from '@shared/Icon/components/Icon';
import Image from '@shared/Image/components/Image';
import type { ItemProps } from '@weapon/models';
import NumberHelpers from '@helpers/NumberHelpers';

/**
 * WeaponItem component.
 *
 * @param {ItemProps} props Props
 * @return {JSX.Element}
 */
const WeaponItem = ({
  className = '',
  isLocked = false,
  isSelected = false,
  name,
  numberOfUses,
  onClick,
  src,
}: ItemProps): JSX.Element => {
  const numberOfUsesActive = useMemo(
    () => NumberHelpers.isNumber(numberOfUses) && numberOfUses >= -1,
    [numberOfUses],
  );
  const disabled = useMemo(
    () => !numberOfUsesActive || numberOfUses === 0 || isLocked,
    [isLocked, numberOfUses, numberOfUsesActive],
  );

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
          'weapon-item--has-counter': !!numberOfUsesActive,
          'weapon-item--is-disabled': !!disabled,
          'weapon-item--is-locked': !!isLocked,
          'weapon-item--is-selected': !!isSelected,
        },
        className,
      ),
    [numberOfUsesActive, disabled, isLocked, isSelected, className],
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

      {!!numberOfUsesActive && !isLocked && (
        <div className="weapon-item-counter">
          {numberOfUses === -1 ? (
            <Icon name="Infinity" color={COLORS.BROWN} borderColor={COLORS.ORANGE} size="small" />
          ) : (
            numberOfUses
          )}
        </div>
      )}
    </div>
  );
};

export default WeaponItem;
