import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  selectGameRoomOtherPlayer,
  selectGameRoomPlayer,
  selectGameRoomSettings,
} from '@game/selectors';
import type { Weapon, WeaponItem } from '@src/weapon/models';
import apiGetWeaponsResponseMock from '@mocks/api/apiGetWeaponsResponse.mock';
import Board from '@shared/Board/components/Board';
import { emitShoot } from '@socket/emittingEvents';
import type { GamePlayerWeaponStorage } from '@game/models';
import { parseWeapons } from '@src/weapon/helpers';
import type { Position } from '@shared/Board/models';
import TitleIndication from '@shared/Title/components/TitleIndication';
import useTranslation from '@hooks/useTranslation';
import WeaponList from '@src/weapon/components/WeaponList';

/**
 * Game playing view.
 *
 * @return {JSX.Element}
 */
const GamePlayingView = (): JSX.Element => {
  const { translate } = useTranslation();

  // TODO: Get API weapons
  const weapons = parseWeapons(apiGetWeaponsResponseMock.data);
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon>(
    weapons.find((weapon) => weapon.maxAmmunition === -1) || ({} as Weapon),
  );

  const player = useSelector(selectGameRoomPlayer);
  const otherPlayer = useSelector(selectGameRoomOtherPlayer);
  const { boardDimensions } = useSelector(selectGameRoomSettings);

  const weaponsItems = useMemo(
    () =>
      player.weaponsStorage?.map(
        ({ ammunition, weaponName }: GamePlayerWeaponStorage): WeaponItem => ({
          ammunition,
          isSelected: selectedWeapon.name === weaponName,
          weapon: weapons.find((weapon) => weapon.name === weaponName) || ({} as Weapon),
        }),
      ) || [],
    [player, selectedWeapon, weapons],
  );

  const handleShoot = useCallback(
    (position: Position) => {
      emitShoot(selectedWeapon.name, position);
    },
    [selectedWeapon],
  );

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
          isDisabled={!player.isTurn}
          isShootActive={!!player.isTurn}
          onClick={handleShoot}
        />
      </div>

      <WeaponList
        isDisabled={!player.isTurn}
        onClick={setSelectedWeapon}
        weaponItems={weaponsItems}
      />
    </div>
  );
};

export default GamePlayingView;
