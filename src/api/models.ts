import type { Boat, BoatProps } from '@boat/models';
import type { GameInstance } from '@game/models';
import type { GetHelloWorldResponse } from '@home/models';
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
  data?: T;
};

export type ApiResponseParsed<T> = {
  data: T;
};

// Response
export type ApiGetHelloWorldResponse = GetHelloWorldResponse;

export type ApiWeaponResponse = Partial<ApiWeapon>;
export type ApiGetWeaponResponse = ApiWeaponResponse;

export type ApiBoatResponse = Partial<ApiBoat>;

// Boat
export type ApiBoat = Boat;

export interface ApiBoardBoat extends Pick<Boat, 'name'>, Pick<BoatProps, 'direction'> {
  bowCells: ApiPosition[];
}

// Game
export interface ApiGameRoomData<T> extends GameInstance {
  data: T;
}

export type ApiPosition = [x: number, y: number];

export interface ApiGameShoot {
  originCell: ApiPosition;
  weaponName: Weapon['name'];
}

// Weapon
export interface ApiWeapon extends Omit<Weapon, 'damageArea'> {
  damageArea: ApiPosition[];
}
