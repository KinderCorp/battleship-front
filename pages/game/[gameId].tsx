import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useEffect } from 'react';

import { emitPlayerJoiningGame } from '@socket/emittingEvents';
import type { GamePageContentProps } from '@game/models';
import GamePageView from '@game/components/GameOneVersusOne/GamePageView';
import { isPlayerHost } from '@game/helpers';
import Layout from '@shared/Layout/components/Layout';
import { PATHS } from '@core/constants';
import { selectPlayer } from '@player/selectors';
import { useSelector } from 'react-redux';

export type GamePageParams = {
  gameId?: string;
};

/**
 * Game page.
 *
 * @param {GamePageContentProps} props Props
 * @return {JSX.Element|void}
 */
const GamePage = ({ gameId }: GamePageContentProps): JSX.Element | void => {
  const player = useSelector(selectPlayer);

  // BUG: called multiple times
  useEffect(() => {
    if (!isPlayerHost()) emitPlayerJoiningGame(gameId, player);
  });

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
