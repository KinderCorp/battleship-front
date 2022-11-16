import axios from 'axios';

import * as apiConstants from '@api/constants';
import * as apiHelpers from '@api/helpers';
import * as homeActions from '@home/actions';
import { getHelloWorldFailure, getHelloWorldRequest, getHelloWorldResponse } from '@home/reducer';
import { getHelloWorld } from '@home/actions';
import type { GetHelloWorldResponse } from '@home/models';
import type { HttpResponse } from '@api/models';

jest.mock('axios');
const mockedAxios = axios as jest.MockedFunction<typeof axios>;

describe('home/actions', () => {
  afterEach(() => {
    mockedAxios.mockReset();
  });

  it('should have defined methods', () => {
    expect(getHelloWorld).toBeDefined();
  });

  it('should have a successful getHelloWorld request', async () => {
    const spyRequestWithAxios = jest.spyOn(apiHelpers, 'requestWithAxios');

    const axiosConfig = {
      method: 'GET',
      url: apiConstants.API_HELLO,
    };

    const data: GetHelloWorldResponse = 'Welcome !';
    const response: HttpResponse = {
      data,
      status: apiConstants.HTTP_STATUS_CODE.OK,
    };
    mockedAxios.mockResolvedValueOnce(response);

    await homeActions.getHelloWorld();

    expect(spyRequestWithAxios).toHaveBeenCalledTimes(1);
    expect(spyRequestWithAxios).toHaveBeenCalledWith(
      axiosConfig,
      getHelloWorldRequest,
      getHelloWorldResponse,
      getHelloWorldFailure,
    );

    expect(mockedAxios).toHaveBeenCalledWith(axiosConfig);

    // TODO: Mock store.dispatch to check if functions are called with good parameters for the request and the response
  });

  xit('should have a rejected getHelloWorld request', async () => {
    // TODO: Mock store.dispatch to check if functions are called with good parameters for the request and the failure
  });
});
