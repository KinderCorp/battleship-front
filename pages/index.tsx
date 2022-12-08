import HomePageContent from '@home/components/HomePageContent';
import Layout from '@shared/Layout/components/Layout';

/**
 * Home page.
 *
 * @return {JSX.Element}
 */
const HomePage = (): JSX.Element => {
  return <HomePageContent />;
};

HomePage.getLayout = (page: JSX.Element): JSX.Element => <Layout>{page}</Layout>;

export default HomePage;
