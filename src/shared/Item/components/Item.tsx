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
    name,
    numberOfUses,
    onClick,
    src,
}: ItemProps): JSX.Element => {

    const disabled = useMemo(() => numberOfUses === 0 || isLocked, [isLocked, numberOfUses]);

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
            classNames('item', {
                'has-badge': numberOfUses && numberOfUses >= 0,
                'is-disabled': !!disabled,
                'is-locked': !!isLocked,
                'is-selected': !!isSelected,
            }, className),
        [numberOfUses, disabled, isLocked, isSelected, className],
    );

    return (
        <div className={itemClassName} onClick={handleClick}>
            <Image src={src} alt={name} className="item-image" />

            {!!isLocked && (
                <Icon name='Lock' color={COLORS.WHITE} borderColor={COLORS.BLACK} className='item-lock'/>
            )}

            {numberOfUses && (
                <div className='item-badge'>{numberOfUses >= 0 ? numberOfUses : <Icon name='Infinity' color={COLORS.BROWN} borderColor={COLORS.ORANGE} />}</div>
            )}
        </div>
    );
}

export default Item;