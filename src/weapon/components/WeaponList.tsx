import classNames from 'clsx';
import { useMemo } from 'react';

import ArrayHelpers from '@helpers/ArrayHelpers';
import WeaponItem from '@weapon/components/WeaponItem';
import type { WeaponListProps } from '@weapon/models';

/**
 * WeaponList component.
 *
 * @param {WeaponListProps} props Props
 * @return {JSX.Element|null}
 */
const WeaponList = ({
  className = '',
  isDisabled = false,
  onClick,
  weaponItems,
}: WeaponListProps): JSX.Element | null => {
  const weaponListClassName = useMemo(
    (): string =>
      classNames('weapon-list', { 'weapon-list--is-disabled': !!isDisabled }, className),
    [className, isDisabled],
  );

  if (ArrayHelpers.isEmpty(weaponItems)) return null;

  return (
    <div className={weaponListClassName}>
      {weaponItems.map(({ counter, isLocked, isSelected, weapon }, index) => (
        <WeaponItem
          counter={counter}
          isLocked={isLocked}
          isSelected={isSelected}
          key={index}
          onClick={onClick}
          weapon={weapon}
        />
      ))}
    </div>
  );
};

export default WeaponList;
