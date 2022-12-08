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
