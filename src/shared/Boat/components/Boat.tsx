import classNames from 'clsx';
import { useMemo } from 'react';

import type { BoatProps } from '@shared/Boat/models';
import Image from '@shared/Image/components/Image';
import useTranslation from '@hooks/useTranslation';

/**
 * Boat component.
 *
 * @param {BoatProps} props Props
 * @return {JSX.Element}
 */
export const Boat = ({
  boatName = '',
  boatSrc,
  className = '',
  direction = 'horizontal',
  height,
  priority,
  width,
}: BoatProps): JSX.Element => {
  const { translate } = useTranslation();

  const boatClassName = useMemo(
    (): string => classNames('boat', `boat--${direction}`, className),
    [className, direction],
  );

  return (
    <div
      className={boatClassName}
      data-testid="boat"
      style={{
        height,
        width,
      }}
    >
      <Image
        alt={translate('boat', { name: boatName })}
        className="boat-image"
        objectFit="fill"
        priority={priority}
        sizes={{}}
        src={boatSrc}
      />
    </div>
  );
};

export default Boat;
