import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectGameOtherPlayer, selectGameRoomSettings } from '@game/selectors';
import Board from '@shared/Board/components/Board';
import type { BoardBoat } from '@shared/Board/models';
import Button from '@shared/Button/components/Button';
import { checkBoardBoatsPosition } from '@shared/Board/helpers';
import { emitValidatePlayerBoatsPlacement } from '@socket/emittingEvents';
import { placeRandomBoatsInTheBoard } from '@boat/helpers';
import TitleIndication from '@shared/Title/components/TitleIndication';
import useTranslation from '@hooks/useTranslation';

/**
 * Game settings.
 *
 * @return {JSX.Element}
 */
const GamePlacingBoatsView = (): JSX.Element => {
  const { translate } = useTranslation();

  const [boats, setBoats] = useState<BoardBoat[]>([]);

  const { boardDimensions, boatsAuthorized, hasBoatsSafetyZone } =
    useSelector(selectGameRoomSettings);
  const otherPlayer = useSelector(selectGameOtherPlayer);

  const boatsAreWellPlaced = useMemo(
    () =>
      checkBoardBoatsPosition(boats, boardDimensions, hasBoatsSafetyZone) &&
      boats.length === boatsAuthorized.length,
    [boats, boardDimensions, boatsAuthorized, hasBoatsSafetyZone],
  );

  /**
   * When player is ready.
   *
   * @return {void}
   */
  const handlePlayerReady = useCallback((): void => {
    if (boatsAreWellPlaced) emitValidatePlayerBoatsPlacement();
  }, [boatsAreWellPlaced]);

  const handleRandomPlaceBoats = useCallback((): void => {
    setBoats(placeRandomBoatsInTheBoard(boatsAuthorized, boardDimensions, hasBoatsSafetyZone));
  }, [boardDimensions, boatsAuthorized, hasBoatsSafetyZone]);

  return (
    <div className="game-placing-boats">
      <TitleIndication iconName="Boat" title={translate('place-your-boats')} />

      <div className="boats-placement">
        <Board
          dimensions={boardDimensions}
          boats={boats}
          hasBoatsSafetyZone={hasBoatsSafetyZone}
          setBoats={setBoats}
        />

        <Button
          className="button-random-boats"
          iconName="Dice"
          onClick={handleRandomPlaceBoats}
          style="secondary"
        >
          {translate('random')}
        </Button>
      </div>

      <Button
        className="button-ready"
        isDisabled={!boatsAreWellPlaced}
        onClick={handlePlayerReady}
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
