import { useEffect, useState } from 'react';

import BlockContainer from '@shared/BlockContainer/components/BlockContainer';
import Button from '@shared/Button/components/Button';
import type { GameSettings } from '@game/models';
import Header from '@shared/Header/components/Header';
import { PATHS } from '@core/constants';
import TextContainer from '@shared/TextContainer/components/TextContainer';
import { updateSettingsEmitting } from '@socket/emittingEvents';
import UrlHelpers from '@helpers/UrlHelpers';
import UserCard from '@shared/UserCard/components/UserCard';
import useTranslation from '@hooks/useTranslation';

/**
 * Game settings.
 *
 * @return {JSX.Element}
 */
const GameSettingsView = (): JSX.Element => {
  const { translate } = useTranslation();

  const [shareLink, setShareLink] = useState<string>('');
  const [settings] = useState<GameSettings>({ boardSize: 10 });
  const [clickedButtonCopy, setClickedButtonCopy] = useState<boolean>(false);

  useEffect(() => {
    updateSettingsEmitting(settings);
  }, [settings]);

  useEffect(() => setShareLink(UrlHelpers.getUrl()), []);

  /**
   * Copy share link.
   *
   * @return {void}
   */
  const handleCopyShareLink = (): void => {
    navigator.clipboard.writeText(shareLink);
    setClickedButtonCopy(true);

    setTimeout(() => {
      setClickedButtonCopy(false);
    }, 1000);
  };

  return (
    <div className="game-settings">
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
        title={translate('create-game')}
      />

      <div className="content">
        <BlockContainer
          className="share-link"
          iconName="Share"
          title={translate('share-to-friend')}
        >
          <TextContainer value={shareLink} />
          <Button
            iconName={clickedButtonCopy ? 'Check' : 'Copy'}
            onClick={handleCopyShareLink}
            isDisabled={clickedButtonCopy}
            style="secondary"
            size="large"
          />
        </BlockContainer>

        <BlockContainer className="players">
          <UserCard name="Player_978" />
          VS
          <UserCard isLoading />
        </BlockContainer>

        <Button onClick={() => null} size="large" isDisabled>
          {translate('start')}
        </Button>
      </div>
    </div>
  );
};

export default GameSettingsView;
