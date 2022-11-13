import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

import * as apiConstants from '@api/constants';
import * as apiHelpers from '@api/helpers';
import type { Action, HttpResponse } from '@api/models';
import setupStore from '@core/store';

// const mockedStore = setupStore() as unknown as jest.MockedFunction<typeof setupStore>;

jest.mock('axios');
const mockedAxios = axios as jest.MockedFunction<typeof axios>;

describe('api/helpers', () => {
  afterEach(() => {
    mockedAxios.mockReset();
  });

  it('should have defined methods', () => {
    expect(apiHelpers.requestWithAxios).toBeDefined();
    expect(apiHelpers.getAuthorizationHeaders).toBeDefined();
  });

  xit('should have a successful request', async () => {
    const actionRequest: Action = { type: 'actionRequestType' };
    const actionResponse: Action = { meta: { value: 10 }, type: 'actionResponseType' };
    const actionFailure: Action = { type: 'actionFailureType' };

    const spyStoreDispatch = jest.spyOn(setupStore(), 'dispatch');

    const axiosConfig: AxiosRequestConfig = {
      method: 'GET',
      url: 'api-test',
    };

    const response: HttpResponse = {
      data: {},
      status: apiConstants.HTTP_STATUS_CODE.OK,
    };

    mockedAxios.mockResolvedValueOnce(response);

    await apiHelpers.requestWithAxios(axiosConfig, actionRequest, actionResponse, actionFailure);

    // Mocker store.dispatch pour savoir si la fonction a bien été appelé avec les bons paramètres

    expect(spyStoreDispatch).toHaveBeenCalledTimes(1);
    expect(spyStoreDispatch).toHaveBeenCalledWith({});
  });

  it('should return the expected header with token authorization', () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiSGVsbG8gOikiLCJpYXQiOjE1MTYyMzkwMjJ9.59fLfWCZWLiMb_rIAyuU8pQledip7lwwvZfuTaBBioc';

    expect(apiHelpers.getAuthorizationHeaders(token)).toEqual({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  });
});
