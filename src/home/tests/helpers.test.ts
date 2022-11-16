import * as apiHelpers from '@api/helpers';
import * as homeHelpers from '@home/helpers';
import apiGetHelloWorldResponseMock from '@mocks/api/apiGetHelloWorldResponse.mock';

describe('home/helpers', () => {
  it('should have defined methods', () => {
    expect(homeHelpers.parseHelloWorld).toBeDefined();
  });

  it('should parse hello world when the data is not here', () => {
    expect(homeHelpers.parseHelloWorld()).toEqual('');
  });

  it('should parse hello world when the data is here', () => {
    const { data: message } = apiHelpers.parseApiResponse(apiGetHelloWorldResponseMock);
    expect(homeHelpers.parseHelloWorld(message)).toEqual('Hello world!');
  });
});
