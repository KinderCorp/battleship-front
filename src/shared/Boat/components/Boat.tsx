import { useCallback, useMemo, useState } from 'react';
import classNames from 'clsx';
import type { CSSProperties } from 'react';

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
  className = '',
  direction = 'west',
  height,
  index,
  isPlacementActive = false,
  name = '',
  onRotation,
  priority,
  src,
  style,
  width,
}: BoatProps): JSX.Element => {
  const { translate } = useTranslation();

  const [isError, setIsError] = useState<boolean>(false);

  const handleRotation = useCallback(() => {
    if (onRotation) {
      if (!onRotation(index)) {
        setIsError(true);

        setTimeout(() => {
          setIsError(false);
        }, 300);
      } else {
        setIsError(false);
      }
    }
  }, [index, onRotation]);

  const boatClassName = useMemo(
    (): string =>
      classNames(
        'boat',
        `boat--direction-${direction}`,
        {
          'boat--is-error': !!isError,
          'boat--is-placement-active': !!isPlacementActive,
        },
        className,
      ),
    [className, direction, isError, isPlacementActive],
  );

  const boatStyle: CSSProperties = useMemo(
    () => ({
      ...style,
      height,
      width,
    }),
    [height, style, width],
  );

  return (
    <div className={boatClassName} data-testid="boat" style={boatStyle} onClick={handleRotation}>
      <Image
        alt={translate('boat', { name })}
        className="boat-image"
        objectFit="fill"
        priority={priority}
        sizes={{}}
        src={src}
      />
    </div>
  );
};

export default Boat;
