import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setGameRoom, setView } from '@game/reducer';
import Button from '@shared/Button/components/Button';
import { emitCreateGame } from '@socket/emittingEvents';
import type { GameRoom } from '@game/models';
import { GameView } from '@game/constants';
import Image from '@shared/Image/components/Image';
import { selectPlayer } from '@player/selectors';
import useTranslation from '@hooks/useTranslation';

/**
 * Home page content.
 *
 * @return {JSX.Element}
 */
const HomePageContent = (): JSX.Element => {
  const { translate } = useTranslation();

  const dispatch = useDispatch();

  const player = useSelector(selectPlayer);

  // BUG: called two times
  useEffect(() => {
    dispatch(setGameRoom({} as GameRoom));
    dispatch(setView(GameView.SETTINGS));
  });

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

        <Button
          className="content-play"
          onClick={handleCreateGame}
          size="large"
          // FIXME: when socket is connected, button is always disabled
          // isDisabled={!socket.connected}
        >
          {translate('create-game')}
        </Button>
      </div>
    </div>
  );
};

export default HomePageContent;
