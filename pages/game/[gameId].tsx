import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import { emitPlayerJoiningGame } from '@socket/emittingEvents';
import type { GamePageContentProps } from '@game/models';
import GamePageView from '@game/components/GamePageView';
import Layout from '@shared/Layout/components/Layout';
import { PATHS } from '@core/constants';
import { selectGamePlayerAdmin } from '@game/selectors';
import { selectPlayer } from '@player/selectors';
import socket from '@socket/index';
import UrlHelpers from '@helpers/UrlHelpers';
import { useSelector } from 'react-redux';

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
  const adminPlayer = useSelector(selectGamePlayerAdmin);
  const player = useSelector(selectPlayer);

  if (adminPlayer?.socketId !== socket.id) {
    emitPlayerJoiningGame(gameId, player);
  }

  if (!socket.connected) UrlHelpers.changeLocation(PATHS.DEFAULT);

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

  return {
    props: {
      gameId,
    },
  };
};

export default GamePage;
