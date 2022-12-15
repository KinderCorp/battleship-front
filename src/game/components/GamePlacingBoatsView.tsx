import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  emitStartGame,
  emitUnvalidatePlayerBoatsPlacement,
  emitValidatePlayerBoatsPlacement,
} from '@socket/emittingEvents';
import {
  selectGameInstance,
  selectGameOtherPlayer,
  selectGamePlayer,
  selectGameRoomSettingsAuthorizedFleet,
  selectGameRoomSettingsBoardDimensions,
  selectGameRoomSettingsHasBoatsSafetyZone,
} from '@game/selectors';
import Board from '@shared/Board/components/Board';
import type { BoardBoat } from '@shared/Board/models';
import Button from '@shared/Button/components/Button';
import { checkBoardBoatsPosition } from '@shared/Board/helpers';
import { GAME_COUNTER_BEFORE_START } from '@game/constants';
import { isPlayerAdmin } from '@game/helpers';
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
  const [counterTime, setCounterTime] = useState<number>(GAME_COUNTER_BEFORE_START);

  // FIXME: use this logic to get settings
  // const { authorisedFleet, boardDimensions, hasBoatsSafetyZone } =
  //   useSelector(selectGameRoomSettings);
  const boardDimensions = useSelector(selectGameRoomSettingsBoardDimensions);
  const authorisedFleet = useSelector(selectGameRoomSettingsAuthorizedFleet);
  const hasBoatsSafetyZone = useSelector(selectGameRoomSettingsHasBoatsSafetyZone);

  const instanceId = useSelector(selectGameInstance);
  const otherPlayer = useSelector(selectGameOtherPlayer);
  const player = useSelector(selectGamePlayer);

  const playerIsReady = useMemo(() => !!player.boatsAreReady, [player]);
  const otherPlayerIsReady = useMemo(() => !!otherPlayer.boatsAreReady, [otherPlayer]);
  const allPlayersAreReady = useMemo(
    () => playerIsReady && otherPlayerIsReady,
    [otherPlayerIsReady, playerIsReady],
  );

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;

    if (allPlayersAreReady && counterTime > 0) {
      interval = setInterval(() => {
        setCounterTime(counterTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (counterTime === 0 && isPlayerAdmin()) emitStartGame(instanceId);

    return () => {
      clearInterval(interval);
    };
  }, [allPlayersAreReady, counterTime, instanceId, setCounterTime]);

  const boatsAreWellPlaced = useMemo(
    () =>
      checkBoardBoatsPosition(boats, boardDimensions, hasBoatsSafetyZone) &&
      boats.length === authorisedFleet.length,
    [authorisedFleet, boats, boardDimensions, hasBoatsSafetyZone],
  );

  /**
   * When player is ready.
   *
   * @return {void}
   */
  const handlePlayerReady = useCallback((): void => {
    if (boatsAreWellPlaced) {
      if (!playerIsReady) emitValidatePlayerBoatsPlacement(boats);
      else emitUnvalidatePlayerBoatsPlacement();
    }
  }, [boatsAreWellPlaced, boats, playerIsReady]);

  const handleRandomPlaceBoats = useCallback((): void => {
    if (!playerIsReady) {
      setBoats(placeRandomBoatsInTheBoard(authorisedFleet, boardDimensions, hasBoatsSafetyZone));
    }
  }, [authorisedFleet, boardDimensions, hasBoatsSafetyZone, playerIsReady]);

  const getMessageIndication = useCallback((): string => {
    const keyToReplace = { pseudo: otherPlayer.pseudo || '' };

    if (allPlayersAreReady) {
      if (counterTime > 0) {
        return translate('game-is-about-to-begin.counter', {
          counter: counterTime.toString(),
          plural: counterTime > 1 ? 's' : '',
        });
      } else {
        return translate('game-is-about-to-begin');
      }
    } else if (!otherPlayerIsReady) {
      return translate('player-placing-his-boats', keyToReplace);
    } else {
      return translate('player-ready', keyToReplace);
    }
  }, [allPlayersAreReady, counterTime, otherPlayerIsReady, otherPlayer, translate]);

  return (
    <div className="game-placing-boats">
      <TitleIndication iconName="Boat" title={translate('place-your-boats')} />

      <div className="boats-placement">
        <Board
          boats={boats}
          dimensions={boardDimensions}
          hasBoatsSafetyZone={hasBoatsSafetyZone}
          isDisabled={playerIsReady}
          isPlacementActive={!playerIsReady}
          setBoats={setBoats}
        />

        <Button
          className="button-random-boats"
          iconName="Dice"
          isDisabled={playerIsReady}
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
        style={!playerIsReady ? 'secondary' : 'primary'}
      >
        {translate('i-am-ready')}
      </Button>

      <p className="rival-indication">{getMessageIndication()}</p>
    </div>
  );
};

export default GamePlacingBoatsView;
