import Button from '@shared/Button/components/Button';
import ContentPage from '@shared/ContentPage/components/ContentPage';
import Image from '@shared/Image/components/Image';
import useTranslation from '@hooks/useTranslation';

/**
 * Home page content.
 *
 * @return {JSX.Element}
 */
const HomePageContent = (): JSX.Element => {
  const { translate } = useTranslation();

  // const socketTest = () => {
  //   socket.emit('UserJoin', `Coucou ${value}`);
  // };

  return (
    <ContentPage className="home-page-content">
      <Button
        className="login"
        iconName="People"
        onClick={() => null}
        size="large"
        style="secondary"
      />

      <div className="content">
        <Image
          alt={translate('battleship-logo')}
          className="content-logo"
          objectFit="contain"
          priority
          src="/images/logo.png"
          sizes={{
            default: '90vw',
            desktop: '70vw',
            'large-desktop': '60vw',
            phablet: '80vw',
          }}
        />

        <Button className="content-play" onClick={() => null} size="large">
          {translate('create-game')}
        </Button>
      </div>
    </ContentPage>
  );
};

export default HomePageContent;
