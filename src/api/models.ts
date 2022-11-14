import type { GetHelloWorldResponse } from '@home/models';

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

export type ApiResponse<T = Record<string, any>> = {
  data?: T;
};

export type ApiResponseParsed = {
  data: Record<string, any>;
};

type OtherUnknownKeys = {
  [key: string]: any;
};

export type ApiGetHelloWorldResponse = Partial<GetHelloWorldResponse> & OtherUnknownKeys;
