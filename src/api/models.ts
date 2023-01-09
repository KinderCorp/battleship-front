import type { Boat, BoatProps } from '@boat/models';
import type { GamePlayer, GameRoom, GameRoomData } from '@game/models';
import type { GetHelloWorldResponse } from '@home/models';
import type { IntRange } from '@core/models';
import type { Weapon } from '@src/weapon/models';

export interface HttpResponse {
  data: any;
  status?: number;
  statusText?: string;
  headers?: object;
  config?: object;
}

export type Action = {
  type: string;
  meta?: Record<string, any>;
};

export type ApiResponse<T> = {
  data: T;
};

// Response
export type ApiGetHelloWorldResponse = GetHelloWorldResponse;

export type ApiWeaponResponse = Partial<ApiWeapon>;
export type ApiGetWeaponResponse = ApiWeaponResponse;

export type ApiBoatResponse = Partial<Boat>;

// Boat
export interface ApiBoardBoat extends Pick<Boat, 'name'>, Pick<BoatProps, 'direction'> {
  bowCells: ApiPosition[];
}

// Player
export type ApiGamePlayer = Partial<
  Pick<GamePlayer, 'isHost' | 'pseudo' | 'socketId'> & { id: number }
>;

export type ApiExtendedGamePlayer = ApiGamePlayer & Partial<Omit<GamePlayer, keyof ApiGamePlayer>>;

// Game
export type ApiGameRoomData<T> = Partial<GameRoomData<T>>;
export type ApiGameTurn = Partial<{
  actionRemaining: IntRange<0, 2>;
  isTurnOf: ApiGamePlayer;
  nextPlayer: ApiGamePlayer;
}>;

export type ApiGameRoom = Partial<Omit<GameRoom, 'instanceId'>>;

export type ApiPosition = [x: number, y: number];

export interface ApiGameShoot {
  originCell: ApiPosition;
  weaponName: Weapon['name'];
}

// Weapon
export interface ApiWeapon extends Omit<Weapon, 'damageArea'> {
  damageArea: ApiPosition[];
}
