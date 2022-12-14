import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectGameRoomPlayerHost, selectGameRoomPlayerRival } from '@game/selectors';
import ObjectHelpers from '@helpers/ObjectHelpers';
import type { PlayersCardsProps } from '@player/models';
import UserCard from '@shared/UserCard/components/UserCard';
import Versus from '@shared/Versus/components/Versus';

/**
 * Players cards.
 *
 * @param {PlayersCardsProps} props Props
 * @return {JSX.Element}
 */
const PlayersCards = ({ size = 'medium' }: PlayersCardsProps): JSX.Element => {
  const hostPlayer = useSelector(selectGameRoomPlayerHost);
  const rivalPlayer = useSelector(selectGameRoomPlayerRival);

  const userCardSize = useMemo(() => (size === 'small' ? 'small' : 'large'), [size]);
  const versusSize = useMemo(() => (size === 'small' ? 'medium' : 'large'), [size]);

  return (
    <>
      <UserCard
        characterName="Sam"
        characterSrc="/images/characters/character-sam.png"
        name={hostPlayer?.pseudo}
        priority
        size={userCardSize}
      />
      <Versus size={versusSize} />
      <UserCard
        characterName="Sam"
        characterSrc="/images/characters/character-sam.png"
        direction="left"
        isLoading={ObjectHelpers.isEmpty(rivalPlayer)}
        name={rivalPlayer?.pseudo}
        priority
        size={userCardSize}
      />
    </>
  );
};

export default PlayersCards;
