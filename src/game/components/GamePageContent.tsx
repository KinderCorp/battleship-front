import { useEffect, useState } from 'react';

import BlockContainer from '@shared/BlockContainer/components/BlockContainer';
import Button from '@shared/Button/components/Button';
import ContentPage from '@shared/ContentPage/components/ContentPage';
import Header from '@shared/Header/components/Header';
import { PATHS } from '@core/constants';
import TextContainer from '@shared/TextContainer/components/TextContainer';
import UrlHelpers from '@helpers/UrlHelpers';
import UserCard from '@shared/UserCard/components/UserCard';
import useTranslation from '@hooks/useTranslation';

/**
 * Game page content.
 *
 * @return {JSX.Element}
 */
const GamePageContent = (): JSX.Element => {
  const { translate } = useTranslation();

  const [shareLink, setShareLink] = useState('');
  const [clickedButtonCopy, setClickedButtonCopy] = useState(false);

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
    <ContentPage className="game-page-content">
      <Header
        height="medium"
        leftSideNode={
          <Button
            iconName="ArrowLeft"
            // TODO: replace by link component
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
    </ContentPage>
  );
};

export default GamePageContent;
