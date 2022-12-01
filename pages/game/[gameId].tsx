import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import GamePageContent from '@game/components/GamePageContent';
import type { GamePageContentProps } from '@src/game/models';
import Layout from '@shared/Layout/components/Layout';

export type GamePageParams = {
  gameId?: string;
};

/**
 * Game page.
 *
 * @param {GamePageContentProps} props Props
 * @return {JSX.Element}
 */
const GamePage = ({ gameId }: GamePageContentProps): JSX.Element => {
  return <GamePageContent gameId={gameId} />;
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

  if (!gameId) return { notFound: true };

  // TODO: check by the API if game id is correct

  return {
    props: {
      gameId,
    },
  };
};

export default GamePage;
