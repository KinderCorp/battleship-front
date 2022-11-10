import * as apiConstants from '@api/constants';
import * as apiHelpers from '@api/helpers';
import * as homeActions from '@home/actions';
import { getHelloWorldFailure, getHelloWorldRequest, getHelloWorldResponse } from '@home/reducer';
import { getHelloWorld } from '@home/actions';

describe('home/actions', () => {
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
});
