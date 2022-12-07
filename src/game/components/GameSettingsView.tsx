import { useEffect, useMemo, useState } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { selectGamePlayerAdmin, selectGamePlayerRival, selectGameRoom } from '@game/selectors';
import BlockContainer from '@shared/BlockContainer/components/BlockContainer';
import Button from '@shared/Button/components/Button';
import { checkGameIsFull } from '@game/helpers';
import TextContainer from '@shared/TextContainer/components/TextContainer';
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

  // const dispatch = useDispatch();

  const gameRoom = useSelector(selectGameRoom);
  const adminPlayer = useSelector(selectGamePlayerAdmin);
  const rivalPlayer = useSelector(selectGamePlayerRival);

  const [shareLink, setShareLink] = useState<string>('');
  const [clickedButtonCopy, setClickedButtonCopy] = useState<boolean>(false);

  useEffect(() => setShareLink(UrlHelpers.getUrl()), []);

  /**
   * Copy share link.
   *
   * @return {void}
   */
  const handleCopyShareLink = useCallback((): void => {
    navigator.clipboard.writeText(shareLink);
    setClickedButtonCopy(true);

    setTimeout(() => {
      setClickedButtonCopy(false);
    }, 1000);
  }, [shareLink]);

  /**
   * Start game.
   *
   * @return {void}
   */
  const handleStartGame = useCallback((): void => {
    // dispatch(setView('boats_placement'));
  }, []);

  const allPlayersJoined: boolean = useMemo(() => checkGameIsFull(gameRoom), [gameRoom]);

  return (
    <div className="game-settings">
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
          <UserCard
            characterName="Sam"
            characterSrc="/images/characters/character-sam.png"
            name={adminPlayer?.pseudo}
            priority
          />
          VS
          <UserCard
            characterName="Sam"
            characterSrc="/images/characters/character-sam.png"
            direction="left"
            isLoading={!rivalPlayer}
            name={rivalPlayer?.pseudo}
            priority
          />
        </BlockContainer>

        <Button onClick={handleStartGame} size="large" isDisabled={!allPlayersJoined}>
          {translate('start')}
        </Button>
      </div>
    </div>
  );
};

export default GameSettingsView;
