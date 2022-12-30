import { useMemo, useState } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { checkGameIsFull, isPlayerHost } from '@game/helpers';
import BlockContainer from '@shared/BlockContainer/components/BlockContainer';
import Button from '@shared/Button/components/Button';
import { emitPlayersReadyToPlaceBoats } from '@socket/emittingEvents';
import PlayersCards from '@player/components/PlayersCards';
import { selectGameRoom } from '@game/selectors';
import TextContainer from '@shared/TextContainer/components/TextContainer';
import UrlHelpers from '@helpers/UrlHelpers';
import useClientSideValue from '@hooks/useClientSideValue';
import useTranslation from '@hooks/useTranslation';
import WaitingForTheHost from '@game/components/WaitingForTheHost';

/**
 * Game settings view.
 *
 * @return {JSX.Element}
 */
const GameSettingsView = (): JSX.Element => {
  const { translate } = useTranslation();

  const gameRoom = useSelector(selectGameRoom);
  const shareLink = useClientSideValue(UrlHelpers.getUrl());
  const [clickedButtonCopy, setClickedButtonCopy] = useState<boolean>(false);
  const allPlayersJoined = useMemo(() => checkGameIsFull(gameRoom), [gameRoom]);

  /**
   * Copy share link.
   *
   * @return {void}
   */
  const handleCopyShareLink = useCallback((): void => {
    navigator.clipboard.writeText(shareLink);

    setClickedButtonCopy(true);
    setTimeout(() => setClickedButtonCopy(false), 1000);
  }, [shareLink]);

  /**
   * Start game.
   *
   * @return {void}
   */
  const handleStartGame = useCallback((): void => {
    if (allPlayersJoined && isPlayerHost()) emitPlayersReadyToPlaceBoats();
  }, [allPlayersJoined]);

  return (
    <div className="game-settings">
      {isPlayerHost() && (
        <BlockContainer
          className="share-link"
          iconName="Share"
          title={translate('share-to-friend')}
        >
          {/* // TODO: make a component <ShareLink /> */}
          <TextContainer value={shareLink} />
          <Button
            iconName={clickedButtonCopy ? 'Check' : 'Copy'}
            onClick={handleCopyShareLink}
            isDisabled={clickedButtonCopy}
            style="secondary"
            size="large"
          />
        </BlockContainer>
      )}

      <BlockContainer className="players">
        <PlayersCards />
      </BlockContainer>

      {isPlayerHost() && (
        <Button onClick={handleStartGame} size="large" isDisabled={!allPlayersJoined}>
          {translate('start')}
        </Button>
      )}

      {!isPlayerHost() && <WaitingForTheHost />}
    </div>
  );
};

export default GameSettingsView;
