import type { BlockContainerProps } from '@shared/BlockContainer/model';
import classNames from 'clsx';
import { COLORS } from '@core/constants';
import { useMemo } from 'react';

// import type { ButtonProps } from '@shared/Button/models';
import Icon from '@shared/Icon/components/Icon';
// import Button from '@shared/Button/components/Button';

/**
 * BlockContainer component.
 *
 * @param {BlockContainerProps} props Props
 * @return {JSX.Element}
 */
export const BlockContainer = ({
    children = '',
    className = '',
    iconName = null,
    title = '',
}: BlockContainerProps): JSX.Element => {

    const blockContainerClassName = useMemo(
        (): string =>
          classNames('', className, {
            'has-icon': !!iconName,
          }),
        [className, iconName],
      );

    return (
        <>
          <BlockContainer  className={blockContainerClassName} title={title} iconName="Share">
            {iconName && (
              <Icon borderColor={COLORS.TRANSPARENT} color={COLORS.PURPLE_LIGHT} name={iconName} />
            )}
            {/* <TextContainer value="https://www.battleship.fr/join?code=8b1a292b05c946bc945b8d14a105dd5d" /> */}
            {/* <Button onClick={} iconName="Copy" /> */}
          </BlockContainer>
        </>
    );
};


export default BlockContainer;