import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
  selectGameRoomOtherPlayer,
  selectGameRoomPlayer,
  selectGameRoomSettings,
} from '@game/selectors';
import Board from '@shared/Board/components/Board';
import type { Position } from '@shared/Board/models';
import TitleIndication from '@shared/Title/components/TitleIndication';
import useTranslation from '@hooks/useTranslation';

/**
 * Game playing view.
 *
 * @return {JSX.Element}
 */
const GamePlayingView = (): JSX.Element => {
  const { translate } = useTranslation();

  const player = useSelector(selectGameRoomPlayer);
  const otherPlayer = useSelector(selectGameRoomOtherPlayer);
  const { boardDimensions } = useSelector(selectGameRoomSettings);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  const handleShoot = useCallback((position: Position) => {}, []);

  return (
    <div className="game-playing">
      {player.isTurn ? (
        <TitleIndication iconName="Target" title={translate('your-turn-playing')} />
      ) : (
        <TitleIndication
          iconName="Target"
          title={translate('rival-turn-playing', { pseudo: otherPlayer.pseudo || '' })}
        />
      )}

      <div className="boards">
        <Board
          boats={player.board?.boardBoats}
          dimensions={boardDimensions}
          isDisabled={!!player.isTurn}
        />
        <Board
          boats={player.board?.boardBoats}
          dimensions={boardDimensions}
          isDisabled={!!otherPlayer.isTurn}
          isShootActive={!!player.isTurn}
          onClick={handleShoot}
        />
      </div>
    </div>
  );
};

export default GamePlayingView;
