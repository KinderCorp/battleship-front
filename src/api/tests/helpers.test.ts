import mockAxios from 'jest-mock-axios';

import * as apiConstants from '@api/constants';
import * as apiHelpers from '@api/helpers';
import * as homeActions from '@home/actions';
import * as homeSelectors from '@home/selectors';
import type { GetHelloWorldResponse } from '@home/models';

describe('api/helpers', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('should have defined methods', () => {
    expect(apiHelpers.requestWithAxios).toBeDefined();
    expect(apiHelpers.getAuthorizationHeaders).toBeDefined();
  });

  xit('should have a successful request', async () => {
    const data: GetHelloWorldResponse = {
      message: 'Welcome !',
    };

    homeActions.getHelloWorld();

    expect(mockAxios.get).toHaveBeenCalledWith(apiConstants.API_HELLO);

    mockAxios.mockResponse({ data });

    // Store dispatch request is called
    // Store dispatch response is called
    // Store dispatch failure is not called
  });

  it('should return the expected header with token authorization', () => {
    expect(apiHelpers.getAuthorizationHeaders('token')).toEqual({
      headers: {
        Authorization: 'Bearer token',
      },
    });
  });
});
