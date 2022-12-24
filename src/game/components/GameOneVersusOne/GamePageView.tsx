import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { selectGameRoomInstanceId, selectGameView } from '@game/selectors';
import { emitLeaveRoom } from '@socket/emittingEvents';
import GamePlacingBoatsView from '@game/components/GameOneVersusOne/GamePlacingBoatsView';
import GameSettingsView from '@game/components/GameOneVersusOne/GameSettingsView';
import PageContainer from '@shared/PageContainer/components/PageContainer';
import { PATHS } from '@core/constants';
import PlayersCards from '@player/components/PlayersCards';
import UrlHelpers from '@helpers/UrlHelpers';
import useTranslation from '@hooks/useTranslation';

/**
 * Game page view.
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
    <PageContainer
      header={{
        content: view !== 'settings' && <PlayersCards size="small" />,
        onLeave: handleLeaveGame,
        title: view === 'settings' ? translate('create-game') : '',
      }}
    >
      {view === 'settings' && <GameSettingsView />}
      {view === 'boats_placement' && <GamePlacingBoatsView />}
    </PageContainer>
  );
};

export default GamePageView;
