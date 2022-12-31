import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  selectGameRoomOtherPlayer,
  selectGameRoomPlayer,
  selectGameRoomSettings,
} from '@game/selectors';
import type { Weapon, WeaponItem } from '@src/weapon/models';
import Board from '@shared/Board/components/Board';
import { emitShoot } from '@socket/emittingEvents';
import type { Position } from '@shared/Board/models';
import TitleIndication from '@shared/Title/components/TitleIndication';
import useTranslation from '@hooks/useTranslation';
import WeaponList from '@src/weapon/components/WeaponList';
import weaponsMock from '@mocks/data/weapons.mock';

/**
 * Game playing view.
 *
 * @return {JSX.Element}
 */
const GamePlayingView = (): JSX.Element => {
  const { translate } = useTranslation();

  // TODO: Get API weapons
  const weapons = weaponsMock;
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon>(weapons[0]);

  const player = useSelector(selectGameRoomPlayer);
  const otherPlayer = useSelector(selectGameRoomOtherPlayer);
  const { boardDimensions } = useSelector(selectGameRoomSettings);

  const handleShoot = useCallback(
    (position: Position) => {
      emitShoot(selectedWeapon.name, position);
    },
    [selectedWeapon],
  );

  const getWeaponItems = useCallback(
    (): WeaponItem[] =>
      weapons.map((weapon) => ({
        counter: weapon.maxAmmunition,
        isLocked: false,
        isSelected: selectedWeapon.name === weapon.name,
        weapon,
      })),
    [selectedWeapon, weapons],
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
        weaponItems={getWeaponItems()}
      />
    </div>
  );
};

export default GamePlayingView;
