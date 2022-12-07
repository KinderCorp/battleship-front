import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import { emitPlayerJoiningGame } from '@socket/emittingEvents';
import type { GamePageContentProps } from '@game/models';
import GamePageView from '@game/components/GamePageView';
import Layout from '@shared/Layout/components/Layout';
import { PATHS } from '@core/constants';
import { selectGamePlayerAdmin } from '@game/selectors';
import { selectPlayer } from '@player/selectors';
import socket from '@socket/index';
import store from '@core/store';

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

  if (!gameId) {
    return {
      redirect: {
        destination: PATHS.DEFAULT,
        permanent: false,
      },
    };
  }

  const adminPlayer = selectGamePlayerAdmin(store.getState());
  if (adminPlayer?.socketId !== socket.id) {
    emitPlayerJoiningGame(gameId, selectPlayer(store.getState()));
  }

  return {
    props: {
      gameId,
    },
  };
};

export default GamePage;
