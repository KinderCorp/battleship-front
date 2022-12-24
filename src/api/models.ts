import type { Boat, BoatProps } from '@boat/models';
import type { GetHelloWorldResponse } from '@home/models';
import type { PositionInArray } from '@shared/Board/models';

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

export type ApiResponse<T = any> = {
  data?: T;
};

export type ApiResponseParsed<T = any> = {
  data: T;
};

export type ApiGetHelloWorldResponse = GetHelloWorldResponse;

export interface ApiBoardBoat extends Pick<Boat, 'name'>, Pick<BoatProps, 'direction'> {
  bowCells: PositionInArray[];
}
