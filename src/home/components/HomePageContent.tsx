import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Button from '@shared/Button/components/Button';
import { emitCreateGame } from '@socket/emittingEvents';
import Image from '@shared/Image/components/Image';
import { PATHS } from '@core/constants';
import { selectGame } from '@game/selectors';
import { selectPlayer } from '@player/selectors';
import UrlHelpers from '@helpers/UrlHelpers';
import useTranslation from '@hooks/useTranslation';

/**
 * Home page content.
 *
 * @return {JSX.Element}
 */
const HomePageContent = (): JSX.Element => {
  const { translate } = useTranslation();

  const player = useSelector(selectPlayer);
  const { instanceId } = useSelector(selectGame);

  useEffect(() => {
    if (instanceId) {
      UrlHelpers.changeLocation(`${PATHS.GAME}/${instanceId}`);
    }
  }, [instanceId]);

  const handleCreateGame = useCallback((): void => {
    emitCreateGame(player);
  }, [player]);

  return (
    <div className="home-page-content">
      <Button
        className="login"
        iconName="People"
        onClick={() => null}
        size="large"
        style="secondary"
      />

      <div className="content">
        <Image
          alt={translate('battleship-logo')}
          className="content-logo"
          objectFit="contain"
          priority
          src="/images/logo.png"
          sizes={{
            default: '90vw',
            desktop: '70vw',
            'large-desktop': '60vw',
            phablet: '80vw',
          }}
        />

        <Button className="content-play" onClick={handleCreateGame} size="large">
          {translate('create-game')}
        </Button>
      </div>
    </div>
  );
};

export default HomePageContent;
