import classNames from 'clsx';
import { useMemo } from 'react';

import WeaponItem from '@weapon/components/WeaponItem';
import type { WeaponListProps } from '@weapon/models';

/**
 * WeaponList component.
 *
 * @param {WeaponListProps} props Props
 * @return {JSX.Element}
 */
const WeaponList = ({ className = '', onClick, weaponItems }: WeaponListProps): JSX.Element => {
  const weaponListClassName = useMemo(
    (): string => classNames('weapon-list', className),
    [className],
  );

  return (
    <div className={weaponListClassName}>
      {weaponItems.map(({ weapon }, index) => (
        <WeaponItem key={index} onClick={onClick} weapon={weapon} />
      ))}
    </div>
  );
};

export default WeaponList;
