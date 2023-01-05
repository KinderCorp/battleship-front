import { useCallback } from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { checkGameIsFull, isPlayerHost } from '@game/helpers';
import BlockContainer from '@shared/BlockContainer/components/BlockContainer';
import Button from '@shared/Button/components/Button';
import { emitPlayersReadyToPlaceBoats } from '@socket/emittingEvents';
import PlayersCards from '@player/components/PlayersCards';
import { selectGameRoom } from '@game/selectors';
import ShareLink from '@shared/ShareLink/components/ShareLink';
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
  const allPlayersJoined = useMemo(() => checkGameIsFull(gameRoom), [gameRoom]);

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
        <BlockContainer iconName="Share" title={translate('share-to-friend')}>
          <ShareLink value={shareLink} />
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
