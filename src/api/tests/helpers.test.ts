import * as apiHelpers from '@api/helpers';

describe('api/helpers', () => {
  it('should have defined methods', () => {
    expect(apiHelpers.requestWithAxios).toBeDefined();
    expect(apiHelpers.requestDispatchWithAxios).toBeDefined();
    expect(apiHelpers.getAuthorizationHeaders).toBeDefined();
  });

  it('should return the expected header with token authorization', () => {
    expect(apiHelpers.getAuthorizationHeaders('token')).toEqual({
      headers: {
        Authorization: 'Bearer token',
      },
    });
  });
});
