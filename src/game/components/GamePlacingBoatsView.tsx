import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  emitUnvalidatePlayerBoatsPlacement,
  emitValidatePlayerBoatsPlacement,
} from '@socket/emittingEvents';
import { selectGameOtherPlayer, selectGamePlayer, selectGameRoomSettings } from '@game/selectors';
import { areBoatsReady } from '@game/helpers';
import Board from '@shared/Board/components/Board';
import type { BoardBoat } from '@shared/Board/models';
import Button from '@shared/Button/components/Button';
import { checkBoardBoatsPosition } from '@shared/Board/helpers';
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
  const player = useSelector(selectGamePlayer);
  const isReady = useMemo(() => areBoatsReady(player), [player]);
  const otherPlayerIsReady = useMemo(() => areBoatsReady(otherPlayer), [otherPlayer]);

  const boatsAreWellPlaced = useMemo(
    () =>
      // FIXME: Cannot read properties of undefined (reading 'length' on boatsAuthorized)
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
    if (boatsAreWellPlaced) {
      if (!isReady) emitValidatePlayerBoatsPlacement(boats);
      else emitUnvalidatePlayerBoatsPlacement();
    }
  }, [boatsAreWellPlaced, boats, isReady]);

  const handleRandomPlaceBoats = useCallback((): void => {
    if (!isReady) {
      setBoats(placeRandomBoatsInTheBoard(boatsAuthorized, boardDimensions, hasBoatsSafetyZone));
    }
  }, [boardDimensions, boatsAuthorized, hasBoatsSafetyZone, isReady]);

  return (
    <div className="game-placing-boats">
      <TitleIndication iconName="Boat" title={translate('place-your-boats')} />

      <div className="boats-placement">
        <Board
          dimensions={boardDimensions}
          boats={boats}
          hasBoatsSafetyZone={hasBoatsSafetyZone}
          setBoats={setBoats}
          isPlacementActive={!isReady}
        />

        <Button
          className="button-random-boats"
          iconName="Dice"
          onClick={handleRandomPlaceBoats}
          style="secondary"
          isDisabled={isReady}
        >
          {translate('random')}
        </Button>
      </div>

      <Button
        className="button-ready"
        isDisabled={!boatsAreWellPlaced}
        onClick={handlePlayerReady}
        size="large"
        style={!isReady ? 'secondary' : 'primary'}
      >
        {!isReady ? translate('i-am-not-ready') : translate('i-am-ready')}
      </Button>

      <p className="rival-indication">
        {!otherPlayerIsReady
          ? translate('player-placing-his-boats', { pseudo: otherPlayer?.pseudo || '' })
          : translate('player-ready', { pseudo: otherPlayer?.pseudo || '' })}
      </p>
    </div>
  );
};

export default GamePlacingBoatsView;
