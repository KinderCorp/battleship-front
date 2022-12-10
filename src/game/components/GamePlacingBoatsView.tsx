import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectGameOtherPlayer, selectGameSettings } from '@game/selectors';
import Board from '@shared/Board/components/Board';
import type { BoardBoat } from '@shared/Board/models';
import Button from '@shared/Button/components/Button';
import { emitValidatePlayerBoatsPlacement } from '@socket/emittingEvents';
import TitleIndication from '@shared/Title/components/TitleIndication';
import useTranslation from '@hooks/useTranslation';

/**
 * Game settings.
 *
 * @return {JSX.Element}
 */
const GamePlacingBoatsView = (): JSX.Element => {
  const { translate } = useTranslation();

  const [boats, setBoats] = useState<BoardBoat[]>([
    {
      lengthCell: 1,
      name: '1x1',
      src: '/images/boats/boat-1x1.png',
      widthCell: 1,
      x: 5,
      y: 5,
    },
    {
      lengthCell: 3,
      name: '3x1',
      src: '/images/boats/boat-3x1.png',
      widthCell: 1,
      x: 5,
      y: 4,
    },
  ]);

  const settings = useSelector(selectGameSettings);
  const otherPlayer = useSelector(selectGameOtherPlayer);

  const boatsAreWellPlaced = false;

  /**
   * When player is ready.
   *
   * @return {void}
   */
  const handleReady = useCallback((): void => {
    if (boatsAreWellPlaced) emitValidatePlayerBoatsPlacement();
  }, [boatsAreWellPlaced]);

  return (
    <div className="game-placing-boats">
      <TitleIndication iconName="Boat" title={translate('place-your-boats')} />

      <div className="boats-placement">
        <Board dimensions={settings.boardDimensions} boats={boats} setBoats={setBoats} />

        <Button
          className="button-random-boats"
          iconName="Dice"
          onClick={() => null}
          style="secondary"
        >
          {translate('random')}
        </Button>
      </div>

      <Button
        className="button-ready"
        isDisabled={!boatsAreWellPlaced}
        onClick={handleReady}
        size="large"
        style="secondary"
      >
        {translate('i-am-not-ready')}
      </Button>

      <p className="rival-indication">
        {translate('player-placing-his-boats', { pseudo: otherPlayer?.pseudo || '' })}
      </p>
    </div>
  );
};

export default GamePlacingBoatsView;
