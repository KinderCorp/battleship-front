import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { selectGameInstance, selectGameView } from '@game/selectors';
import Button from '@shared/Button/components/Button';
import { emitCloseRoom } from '@socket/emittingEvents';
import GameSettingsView from '@game/components/GameSettingsView';
import Header from '@shared/Header/components/Header';
import { PATHS } from '@core/constants';
import UrlHelpers from '@helpers/UrlHelpers';
import useTranslation from '@hooks/useTranslation';

// BUG: Uncaught Error: This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition. => Only for rival player

/**
 * Game page content.
 *
 * @return {JSX.Element}
 */
const GamePageView = (): JSX.Element => {
  const { translate } = useTranslation();

  const view = useSelector(selectGameView);
  const instanceId = useSelector(selectGameInstance);

  const handleLeaveGame = useCallback(() => {
    UrlHelpers.changeLocation(PATHS.DEFAULT);
    emitCloseRoom(instanceId);
  }, [instanceId]);

  return (
    <>
      <Header
        height="medium"
        leftSideNode={
          <Button iconName="ArrowLeft" onClick={handleLeaveGame} size="large" style="secondary">
            {translate('leave')}
          </Button>
        }
        title={view === 'settings' ? translate('create-game') : 'VS'}
      />

      {view === 'settings' && <GameSettingsView />}
    </>
  );
};

export default GamePageView;
