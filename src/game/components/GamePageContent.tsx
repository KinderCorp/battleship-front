import { useEffect, useState } from 'react';

import BlockContainer from '@shared/BlockContainer/components/BlockContainer';
import Button from '@shared/Button/components/Button';
import Header from '@shared/Header/components/Header';
import { PATHS } from '@core/constants';
import TextContainer from '@shared/TextContainer/components/TextContainer';
import UrlHelpers from '@helpers/UrlHelpers';
import useTranslation from '@hooks/useTranslation';

/**
 * Game page content.
 *
 * @return {JSX.Element}
 */
const GamePageContent = (): JSX.Element => {
  const [shareUrl, setShareUrl] = useState('');
  const { translate } = useTranslation();

  useEffect(() => setShareUrl(UrlHelpers.getUrl()), []);

  return (
    <div className="page-game">
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
          <TextContainer value={shareUrl} />
          <Button iconName="Copy" onClick={() => null} style="secondary" size="large" />
        </BlockContainer>
      </div>
    </div>
  );
};

export default GamePageContent;
