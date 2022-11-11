import axios from 'axios';
import mockAxios from 'jest-mock-axios';

import * as apiConstants from '@api/constants';
import * as apiHelpers from '@api/helpers';
import * as homeActions from '@home/actions';
import * as homeSelectors from '@home/selectors';
import type { GetHelloWorldResponse } from '@home/models';
import type { HttpResponse } from '@api/models';

jest.mock('axios');

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
    // const reponse: HttpResponse = {
    //   data,
    //   status: apiConstants.HTTP_STATUS_CODE.OK,
    // };
    // mockAxios.mockResponse(reponse);

    // mockAxios.get.mockImplementationOnce(() => {
    //   return Promise.resolve(data);
    // });

    (axios.get as jest.Mock).mockResolvedValue({ data });

    await homeActions.getHelloWorld();

    expect(mockAxios).toHaveBeenCalledWith(apiConstants.API_HELLO);

    // Store dispatch request is called
    // Store dispatch response is called
    // Store dispatch failure is not called
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
