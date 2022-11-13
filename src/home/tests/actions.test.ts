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

  it('should get the hello world', async () => {
    const spyRequestWithAxios = jest.spyOn(apiHelpers, 'requestWithAxios');

    const axiosConfig = {
      method: 'GET',
      url: apiConstants.API_HELLO,
    };

    homeActions.getHelloWorld();

    expect(spyRequestWithAxios).toHaveBeenCalledTimes(1);
    expect(spyRequestWithAxios).toHaveBeenCalledWith(
      axiosConfig,
      getHelloWorldRequest,
      getHelloWorldResponse,
      getHelloWorldFailure,
    );
  });

  xit('should have a successful request - getHelloWorld', async () => {
    const data: GetHelloWorldResponse = {
      message: 'Welcome !',
    };
    const response: HttpResponse = {
      data,
      status: apiConstants.HTTP_STATUS_CODE.OK,
    };
    mockedAxios.mockResolvedValueOnce(response);

    await homeActions.getHelloWorld();

    expect(mockedAxios).toHaveBeenCalledWith({ method: 'GET', url: apiConstants.API_HELLO });

    // TODO: Mock store.dispatch to check if functions are called with good parameters for request/response request, same for test if called is rejected
  });
});
