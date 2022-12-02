import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import type { GamePageContentProps } from '@game/models';
import GamePageView from '@game/components/GamePageView';
import Layout from '@shared/Layout/components/Layout';
import { PATHS } from '@core/constants';

export type GamePageParams = {
  gameId?: string;
};

/**
 * Game page.
 *
 * @return {JSX.Element}
 */
const GamePage = (): JSX.Element => {
  return <GamePageView />;
};

GamePage.getLayout = (page: JSX.Element): JSX.Element => <Layout>{page}</Layout>;

/**
 * Get server side props.
 *
 * @param {GetServerSidePropsContext<GamePageParams>} context Context of the page
 * @return {Promise<GetServerSidePropsResult<GamePageContentProps>>}
 */
export const getServerSideProps = async ({
  params = {},
}: GetServerSidePropsContext<GamePageParams>): Promise<
  GetServerSidePropsResult<GamePageContentProps>
> => {
  const { gameId } = params;

  // TODO: check by the API if game id is correct

  if (!gameId) {
    return {
      redirect: {
        destination: PATHS.DEFAULT,
        permanent: false,
      },
    };
  }

  return {
    props: {
      gameId,
    },
  };
};

export default GamePage;
