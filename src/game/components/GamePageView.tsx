import { useState } from 'react';

import Button from '@shared/Button/components/Button';
import GameSettingsView from '@game/components/GameSettingsView';
import type { GameView } from '@game/models';
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

  const [view, setView] = useState<GameView>('settings');

  return (
    <>
      <Header
        height="medium"
        leftSideNode={
          <Button
            iconName="ArrowLeft"
            onClick={() => UrlHelpers.changeLocation(PATHS.DEFAULT)}
            size="large"
            style="secondary"
          >
            {translate('leave')}
          </Button>
        }
        title={view === 'settings' ? translate('create-game') : 'VS'}
      />

      {view === 'settings' && <GameSettingsView setView={setView} />}
    </>
  );
};

export default GamePageView;
