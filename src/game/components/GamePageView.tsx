import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { selectGameRoomInstanceId, selectGameView } from '@game/selectors';
import Button from '@shared/Button/components/Button';
import { emitLeaveRoom } from '@socket/emittingEvents';
import GamePlacingBoatsView from '@game/components/GamePlacingBoatsView';
import GameSettingsView from '@game/components/GameSettingsView';
import Header from '@shared/Header/components/Header';
import { PATHS } from '@core/constants';
import PlayersCards from '@player/components/PlayersCards';
import UrlHelpers from '@helpers/UrlHelpers';
import useTranslation from '@hooks/useTranslation';

/**
 * Game page content.
 *
 * @return {JSX.Element}
 */
const GamePageView = (): JSX.Element => {
  const { translate } = useTranslation();

  const view = useSelector(selectGameView);
  const instanceId = useSelector(selectGameRoomInstanceId);

  const handleLeaveGame = useCallback(() => {
    UrlHelpers.changeLocation(PATHS.DEFAULT);
    emitLeaveRoom(instanceId);
  }, [instanceId]);

  return (
    <>
      <Header
        content={view !== 'settings' && <PlayersCards size="small" />}
        height="medium"
        leftSideNode={
          <Button iconName="ArrowLeft" onClick={handleLeaveGame} size="large" style="secondary">
            {translate('leave')}
          </Button>
        }
        title={view === 'settings' ? translate('create-game') : ''}
      />

      {view === 'settings' && <GameSettingsView />}
      {view === 'boats_placement' && <GamePlacingBoatsView />}
    </>
  );
};

export default GamePageView;
