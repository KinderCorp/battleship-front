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

export type ApiResponse<T = any> = {
  data?: T;
};

export type ApiResponseParsed<T = any> = {
  data: T;
};

// type OtherUnknownKeys = {
//   [key: string]: any;
// };

export type ApiGetHelloWorldResponse = GetHelloWorldResponse;
