import { useCallback, useMemo } from 'react';
import classNames from 'clsx';
import type { SyntheticEvent} from 'react';

import { COLORS } from '@core/constants';
import Icon from '@shared/Icon/components/Icon';
import Image from '@shared/Image/components/Image';
import type { ItemProps } from '@shared/Item/models';

/**
 * Item component.
 *
 * @param {ItemProps} props Props
 * @return {JSX.Element}
 */
const Item = ({
    className = "",
    isLocked = false,
    isSelected = false,
    isDisabled = false,
    numberOfUses = 0,
    onClick,
    src,
}: ItemProps): JSX.Element => {

    const disabled = useMemo(() => isDisabled || isLocked, [isDisabled, isLocked]);

    const handleClick = useCallback(
        (event: SyntheticEvent<EventTarget>) => {
          if (!disabled) onClick(event);
        },
        [disabled, onClick],
    );

    const itemClassName = useMemo(
        (): string =>
            classNames('item', className, {
            'has-orange-border': !!isSelected,
            }),
        [className, isSelected],
    );

    const imgClassName = useMemo(
        (): string =>
            classNames('item', {
            'is-disabled': !isDisabled || numberOfUses == 0,
            'is-locked': !!isLocked,
            }, className),
        [className, isLocked, isDisabled, numberOfUses],
    );

    const pinClassName = useMemo(
        (): string => classNames('pin', className, {
            'not-locked': !isLocked,
        }),
        [className, isLocked]
    )

    /**
     * Function to display right pin.
     * 
     * @return {JSX.Element}
     */
    const pin = () : JSX.Element => {
        return (
            <div className={pinClassName}>
                {numberOfUses == -1 ? <Icon name={'Infinity'} color={COLORS.BROWN} borderColor={COLORS.YELLOW}/> : isLocked ? <Icon name={'Lock'} color={COLORS.WHITE} borderColor={COLORS.BLACK}/> : numberOfUses}
            </div>
        );
    }

    return (
        <div className={itemClassName} onClick={handleClick}>
            <Image src={src} alt={''} className={imgClassName}/>
            { !isDisabled && pin() }
        </div>
    );
}

export default Item;