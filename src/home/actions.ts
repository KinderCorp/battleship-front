import * as apiConstants from '@api/constants';
import * as apiHelpers from '@api/helpers';
import { getHelloWorldFailure, getHelloWorldRequest, getHelloWorldResponse } from '@home/reducer';

/**
 * Get hello world, a route just for fun.
 *
 * @return {Promise<void>}
 */
export const getHelloWorld = async (): Promise<void> => {
  const axiosConfig = {
    method: 'GET',
    url: apiConstants.API_HELLO,
  };

  return await apiHelpers.requestWithAxios(
    axiosConfig,
    getHelloWorldRequest,
    getHelloWorldResponse,
    getHelloWorldFailure,
  );
};
