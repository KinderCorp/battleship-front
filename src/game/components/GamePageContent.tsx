import Header from '@shared/Header/components/Header';
import useTranslation from '@hooks/useTranslation';

/**
 * Game page content component.
 *
 * @return {JSX.Element}
 */
const GamePageContent = (): JSX.Element => {
  const { translate } = useTranslation();

  return (
    <div className="page-game">
      <Header height="medium" title={translate('create-game')} />
    </div>
  );
};

export default GamePageContent;
