import * as apiConstants from '@api/constants';
import * as apiHelpers from '@api/helpers';
import { getHelloWorldFailure, getHelloWorldRequest, getHelloWorldResponse } from './reducer';

/**
 * Get hello world, a route just for fun.
 *
 * @return {Promise<void>}
 */
export const getHelloWorld = (): any => {
  const axiosParams = {
    method: 'GET',
    url: apiConstants.API_HELLO,
  };

  return apiHelpers.requestWithAxios(
    axiosParams,
    getHelloWorldRequest,
    getHelloWorldResponse,
    getHelloWorldFailure,
  );
};
