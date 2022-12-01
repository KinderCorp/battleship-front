import Button from '@shared/Button/components/Button';
import Image from '@shared/Image/components/Image';
import useTranslation from '@hooks/useTranslation';

/**
 * Home page component.
 *
 * @return {JSX.Element}
 */
const HomePage = (): JSX.Element => {
  const { translate } = useTranslation();

  // const socketTest = () => {
  //   socket.emit('UserJoin', `Coucou ${value}`);
  // };

  return (
    <div className="page-home">
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
    </div>
  );
};

export default HomePage;
