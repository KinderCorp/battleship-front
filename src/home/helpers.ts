import type { ApiGetHelloWorldResponse } from '@api/models';
import type { GetHelloWorldResponse } from '@home/models';

/**
 * Parse hello world.
 *
 * @param {ApiGetHelloWorldResponse} data Data from API
 * @return {GetHelloWorldResponse}
 */
export const parseHelloWorld = (data: ApiGetHelloWorldResponse = ''): GetHelloWorldResponse =>
  data || '';
