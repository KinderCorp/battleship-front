import HomePage from '@home/components/HomePage';
import Layout from '@shared/Layout/components/Layout';

/**
 * Home page.
 *
 * @return {JSX.Element}
 */
const Home = (): JSX.Element => {
  return <HomePage />;
};

Home.getLayout = (page: JSX.Element): JSX.Element => <Layout>{page}</Layout>;

export default Home;
